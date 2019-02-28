// src/App.js

import React, { useReducer, useEffect } from 'react'
import reducer, { initialState } from './state/reducer'
import { newMessage } from './state/actions'

export default function App () {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    setInterval(() => dispatch(newMessage('foo')), 3000)
  }, [])

  console.log('>>>-App-state->', state)
  return (
    <div>
      <h2>Reaction</h2>
    </div>
  )
}
