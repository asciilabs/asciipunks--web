import React from 'react'
import cn from 'classnames'
import { useWeb3 } from 'eth-react'
import Button from '@components/Button'
import s from './LinkWalletButton.module.css'

const LinkWalletButton = () => {
  const { handleConnect } = useWeb3()

  return (
    <Button className={s.linkWallet} size="large" onClick={handleConnect}>
      LINK WALLET
    </Button>
  )
}

export default LinkWalletButton
