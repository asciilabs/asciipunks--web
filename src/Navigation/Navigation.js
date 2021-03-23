import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import Button from '@components/Button'
import ConnectButton from './ConnectButton'
import s from './Navigation.module.css'
import addresses from '@shared/addresses'

const baseURI = process.env.ETH_NET == "rinkeby" ? "https://rinkeby.etherscan.io/address/" : "https://etherscan.io/address/"
const etherscanURL = `${baseURI}${addresses.asciiPunks}`;

const Navigation = () => {
  const history = useHistory()

  return (
    <nav className={s.navigation}>
      <div className={s.spacer} />
      <Button className={s.button} onClick={() => history.push('/faq')}>
        FAQ
      </Button>
      <Button className={s.button} onClick={() => history.push('/about')}>
        About
      </Button>
      <Button className={s.button} onClick={() => window.open(etherscanURL, "_blank")}>
        Etherscan
      </Button>
      <ConnectButton />
    </nav>
  )
}

export default Navigation
