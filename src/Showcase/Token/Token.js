import React from 'react'
import s from './Token.module.css'

const Token = ({ token, id }) => (
  <div className={s.tokenContainer}>
    <pre className={s.token}>{token}</pre>
    <div className={s.tokenId}>{id}</div>
  </div>
)

export default Token
