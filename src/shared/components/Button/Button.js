import React from 'react'
import cn from 'classnames'
import s from './Button.module.css'

const Button = ({ children, className, size = 'medium' }) => (
  <button
    className={cn(className, s.button, {
      [s.large]: size == 'large',
      [s.small]: size == 'small',
    })}
  >
    {children}
  </button>
)

export default Button
