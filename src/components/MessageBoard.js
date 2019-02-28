// src/components/MessageBoard.js

import React from 'react'
import useAppContext from './hooks'

export default function MessageBoard () {
  const {
    state: { messages }
  } = useAppContext()

  return (
    <div>
      {messages.map(message => {
        const { id, text, timestamp } = message
        return (
          <div key={id}>
            <p>{text}</p>
            <h6>{new Date(timestamp).toLocaleString()}</h6>

            <hr />
          </div>
        )
      })}
    </div>
  )
}
