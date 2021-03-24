import React from 'react'
import Button from '@components/Button'
import { useContracts } from '@hooks'
import s from './MintButton.module.css'

const MintButton = () => {
  const { createPunk } = useContracts()

  return (
    <Button className={s.mintButton} onClick={() => createPunk()}>
      Mint 1 AsciiPunk for 0.1 ETHER
    </Button>
  )
}

export default MintButton
