// src/components/MessageReactions.js

import React from 'react'

export default function MessageReactions ({ MessageReactions }) {
  if (!MessageReactions) return null

  return MessageReactions.map((reaction, index) => {
    const { id, emoji, username } = reaction

    return (
      <span key={id}>
        <em>{username}: </em>
        {emoji}
        {index !== MessageReactions.length - 1 ? ', ' : null}
      </span>
    )
  })
}
