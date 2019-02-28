// src/pubsub.js

import PubNub from 'pubnub'
import pubnubConfig from './pubnub.config.json'

export const MESSAGE_CHANNEL = 'MESSAGE_CHANNEL'

export default function PubSub () {
  const pubnub = new PubNub(pubnubConfig)

  pubnub.subscribe({ channels: [MESSAGE_CHANNEL] })

  this.addListener = ListenerConfig => {
    pubnub.addListener(ListenerConfig)
  }

  this.publish = message => {
    console.log('>>>-PubSub-this.publish-message->', message)
    pubnub.publish({
      message,
      channel: MESSAGE_CHANNEL
    })
  }
}

// // setup and test
// pubnub.addListener({
//   message: messageObject => {
//     console.log('>>>-pubnub-messageObject->', messageObject)
//   }
// })

// setTimeout(() => {
//   pubnub.publish({
//     message: 'foo-bar',
//     channel: MESSAGE_CHANNEL
//   })
// }, 1000)
