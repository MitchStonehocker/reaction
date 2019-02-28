// src/components/SetUsername.js

import React from 'react'
import useAppContext from './hooks'
import { setUsername } from '../state/actions'

export default function SetUsername () {
  //   console.log('>>>-SetUsername-useAppContext->', useAppContext)
  //   console.log('>>>-SetUsername-setUsername->', setUsername)
  const {
    state: { username },
    dispatch
  } = useAppContext()

  console.log('>>>-SetUsername-state:username->', username)

  const updateUsername = event => {
    dispatch(setUsername(event.target.value))
  }

  return (
    <div>
      <h3>Username</h3>
      <input onChange={updateUsername} value={username} />
    </div>
  )
}
