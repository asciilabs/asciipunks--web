import React from 'react'
import { useWeb3 } from 'eth-react'
import Button from '@components/Button'
import s from './Navigation.module.css'

const ConnectButton = () => {
  const { handleConnect, connected } = useWeb3()

  return (
    <Button
      className={s.button}
      onClick={handleConnect}
    >
      {connected ? '✓ Connected' : 'Connect'}
    </Button>
  )
}

export default ConnectButton
