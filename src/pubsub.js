// src/pubsub.js

import PubNub from 'pubnub'
import pubnubConfig from './pubnub.config.json'

const pubnub = new PubNub(pubnubConfig)
export const MESSAGE_CHANNEL = 'MESSAGE_CHANNEL'

pubnub.subscribe({ channels: [MESSAGE_CHANNEL] })

pubnub.addListener({
  message: messageObject => {
    console.log('>>>-pubnub-messageObject->', messageObject)
  }
})

setTimeout(() => {
  pubnub.publish({
    message: 'foo-bar',
    channel: MESSAGE_CHANNEL
  })
}, 1000)
