import React, { useEffect, useState } from 'react'
import { hot } from 'react-hot-loader/root'
import Web3 from 'web3/dist/web3.min.js'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ContractRegisterer, {
  ContractContext,
  ContractProvider,
} from '@components/ContractRegisterer'
import { MetamaskProvider } from '@components/MetamaskContext'
import Navigation from './Navigation'
import Title from './Title'
import Intro from './Intro'
import Stars from './Stars'
import TokensContainer from './TokensContainer'
import s from './App.module.css'
import './fonts.css'
import './reset.css'
import './index.css'

const web3 = new Web3(window.ethereum)

const App = () => {
  return (
    <Router>
      <MetamaskProvider>
        <ContractProvider>
          <ContractRegisterer web3={web3} />
          <Navigation />
          <div className={s.background}>
            <Stars />
            <Title />
            <Switch>
              <Route path="/about">
                About
              </Route>
              <Route path="/">
                <Intro />
                <TokensContainer />
              </Route>
            </Switch>
          </div>
        </ContractProvider>
      </MetamaskProvider>
    </Router>
  )
}

export default hot(App)
