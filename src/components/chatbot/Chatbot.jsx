import React, { useState } from 'react'
import './Chatbot.css'
import {
  UserMessage,
  AgentMessage,
  LoaderMessage,
  ErrorMessage
} from '../../components/chatbot/components'
import ArrowImg from '../../../assets/images/arrow-icon.png'
const Chatbot = ({ messages = [], loading = false, onSend, error }) => {
  const [inputText, setInputText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputText.trim()) {
      onSend && onSend(inputText)
      setInputText('')
    }
  }

  return (
    <div className='chatbot-container'>
      <div className='chatbot-messages'>
        {messages.map((msg, index) => {
          if (msg.role === 'user')
            return <UserMessage key={index} text={msg.text} />
          if (msg.role === 'agent')
            return <AgentMessage key={index} text={msg.text} />
          return null
        })}
        {loading && <LoaderMessage />}
        {error && <ErrorMessage text={error} />}
      </div>

      {/* <form className="chatbot-input-area" onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form> */}

      <form onSubmit={handleSubmit}>
        <div className="application-chatbot-input-container">
          <input 
            type='text'
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder='Type your message...'
            className='application-chatbot-input'
          />
          <button className='application-chatbot-send-button' type='submit'>
            <img alt='Send' width='30' height='30' src={ArrowImg} />
          </button>
        </div>
      </form>
    </div>
  )
}

export default Chatbot
