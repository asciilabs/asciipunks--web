import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
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
    <>
      <Helmet>
        <meta
          name="twitter:image"
          content={`https://api.asciipunks.com/mypunks/${address}/preview`}
        />
        <meta
          name="twitter:title"
          content={`ASCIIPunks owned by  #${address}`}
        />
        <meta
          name="og:url"
          content={`https://asciipunks.com/mypunks/${address}`}
        />
        <meta name="og:title" content={`ASCIIPunks owned by ${address}`} />
        <meta
          name="og:image"
          content={`https://api.asciipunks.com/mypunks/${address}/preview`}
        />
      </Helmet>

      <Card className={s.card}>
        <h2 className={s.h2}>Punks owned by {address}</h2>
        <div className={s.container}>
          {nfts.map(({ punk, id }) => (
            <Token token={punk} id={id} key={id} />
          ))}
        </div>
      </Card>
    </>
  )
}

export default MyPunks
