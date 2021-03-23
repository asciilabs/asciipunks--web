import React, { useEffect, useState } from 'react'
import { hot } from 'react-hot-loader/root'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Web3Provider } from "@contexts/Web3";
import { ContractsProvider } from "@contexts/Contracts";

import Navigation from './Navigation'
import Title from './Title'
import Intro from './Intro'
import Stars from './Stars'
import TokensContainer from './TokensContainer'
import ErrorPage from './ErrorPage'
import About from './About'
import s from './App.module.css'
import './fonts.css'
import './reset.css'
import './index.css'

const App = () => {
  return (
    <Router>
      <Web3Provider>
        <ContractsProvider>
          <Navigation />
          <div className={s.background}>
            <Stars />
            <Title />
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/" exact>
                <Intro />
                <TokensContainer />
              </Route>
              <Route path="/">
                <ErrorPage />
              </Route>
            </Switch>
          </div>
        </ContractsProvider>
      </Web3Provider>
    </Router>
  )
}

export default hot(App)
