import React, { useEffect, useState, useContext, useMemo } from 'react'
import { useContracts } from '@hooks'
import cn from 'classnames'
import s from './PunkCount.module.css'

const PunkCount = ({className}) => {
  const { tokenLimit, totalSupply } = useContracts()

  return (
    <div className={cn(className, s.punkCount)}>
      {totalSupply} / {tokenLimit} AsciiPunks minted
    </div>
  )
}

export default PunkCount
