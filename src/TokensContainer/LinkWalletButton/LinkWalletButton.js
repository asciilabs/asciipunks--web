import React from 'react'
import cn from 'classnames'
import Button from '@components/Button'
import s from './LinkWalletButton.module.css'

const LinkWalletButton = ({ onClick }) => (
  <Button className={s.linkWallet} size="large" onClick={onClick}>
    LINK WALLET
  </Button>
)

export default LinkWalletButton
