import React, { useEffect, useState, useContext, useMemo } from 'react'
import { ContractsContext } from '@contexts/Contracts'
import sortBy from 'lodash/fp/sortBy'
import Card from '@components/Card'
import formatURI from '@utils/formatURI'
import { useContracts } from '@hooks'
import Token from '@components/Token'
import PunkCount from '../PunkCount'
import s from './Showcase.module.css'

const Showcase = () => {
  const { nfts, tokenLimit, totalSupply } = useContracts()

  return (
    <Card className={s.showcaseContainer}>
      <div className={s.flex}>
        <h2 className={s.h2}>Your Punks</h2>
        <PunkCount className={s.punkCount} />
      </div>
      <div className={s.showcase}>
        {nfts.map(({ punk, id }) => (
          <Token token={punk} id={id} key={id} />
        ))}
      </div>
    </Card>
  )
}

export default Showcase
