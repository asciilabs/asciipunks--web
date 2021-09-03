import React, { useEffect, useState, useContext, useMemo } from 'react'
import { useWeb3 } from 'eth-react'
import { ContractsContext } from '@contexts/Contracts'
import sortBy from 'lodash/fp/sortBy'
import { Link } from 'react-router-dom'
import cn from 'classnames'
import Card from '@components/Card'
import formatURI from '@utils/formatURI'
import { useContracts } from '@hooks'
import Token from '@components/Token'
import PunkCount from '../PunkCount'
import s from './Showcase.module.css'

const PunkList = ({ nfts }) =>
  nfts.map(({ punk, id, name }) => <Token token={punk} name={name} id={id} key={id} />)

const Showcase = () => {
  const { connected, walletAddress } = useWeb3()
  const { nfts, tokenLimit, totalSupply } = useContracts()

  return (
    <Card className={s.showcaseContainer} id="mypunks">
      <div className={s.flex}>
        <div className={s.titleContainer}>
          <h2 className={s.h2}>Your Punks</h2>
          <Link to={`/mypunks/${walletAddress}`} target="_blank">
            <i className={cn('fas fa-external-link-alt', s.shareButton)}></i>
          </Link>
        </div>

        <PunkCount className={s.punkCount} />
      </div>
      <div className={s.showcase}>
        {connected && nfts.length > 0 ? (
          <PunkList nfts={nfts} />
        ) : (
          "You don't have any punks yet :("
        )}
      </div>
    </Card>
  )
}

export default Showcase
