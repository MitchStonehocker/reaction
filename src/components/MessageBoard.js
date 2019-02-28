// src/components/MessageBoard.js

import React from 'react'
import useAppContext from './hooks'
import CreateReaction from './CreateReaction'
import MessageReactions from './MessageReactions'

export default function MessageBoard () {
  const {
    state: { messages, reactionsMap }
  } = useAppContext()

  return (
    <div>
      {messages.map(message => {
        const { id, text, username, timestamp } = message
        return (
          <div key={id}>
            <p>{text}</p>
            <h5>
              <em>- {username}</em>
            </h5>
            <h6>{new Date(timestamp).toLocaleString()}</h6>
            <CreateReaction messageId={id} />
            <MessageReactions MessageReactions={reactionsMap[id]} />
            <hr />
          </div>
        )
      })}
    </div>
  )
}
