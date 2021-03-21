import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import Button from '@components/Button'
import ConnectButton from './ConnectButton'
import s from './Navigation.module.css'

const Navigation = () => {
  const history = useHistory()

  return (
    <nav className={s.navigation}>
      <div className={s.spacer} />
      <Button className={s.button} onClick={() => history.push('/faq')}>
        FAQ
      </Button>
      <Button className={s.button} onClick={() => history.push('/about')}>
        About
      </Button>
      <ConnectButton />
    </nav>
  )
}

export default Navigation
