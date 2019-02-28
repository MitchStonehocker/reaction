// src/components/PublishMessage.js

import React, { useState } from 'react'
import { newMessage } from '../state/actions'

export default function PublishMessage (props) {
  const { dispatch } = props
  const [text, setText] = useState('')

  const updateText = event => {
    setText(event.target.value)
  }

  const publishMessage = event => {
    dispatch(newMessage(text))
    setText('')
  }

  const handleKeyPress = event => {
    if (event.key === 'Enter') publishMessage()
  }

  return (
    <div>
      <h3>Got something to say?</h3>
      <input
        value={text}
        onChange={updateText}
        onKeyPress={handleKeyPress}
      />{' '}
      <button onClick={publishMessage}>Publish it!</button>
    </div>
  )
}
