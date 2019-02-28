// src/components/MessageBoard.js

import React from 'react'

export default function MessageBoard ({ messages }) {
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
