// src/components/hooks.js

import { useContext } from 'react'
import Context from '../Context'

const useAppContext = () => {
  return useContext(Context)
}

export default useAppContext
