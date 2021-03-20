import React, { useEffect, useState } from 'react'
import { hot } from 'react-hot-loader/root'
import Title from './Title'
import Intro from './Intro'
import Stars from './Stars'
import s from './App.module.css'
import './fonts.css'
import './reset.css'
import './index.css'

const App = () => (
  <div className={s.background}>
    <Stars />
    <Title />
    <Intro />
  </div>
)

export default hot(App)
