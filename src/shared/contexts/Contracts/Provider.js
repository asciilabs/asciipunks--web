import abis from '@abis'
import useInterval from '@use-it/interval'
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
  const [saleStarted, setSaleStarted] = useState(false)
  const [currentPrice, setCurrentPrice] = useState('')
  const [punks, setPunks] = useState(
    new Contract(addresses.asciiPunks, abis.asciiPunks)
  )
  const { wallet, walletAddress } = useWeb3()

  useEffect(() => {
    ;(async function () {
      if (!punks) return

      await punks.deployed()
      punks.on('Generated', (...args) => console.log(args))
    })()

    return () => punks.off('Generated')
  }, [punks])

  useEffect(() => {
    if (!!wallet && !punks.signer) {
      setPunks(punks.connect(wallet))
    }
  }, [wallet, setPunks, punks])

  const punksForUser = useCallback(async () => {
    if (!walletAddress || !punks.signer) return []
    const userPunks = []

    const balance = (await punks.balanceOf(walletAddress)).toNumber()
    for (let index = 0; index < balance; index++) {
      const id = (
        await punks.tokenOfOwnerByIndex(walletAddress, index)
      ).toNumber()
      userPunks.push({ punk: await punks.draw(id), id })
    }
    return userPunks
  }, [punks, walletAddress])

  const totalPunks = useCallback(async () => {
    if (!walletAddress || !punks.signer) return []

    const newTotalSupply = (await punks.totalSupply()).toNumber()
    const newTokenLimit = (await punks.TOKEN_LIMIT()).toNumber()

    return { totalSupply: newTotalSupply, tokenLimit: newTokenLimit }
  }, [punks, walletAddress])

  const getSaleStarted = useCallback(async () => {
    if (!walletAddress || !punks.signer) return false

    const started = await punks.hasSaleStarted()
    return started
  }, [punks, walletAddress])

  const calculateCurrentPrice = useCallback(async () => {
    const { totalSupply } = await totalPunks()
    let currentPrice

    if (totalSupply < 256) {
      currentPrice = '50000000000000000'
    } else if (totalSupply >= 256 && totalSupply < 512) {
      currentPrice = '100000000000000000'
    } else if (totalSupply >= 512 && totalSupply < 1024) {
      currentPrice = '200000000000000000'
    } else if (totalSupply >= 1024 && totalSupply < 1536) {
      currentPrice = '300000000000000000'
    } else {
      currentPrice = '400000000000000000'
    }
    return currentPrice
  }, [totalPunks])

  const fetchTokens = useCallback(async () => {
    setNfts(await punksForUser())

    const { totalSupply, tokenLimit } = await totalPunks()
    const started = await getSaleStarted()
    const currentPrice = await calculateCurrentPrice()
    setSaleStarted(started)
    setTotalSupply(totalSupply)
    setTokenLimit(tokenLimit)
    setCurrentPrice(currentPrice)
  }, [
    setTotalSupply,
    setTokenLimit,
    setSaleStarted,
    setNfts,
    setCurrentPrice,
    currentPrice,
    punksForUser,
    totalPunks,
    getSaleStarted,
  ])

  const fetchTokensById = useCallback(
    async (ids) => {
      return Promise.all(ids.map(async (id) => punks.draw(id)))
    },
    [punks]
  )

  useInterval(async () => {
    fetchTokens()
  }, 5000)

  useEffect(() => {
    fetchTokens()
  }, [fetchTokens])

  const createPunk = useCallback(
    async (seed) => {
      await punks.createPunk(parseInt(seed), {
        value: currentPrice,
        from: walletAddress,
        gasLimit: 200000
      })

      const { totalSupply, tokenLimit } = await totalPunks()
      setTotalSupply(totalSupply)
      setTokenLimit(tokenLimit)
      setNfts(await punksForUser())
    },
    [
      punks,
      currentPrice,
      walletAddress,
      totalPunks,
      setTotalSupply,
      setTokenLimit,
      setNfts,
      punksForUser,
    ]
  )

  return (
    <Context.Provider
      value={{
        createPunk,
        fetchTokensById,
        nfts,
        saleStarted,
        tokenLimit,
        totalSupply,
        currentPrice,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Provider
