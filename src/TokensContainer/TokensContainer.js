import React, { useState } from 'react'
import LinkWalletButton from './LinkWalletButton'
import useWeb3 from '@hooks/useWeb3'
import Showcase from './Showcase'

const TokensContainer = () => {
  const { connected } = useWeb3()

  return connected ? (
    <Showcase />
  ) : (
    <LinkWalletButton
      onClick={async () => {
        // connectToMetamask()
      }}
    />
  )
}

export default TokensContainer
