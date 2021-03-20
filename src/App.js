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
  const [contract, setContract] = useState()
  useEffect(() => {
    setWeb3(new Web3(Web3.givenProvider))
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
            onClick={() => {
              window.ethereum.request({ method: 'eth_requestAccounts' })
            }}
          />
        )}
        }
      </div>
    </ContractContext.Provider>
  )
}

export default hot(App)
