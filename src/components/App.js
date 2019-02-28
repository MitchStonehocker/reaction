// src/App.js

import React, { useReducer, useEffect } from 'react'
import reducer, { initialState } from '../state/reducer'
import Context from '../Context'
import PubSub from '../pubsub'
import PublishMessage from './PublishMessage'
import MessageBoard from './MessageBoard'

const pubsub = new PubSub()

// // setup and test
// setTimeout(() => {
//   pubsub.publish({ type: 'foo', value: 'bar' })
// }, 1000)

export default function App () {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    pubsub.addListener({
      message: messageObject => {
        const { channel, message } = messageObject

        console.log('>>>-App-addListener-{channel,message}->', {
          channel,
          message
        })

        dispatch(message)
      }
    })
  }, [])

  console.log('>>>-App-state->', state)
  return (
    <Context.Provider value={{ state, dispatch, pubsub }}>
      <h2>Reaction</h2>
      <hr />
      <PublishMessage />
      <hr />
      <MessageBoard />
    </Context.Provider>
  )
}
