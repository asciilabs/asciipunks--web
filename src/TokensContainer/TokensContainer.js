import React, { useState } from 'react'
import useMetamask from '@utils/useMetamask'
import LinkWalletButton from './LinkWalletButton'
import Showcase from './Showcase'

const TokensContainer = () => {
  const connectToMetamask = useMetamask()

  return window.ethereum?.isConnected() ? (
    <Showcase />
  ) : (
    <LinkWalletButton
      onClick={async () => {
        connectToMetamask()
      }}
    />
  )
}

export default TokensContainer
