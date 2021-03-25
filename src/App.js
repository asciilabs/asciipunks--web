import React, { useEffect, useState } from 'react'
import { hot } from 'react-hot-loader/root'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Web3Provider } from "@contexts/Web3";
import { ContractsProvider } from "@contexts/Contracts";

import Navigation from './Navigation'
import Title from './Title'
import Main from './Main'
import Stars from './Stars'
import ErrorPage from './ErrorPage'
import s from './App.module.css'
import './fonts.css'
import './reset.css'
import './index.css'
import './fontawesome/css/all.css'

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
              <Route path="/" exact>
                <Main />
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
