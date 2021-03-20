import React, { createContext } from 'react'
import useForceUpdate from '@utils/useForceUpdate'

const MetamaskContext = createContext()

const MetamaskProvider = ({ children }) => {
  const { value, forceUpdate } = useForceUpdate()

  return (
    <MetamaskContext.Provider value={{ value, forceUpdate }}>
      {children}
    </MetamaskContext.Provider>
  )
}

export default MetamaskContext

export { MetamaskProvider }
