import React from 'react'
import s from './Token.module.css'

const Token = ({ token, id }) => (
  <div className={s.tokenContainer}>
    <div className={s.tokenId}>#{id}</div>
    <pre className={s.token}>{token}</pre>
  </div>
)

export default Token
