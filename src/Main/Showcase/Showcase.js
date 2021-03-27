import React, { useEffect, useState, useContext, useMemo } from 'react'
import useWeb3 from '@hooks/useWeb3'
import { ContractsContext } from '@contexts/Contracts'
import sortBy from 'lodash/fp/sortBy'
import Card from '@components/Card'
import formatURI from '@utils/formatURI'
import { useContracts } from '@hooks'
import Token from '@components/Token'
import PunkCount from '../PunkCount'
import s from './Showcase.module.css'

const PunkList = ({ nfts }) => (
  nfts.map(({ punk, id }) => (
    <Token token={punk} id={id} key={id} />
  ))
)

const Showcase = () => {
  const { connected } = useWeb3()
  const { nfts, tokenLimit, totalSupply } = useContracts()

  return (
    <Card className={s.showcaseContainer} id="mypunks">
      <div className={s.flex}>
        <h2 className={s.h2}>Your Punks</h2>
        <PunkCount className={s.punkCount} />
      </div>
      <div className={s.showcase}>
        {
          connected && nfts.length > 0 ?
            <PunkList nfts={nfts}/> :
            'You don\'t have any punks yet :('
        }
      </div>
    </Card>
  )
}

export default Showcase
