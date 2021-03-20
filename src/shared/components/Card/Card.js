import React from 'react'
import cn from 'classnames'
import s from './Card.module.css'

const Card = ({ className, children }) => (
  <div className={cn(className, s.card)}>{children}</div>
)

export default Card
