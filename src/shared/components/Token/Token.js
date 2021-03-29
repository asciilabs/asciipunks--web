import React from 'react'
import cn from 'classnames'
import { Link } from 'react-router-dom'
import s from './Token.module.css'

const Token = ({ token, id, showId = true }) => (
  <div className={s.tokenContainer}>
    {showId ? (
      <div className={s.tokenId}>
        #{id}{' '}
        <Link to={`/punks/${id}`} target="_blank">
          <i className={cn('fas fa-external-link-alt', s.shareButton)}></i>
        </Link>
      </div>
    ) : null}
    <pre className={s.token}>{token}</pre>
  </div>
)

export default Token
