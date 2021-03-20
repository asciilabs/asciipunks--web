import { useContext } from 'react'
import MetamaskContext from '@components/MetamaskContext'

const useMetamask = () => {
  const { forceUpdate } = useContext(MetamaskContext)

  return async () => {
    await window.ethereum.request({ method: 'eth_requestAccounts' })
    forceUpdate()
  }
}

export default useMetamask
