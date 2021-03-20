import React from 'react'
import Button from '@components/Button'
import useMetamask from '@utils/useMetamask'
import s from './Navigation.module.css'

const ConnectButton = () => {
  const connectToMetamask = useMetamask()

  return (
    <Button
      className={s.button}
      onClick={async () => {
        await connectToMetamask()
        window.reload(true)
      }}
    >
      {window.ethereum.isConnected() ? '✓ Connected' : 'Connect'}
    </Button>
  )
}

export default ConnectButton
