import { useContext } from 'react'
import { ContractsContext } from '@contexts/Contracts'

const useContracts = () => {
  return {
    ...useContext(ContractsContext),
  }
}

export default useContracts
