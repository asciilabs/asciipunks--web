import React, { useEffect, useState } from 'react'
import { hot } from 'react-hot-loader/root'
import Web3 from 'web3/dist/web3.min.js'
import ContractRegisterer, { ContractContext } from './ContractRegisterer'
import Title from './Title'
import Intro from './Intro'
import Stars from './Stars'
import LinkWalletButton from './LinkWalletButton'
import Showcase from './Showcase'
import s from './App.module.css'
import './fonts.css'
import './reset.css'
import './index.css'

const App = () => {
  const [web3, setWeb3] = useState()
  const [_, setForceUpdate] = useState(0)
  const [contract, setContract] = useState()
  useEffect(() => {
    setWeb3(new Web3(window.ethereum))
  }, [])

  if (!web3) return null

  return (
    <ContractContext.Provider value={{ contract, setContract }}>
      <ContractRegisterer web3={web3} />
      <div className={s.background}>
        <Stars />
        <Title />
        <Intro />
        {window.ethereum?.isConnected() ? (
          <Showcase />
        ) : (
          <LinkWalletButton
            onClick={async () => {
              await window.ethereum.request({ method: 'eth_requestAccounts' })
              // this is to trigger a rerender
              setForceUpdate(x => x + 1)
            }}
          />
        )}
        }
      </div>
    </ContractContext.Provider>
  )
}

export default hot(App)
