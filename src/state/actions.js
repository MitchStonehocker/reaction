// src/state/actions.js

import uuid from 'uuid/v4'

import { NEW_MESSAGE } from './types'

export const newMessage = text => ({
  type: NEW_MESSAGE,
  item: { id: uuid(), text, timestamp: Date.now() }
})
