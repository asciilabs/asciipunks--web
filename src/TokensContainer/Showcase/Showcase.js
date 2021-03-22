import React, { useEffect, useState, useContext, useMemo } from 'react'
import sortBy from 'lodash/fp/sortBy'
import Card from '@components/Card'
import formatURI from '@utils/formatURI'
import { ContractContext } from '@components/ContractRegisterer'
import Token from './Token'
import s from './Showcase.module.css'

// const tokenIds = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const Showcase = () => {
  const { contract } = useContext(ContractContext)
  const [tokens, setTokens] = useState([])
  const [tokenLimit, setTokenLimit] = useState(0)
  const [totalSupply, setTotalSupply] = useState(0);
  const [loaded, setLoaded] = useState(false)

  useEffect(async () => {
    if (!contract || loaded) return

    setLoaded(true)
    // tokenIds.forEach(async (id) => {
    //   const token = formatURI(await contract.methods.tokenURI(id).call())
    //   setTokens((tokens) => [...tokens, { token, id }])
    // })
    setTotalSupply(await contract.methods.totalSupply().call())
    setTokenLimit(await contract.methods.TOKEN_LIMIT().call())
  }, [contract])

  const sortedTokens = useMemo(() => sortBy('id', tokens), [tokens])

  // if (sortedTokens.length < tokenIds.length) return null

  return (
    <Card className={s.showcase}>
      There are {tokenLimit} tokens in total. So far {totalSupply} have been minted.
    </Card>
  )
}

export default Showcase
