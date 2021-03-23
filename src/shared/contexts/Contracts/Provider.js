import abis from '@abis'
import addresses from '../../addresses'
import useWeb3 from '@hooks/useWeb3'
import { Contract } from 'ethers'
import React, { useCallback, useEffect, useState } from 'react'
import Context from './Context'

const Provider = ({ children }) => {
  // const { setLoadingMessage } = useLoading();
  const [nfts, setNfts] = useState([])
  const [totalSupply, setTotalSupply] = useState(0)
  const [tokenLimit, setTokenLimit] = useState(0)
  const [punks, setPunks] = useState(
    new Contract(addresses.asciiPunks, abis.asciiPunks)
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
    console.log(newTotalSupply)
    console.log(newTokenLimit)

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
  }, [setNfts, punksForUser])

  return (
    <Context.Provider
      value={{
        nfts,
        totalSupply,
        tokenLimit,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Provider
