import React from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import Button from '@components/Button'
import useWeb3 from '@hooks/useWeb3'
import addresses from '@shared/addresses'
import ConnectButton from './ConnectButton'
import s from './Navigation.module.css'

const baseURI =
  process.env.ETH_NET == 'rinkeby'
    ? 'https://rinkeby.etherscan.io/address/'
    : 'https://etherscan.io/address/'
const etherscanURL = `${baseURI}${addresses.asciiPunks}`

const scrollTo = (id) => {
  document
    .getElementById(id)
    .scrollIntoView({ block: 'start', inline: 'nearest', behavior: 'smooth' })
}

const navigateToAbout = (pathname, history) => {
  if (pathname.match(/\/(my)?punks/)) {
    history.push('/')
    return
  }

  scrollTo('about')
}

const navigateToMyPunks = (pathname, history, walletAddress) => {
  if (pathname.match(/\/(my)?punks/)) {
    history.push(`/mypunks/${walletAddress}`)
    return
  }

  scrollTo('mypunks')
}

const Navigation = () => {
  const { walletAddress } = useWeb3()
  const history = useHistory()
  const { pathname } = useLocation()

  return (
    <nav className={s.navigation}>
      <div className={s.spacer} />
      <Button
        className={s.button}
        onClick={() => navigateToAbout(pathname, history)}
      >
        About
      </Button>
      <Button
        className={s.button}
        onClick={() => navigateToMyPunks(pathname, history, walletAddress)}
      >
        My Punks
      </Button>
      <Button
        className={s.button}
        onClick={() => window.open(etherscanURL, '_blank')}
      >
        Etherscan
      </Button>
      <Button
        className={s.button}
        onClick={() =>
          window.open('https://opensea.io/collection/asciipunks-v2', '_blank')
        }
      >
        OpenSea
      </Button>
      <ConnectButton />
    </nav>
  )
}

export default Navigation
