import React from 'react'
import Button from '@components/Button'
import ConnectButton from './ConnectButton'
import s from './Navigation.module.css'

const Navigation = () => {

  return (
    <nav className={s.navigation}>
      <div className={s.spacer} />
      <Button className={s.button}>FAQ</Button>
      <Button className={s.button}>About</Button>
      <ConnectButton />
    </nav>
  )
}

export default Navigation
