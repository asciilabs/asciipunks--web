import React from 'react'
import cn from 'classnames'
import s from './Button.module.css'

const Button = ({ children, className, size = 'small', onClick, disabled = false }) => (
  <button
    className={cn(className, s.button, {
      [s.large]: size == 'large',
      [s.small]: size == 'small',
    })}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
)

export default Button
