import React from 'react'
import cn from 'classnames'
import { Link } from 'react-router-dom'
import s from './Token.module.css'
import ReactTooltip from 'react-tooltip'

const Token = ({ token, name, id, showId = true }) => (
  <div className={s.tokenContainer}>
    {showId ? (
      <div className={s.tokenId}>
        <span>#{id}</span>
        {name && showId ? (
          <>
            <i
              class="fas fa-signature"
              data-tip={name}
              className={cn('fas fa-signature', s.signatureIcon)}
            ></i>
            <ReactTooltip />
          </>
        ) : null}
        <Link className={s.link} to={`/punks/${id}`} target="_blank">
          <i className={cn('fas fa-external-link-alt', s.shareButton)}></i>
        </Link>
      </div>
    ) : null}
    <pre className={s.token}>{token}</pre>
  </div>
)

export default Token
