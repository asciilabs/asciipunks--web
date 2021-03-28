import React, { useEffect, useState } from 'react'
import useContracts from '@hooks/useContracts'
import Token from '@components/Token'
import Card from '@components/Card'
import { useParams } from 'react-router-dom'

import s from './Punk.module.css'

const Punk = () => {
  const { drawPunk } = useContracts()
  const [punk, setPunk] = useState()
  const { id } = useParams()

  useEffect(async () => {
    if (!drawPunk) return

    setPunk(await drawPunk(id))
  }, [drawPunk])

  if (!punk) return null

  return (
    <Card className={s.card}>
      <h2 className={s.h2}>Punk #{id}</h2>
      <Token token={punk} id={id} key={id} showId={false} />
    </Card>
  )
}

export default Punk
