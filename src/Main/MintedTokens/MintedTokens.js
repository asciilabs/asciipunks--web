import React, { useState, useEffect } from 'react'
import cn from 'classnames'
import sortBy from 'lodash/fp/sortBy'
import Card from '@components/Card'
import Token from '@components/Token'
import useContracts from '@hooks/useContracts'
import s from './MintedTokens.module.css'
import PunkCount from '../PunkCount'

const MintedTokens = () => {
  const { fetchTokensById, totalSupply } = useContracts()
  const [ids, setIds] = useState([])
  const [tokens, setTokens] = useState([])

  const rangeFrom = (x) => {
    const endingId = x + 4

    return [...Array(totalSupply + 1).keys()].slice(x, endingId)
  }

  useEffect(async () => {
    if (!totalSupply) return

    const startingId = ids[0] != null ? ids[0] : 1
    const newIds = rangeFrom(startingId)
    const newTokens = await fetchTokensById(newIds)
    const zippedTokens = sortBy(
      'id',
      newTokens.map((token, i) => ({ token, id: newIds[i] }))
    )

    setTokens(zippedTokens)
    if (ids[0] == null) setIds(newIds)
  }, [ids, totalSupply, fetchTokensById])

  if (tokens.length == 0) return null

  return (
    <Card className={s.card}>
      <div className={s.flex}>
        <h2 className={s.h2}>Minted AsciiPunks</h2>
        <PunkCount className={s.punkCount} />
      </div>
      <div className={s.container}>
        <button
          className={cn('fas fa-arrow-left', s.button, s.leftButton)}
          onClick={() => {
            setIds((ids) => {
              if (ids[0] == 1) return rangeFrom(totalSupply - 3)

              return rangeFrom(ids[0] - 4)
            })
          }}
        />
        {tokens.map(({ token, id }) => (
          <Token token={token} id={id} key={id} />
        ))}
        <button
          className={cn('fas fa-arrow-right', s.button, s.rightButton)}
          onClick={() => {
            setIds((ids) => {
              if (ids[ids.length - 1] == totalSupply) return []

              return rangeFrom(ids[ids.length - 1] + 1)
            })
          }}
        />
      </div>
    </Card>
  )
}

export default MintedTokens
