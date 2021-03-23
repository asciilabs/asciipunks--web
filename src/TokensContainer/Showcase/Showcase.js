import React, { useEffect, useState, useContext, useMemo } from 'react'
import { ContractsContext } from '@contexts/Contracts'
import sortBy from 'lodash/fp/sortBy'
import Card from '@components/Card'
import formatURI from '@utils/formatURI'
import { useContracts } from '@hooks'
import Token from './Token'
import s from './Showcase.module.css'

const Showcase = () => {
  const { nfts, tokenLimit, totalSupply } = useContracts()

  return (
    <Card className={s.showcase}>
      There are {tokenLimit} tokens in total. So far {totalSupply} have been
      minted.
    </Card>
  )
}

export default Showcase
