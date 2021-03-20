import React from 'react'
import cn from 'classnames'
import s from './LinkWalletButton.module.css'

const LinkWalletButton = ({ onClick }) => (
  <button className={cn('nes-btn', s.linkWallet)} onClick={onClick}>LINK WALLET</button>
)

export default LinkWalletButton

