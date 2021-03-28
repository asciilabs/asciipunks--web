import React, { useEffect, useState } from 'react'
import { hot } from 'react-hot-loader/root'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Web3Provider } from "@contexts/Web3";
import { ContractsProvider } from "@contexts/Contracts";
import 'noty/lib/noty.css'
import './noty-theme.css'

import Navigation from './Navigation'
import Title from './Title'
import Main from './Main'
import Stars from './Stars'
import MyPunks from './MyPunks'
import Punk from './Punk'
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
              <Route path="/mypunks/:address" exact>
                <MyPunks />
              </Route>
              <Route path="/punks/:id" exact>
                <Punk />
              </Route>
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
