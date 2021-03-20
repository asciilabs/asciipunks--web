import { useState } from 'react'

const useForceUpdate = () => {
  const [arbitraryValue, setArbitraryValue] = useState(0)

  return {
    forceUpdate: () => {
      setArbitraryValue((x) => x + 1)
    },
    value: arbitraryValue,
  }
}

export default useForceUpdate
