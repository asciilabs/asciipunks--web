import React, { useEffect, useState, useContext, useMemo } from 'react'
import { ContractsContext } from '@contexts/Contracts'
import sortBy from 'lodash/fp/sortBy'
import Card from '@components/Card'
import formatURI from '@utils/formatURI'
import { useContracts } from '@hooks'
import Token from '@components/Token'
import s from './Showcase.module.css'

const Showcase = () => {
  const { nfts, tokenLimit, totalSupply } = useContracts()

  return (
    <Card className={s.showcaseContainer}>
      There are {tokenLimit} tokens in total. So far {totalSupply} have been
      minted. Here are your punks:
      <div className={s.showcase}>
        {nfts.map(({ punk, id }) => (
          <Token token={punk} id={id} key={id} />
        ))}
      </div>
    </Card>
  )
}

export default Showcase
