import React, { useEffect, useState, useContext, createContext } from 'react'
import formatURI from '@utils/formatURI'

const autoglyphsContractAddress = '0xd4e4078ca3495de5b1d4db434bebc5a986197782'

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
        autoglyphsContractAddress
      )
    )
  }, [])

  useEffect(async () => {
    if (!contract) return

    const a1 = formatURI(await contract.methods.tokenURI(1).call())
    // console.log(a1)
  })
  return null
}

export default ContractRegisterer

export { ContractContext }
