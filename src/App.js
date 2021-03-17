import React from 'react'
import { hot } from 'react-hot-loader/root'
import s from './App.module.css'
import './fonts.css'
import './reset.css'
import './index.css'

const App = () => (
  <div className={s.background}>
    <div className={s.title}>ASCII PUNKS</div>
    <div className={s.body}>Some badass punks doin' badass stuff</div>
  </div>
)

export default hot(App)
