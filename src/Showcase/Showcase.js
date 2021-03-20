import React, { useEffect, useState, useContext, useMemo } from 'react'
import sortBy from 'lodash/fp/sortBy'
import Card from '@components/Card'
import formatURI from '@utils/formatURI'
import { ContractContext } from '../ContractRegisterer'
import Token from './Token'
import s from './Showcase.module.css'

const tokenIds = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const Showcase = () => {
  const { contract } = useContext(ContractContext)
  const [tokens, setTokens] = useState([])
  const [loaded, setLoaded] = useState(false)

  useEffect(async () => {
    if (!contract || loaded) return

    setLoaded(true)
    tokenIds.forEach(async (id) => {
      const token = formatURI(await contract.methods.tokenURI(id).call())
      setTokens((tokens) => [...tokens, { token, id }])
    })
  }, [contract])

  const sortedTokens = useMemo(() => sortBy('id', tokens), [tokens])

  if (tokens.length < tokenIds) return null

  return (
    <Card className={s.showcase}>
      {sortedTokens.map(({ token, id }) => (
        <Token token={token} id={id} key={id} />
      ))}
    </Card>
  )
}

export default Showcase
