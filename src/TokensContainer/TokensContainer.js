import React, { useState } from 'react'
import useWeb3 from '@hooks/useWeb3'
import Showcase from './Showcase'
import MintButton from './MintButton'
import LinkWalletButton from './LinkWalletButton'

const TokensContainer = () => {
  const { connected } = useWeb3()

  return connected ? (
    <>
      <Showcase />
      <MintButton />
    </>
  ) : (
    <LinkWalletButton
      onClick={async () => {
        // connectToMetamask()
      }}
    />
  )
}

export default TokensContainer
