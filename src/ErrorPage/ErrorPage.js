import React from 'react'
import Card from '@components/Card'
import Fire from './Fire'
import s from './ErrorPage.module.css'

const ErrorPage = () => (
  <div className={s.container}>
    <Card className={s.card}>
      <div className={s.messageTitle}>Uh oh!</div>
      <div className={s.messageBody}>
        Looks like you've lost your way! The page you are trying to access no
        longer exists
      </div>
    </Card>
    <Fire />
  </div>
)

export default ErrorPage
