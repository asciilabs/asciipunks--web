import React from 'react'
import s from './Token.module.css'

const Token = ({ token, id, showId = true }) => (
  <div className={s.tokenContainer}>
    {showId ? <div className={s.tokenId}>#{id}</div> : null}
    <pre className={s.token}>{token}</pre>
  </div>
)

export default Token
