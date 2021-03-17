import React from 'react'
import { hot } from 'react-hot-loader/root'
import s from './App.module.css'
import './fonts.css'
import './reset.css'

const App = () => <>
  <div className={s.title}>ASCII PUNKS</div>
  <div className={s.body}>Some badass punks doin' badass stuff</div>
</>

export default hot(App)
