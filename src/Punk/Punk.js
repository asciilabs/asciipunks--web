import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import useContracts from '@hooks/useContracts'
import Token from '@components/Token'
import Card from '@components/Card'
import { useParams } from 'react-router-dom'

import s from './Punk.module.css'

const Punk = () => {
  const { drawPunk, ownerOf } = useContracts()
  const [punk, setPunk] = useState()
  const [owner, setOwner] = useState()
  const { id } = useParams()

  useEffect(async () => {
    if (!drawPunk) return

    setPunk(await drawPunk(id))
  }, [drawPunk])

  useEffect(async () => {
    if (!ownerOf) return

    setOwner(await ownerOf(id))
  }, [ownerOf])

  return (
    <>
      <Helmet>
        <meta
          name="twitter:image"
          content={`https://api.asciipunks.com/punks/${id}/preview`}
        />
        <meta name="twitter:title" content={`ASCIIPunks — Punk #${id}`} />
        <meta name="og:url" content={`https://asciipunks.com/punks/${id}`} />
        <meta name="og:title" content={`ASCIIPunks — Punk #${id}`} />
        <meta
          name="og:image"
          content={`https://api.asciipunks.com/punks/${id}/preview`}
        />
        <meta
          property="og:description"
          content={`Check out this ASCIIPunk — Punk #${id}`}
        />
        <meta
          name="twitter:description"
          content={`Check out this ASCIIPunk — Punk #${id}`}
        />
      </Helmet>
      <Card className={s.card}>
        <h2 className={s.h2}>Punk #{id}</h2>
        <Token token={punk} id={id} key={id} showId={false} />
        <h3 className={s.h3}>Owned by {owner}</h3>
      </Card>
    </>
  )
}

export default Punk
