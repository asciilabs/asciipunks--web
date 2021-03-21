import React from 'react'
import { Link } from 'react-router-dom'
import s from './Title.module.css'

const Title = () => <Link to="/" className={s.title}><div>ASCII PUNKS</div></Link>

export default Title
