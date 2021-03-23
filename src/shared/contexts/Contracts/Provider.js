import abis from '@abis'
import useWeb3 from '@hooks/useWeb3'
import { Contract } from 'ethers'
import React, { useCallback, useEffect, useState } from 'react'
import Context from './Context'
import addresses from '../../addresses'

const Provider = ({ children }) => {
  // const { setLoadingMessage } = useLoading();
  const [nfts, setNfts] = useState([])
  const [totalSupply, setTotalSupply] = useState(0)
  const [tokenLimit, setTokenLimit] = useState(0)
  const [punks, setPunks] = useState(
    new Contract(addresses.asciiPunksRinkeby, abis.asciiPunks)
  )
  const { wallet, walletAddress } = useWeb3()

  useEffect(() => {
    if (!!wallet && !punks.signer) {
      setPunks(punks.connect(wallet))
    }
  }, [wallet, setPunks, punks])

  // const createPunk = useCallback(async () => {
  //   if (!walletAddress || !punks.signer ) { return };
  // }, [punks, walletAddress]);

  const punksForUser = useCallback(async () => {
    if (!walletAddress || !punks.signer) return []
    const userPunks = []

    const balance = (await punks.balanceOf(walletAddress)).toNumber()
    for (let index = 0; index < balance; index++) {
      userPunks.push(
        await punks.tokenOfOwnerByIndex(walletAddress, index).toString()
      )
    }
    return userPunks
  }, [punks, walletAddress])

  const totalPunks = useCallback(async () => {
    if (!walletAddress || !punks.signer) return []

    const newTotalSupply = (await punks.totalSupply()).toNumber()
    const newTokenLimit = (await punks.TOKEN_LIMIT()).toNumber()

    return { totalSupply: newTotalSupply, tokenLimit: newTokenLimit }
  }, [punks])

  useEffect(() => {
    async function fetchTokens() {
      setNfts(await punksForUser())

      const { totalSupply, tokenLimit } = await totalPunks()
      setTotalSupply(totalSupply)
      setTokenLimit(tokenLimit)
    }
    fetchTokens()
  }, [setTotalSupply, setTokenLimit, punksForUser, setNfts, totalPunks])

  const createPunk = useCallback(async () => {
    const seed = Math.random() * 1000000000
    await punks.createPunk(parseInt(seed), {
      value: '100000000000000000',
      from: walletAddress,
    })

    const { totalSupply, tokenLimit } = await totalPunks()
    setTotalSupply(totalSupply)
    setTokenLimit(tokenLimit)
    setNfts(await punksForUser())
  }, [
    punks,
    walletAddress,
    totalPunks,
    setTotalSupply,
    setTokenLimit,
    setNfts,
    punksForUser,
  ])

  return (
    <Context.Provider
      value={{
        nfts,
        totalSupply,
        tokenLimit,
        createPunk,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Provider
