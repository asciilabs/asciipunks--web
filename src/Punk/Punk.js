import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'
import cn from 'classnames'
import { Helmet } from 'react-helmet'
import useContracts from '@hooks/useContracts'
import useWeb3 from '@hooks/useWeb3'
import Button from '@components/Button'
import Card from '@components/Card'
import Token from '@components/Token'
import { useParams } from 'react-router-dom'

import s from './Punk.module.css'

const customStyles = {
  content: {
    backgroundColor: 'var(--baby-powder)',
    bottom: 'auto',
    boxShadow: '4px 5px var(--mandarin)',
    left: '50%',
    marginRight: '-50%',
    padding: '32px',
    right: 'auto',
    top: '50%',
    transform: 'translate(-50%, -100%)',
  },
}

const Punk = () => {
  const { walletAddress } = useWeb3()
  const { drawPunk, ownerOf, fetchNameById, setName } = useContracts()
  const [punk, setPunk] = useState()
  const [owner, setOwner] = useState()
  const [punkName, setPunkName] = useState('')
  const [processingRequest, setProcessingRequest] = useState(false)
  const [editingName, setEditingName] = useState(false)
  const { id } = useParams()

  useEffect(async () => {
    if (!fetchNameById) return

    setPunkName(await fetchNameById(id))
  }, [setPunkName, fetchNameById])

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
        <meta
          name="twitter:title"
          content={`ASCIIPunk #${id}${
            punkName?.length ? ` — ${punkName}` : ''
          }`}
        />
        <meta
          name="twitter:description"
          content={`Check out this ASCIIPunk — Punk #${id}`}
        />
        <meta name="og:url" content={`https://asciipunks.com/punks/${id}`} />
        <meta
          name="og:title"
          content={`ASCIIPunk #${id}${
            punkName?.length ? ` — ${punkName}` : ''
          }`}
        />
        <title>
          ASCIIPunk #{id}
          {punkName?.length ? ` — ${punkName}` : ''}
        </title>
        <meta
          name="og:image"
          content={`https://api.asciipunks.com/punks/${id}/preview`}
        />
        <meta
          property="og:description"
          content={`Check out this ASCIIPunk — Punk #${id}`}
        />
      </Helmet>
      {punk ? (
        <Card className={s.card}>
          <h2 className={s.h2}>
            <span>
              #{id}
              {punkName ? ':' : null}{' '}
            </span>
            <span>{punkName}</span>
          </h2>
          <Token token={punk} id={id} key={id} name={punkName} showId={false} />
          {owner == walletAddress ? (
            <Button
              className={s.saveButton}
              onClick={() => setEditingName(true)}
            >
              Edit name!
            </Button>
          ) : null}
          <Modal
            isOpen={editingName}
            style={customStyles}
            onRequestClose={() => setEditingName(false)}
          >
            {processingRequest ? (
              <div>
                <div className={s.processingCopy}>
                  We are currently processing your request, check your metamask
                  for whenever the transaction will complete.
                </div>
                <Button
                  className={s.okay}
                  onClick={() => {
                    setEditingName(false)
                    setProcessingRequest(false)
                  }}
                >
                  Okay
                </Button>
              </div>
            ) : (
              <div>
                <h2 className={cn(s.h2, s.modalTitle)}>Name your punk</h2>
                <div className={s.inputWrapper}>
                  <input
                    className={s.editPunk}
                    value={punkName}
                    onChange={(e) => setPunkName(e.target.value)}
                  />
                  <Button
                    className={s.saveButton}
                    onClick={async () => {
                      setProcessingRequest(true)
                      await setName(id, punkName)
                    }}
                  >
                    Save
                  </Button>
                </div>
              </div>
            )}
          </Modal>
          <h3 className={s.h3}>Owned by {owner}</h3>
        </Card>
      ) : null}
    </>
  )
}

export default Punk
