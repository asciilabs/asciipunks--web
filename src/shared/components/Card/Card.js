import React from 'react'
import cn from 'classnames'
import s from './Card.module.css'

const Card = ({ className, children, id }) => (
  <div className={cn(className, s.card)} id={id}>{children}</div>
)

export default Card
