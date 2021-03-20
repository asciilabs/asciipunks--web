import React, { useEffect, useState, useContext, createContext } from 'react'
import formatURI from '@utils/formatURI'

const contractAddress = '0xd4e4078ca3495de5b1d4db434bebc5a986197782'

const ContractContext = createContext()

const ContractRegisterer = ({ web3 }) => {
  const { contract, setContract } = useContext(ContractContext)
  useEffect(() => {
    setContract(
      new web3.eth.Contract(
        [
          {
            type: 'function',
            name: 'tokenURI',
            inputs: [{ name: '_tokenId', type: 'uint256' }],
            outputs: [{ name: 'autoglyph', type: 'string' }],
          },
        ],
        contractAddress
      )
    )
  }, [])

  return null
}

const ContractProvider = ({ children }) => {
  const [contract, setContract] = useState()

  return (
    <ContractContext.Provider value={{ contract, setContract }}>
      {children}
    </ContractContext.Provider>
  )
}

export default ContractRegisterer

export { ContractContext, ContractProvider }
