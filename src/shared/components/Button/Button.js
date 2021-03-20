import React from 'react'
import cn from 'classnames'
import s from './Button.module.css'

const Button = ({ children, className, size = 'medium', onClick }) => (
  <button
    className={cn(className, s.button, {
      [s.large]: size == 'large',
      [s.small]: size == 'small',
    })}
    onClick={onClick}
  >
    {children}
  </button>
)

export default Button
