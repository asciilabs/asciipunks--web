import React from 'react'
import Button from '@components/Button'
import useMetamask from '@utils/useMetamask'
import s from './Navigation.module.css'

const ConnectButton = () => {
  const connectToMetamask = useMetamask()

  console.log(window.ethereum);
  debugger;
  return (
    <Button
      className={s.button}
      onClick={async () => {
        await connectToMetamask()
        // location.reload(true)
      }}
    >
      {window.ethereum?.isConnected() ? '✓ Connected' : 'Connect'}
    </Button>
  )
}

export default ConnectButton
