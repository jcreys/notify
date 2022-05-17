import React from 'react'
import { streamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';

import Navbar from './components/Navbar'
import Routes from './Routes'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
    </div>
  )
}

export default App
