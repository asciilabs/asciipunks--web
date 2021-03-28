import React, { useEffect, useState } from 'react'
import useContracts from '@hooks/useContracts'
import Token from '@components/Token'
import Card from '@components/Card'
import { useParams } from 'react-router-dom'

import s from './MyPunks.module.css'

const MyPunks = () => {
  const { punksForUser } = useContracts()
  const { address } = useParams()
  const [nfts, setNfts] = useState([])

  useEffect(async () => {
    setNfts(await punksForUser(address))
  }, [punksForUser])

  return (
    <Card className={s.card}>
      {nfts.map(({ punk, id }) => (
        <Token token={punk} id={id} key={id} />
      ))}
    </Card>
  )
}

export default MyPunks
