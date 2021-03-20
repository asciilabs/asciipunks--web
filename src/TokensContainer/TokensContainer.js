import React, { useState } from 'react'
import LinkWalletButton from './LinkWalletButton'
import Showcase from './Showcase'

const TokensContainer = () => {
  const [_, setForceUpdate] = useState(0)
  return window.ethereum?.isConnected() ? (
    <Showcase />
  ) : (
    <LinkWalletButton
      onClick={async () => {
        await window.ethereum.request({ method: 'eth_requestAccounts' })
        // this is to trigger a rerender
        setForceUpdate((x) => x + 1)
      }}
    />
  )
}

export default TokensContainer
