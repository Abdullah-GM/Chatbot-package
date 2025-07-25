import React, { useState, useRef, useEffect } from 'react'
import './Chatbot.css'
import {
  UserMessage,
  AgentMessage,
  LoaderMessage,
  ErrorMessage,
} from '../../components/chatbot/components';
const ArrowImg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOdSURBVHgBzZlLTBNRFIb/ezuA4qtsdKdV0Z1SN4YNWHwkWDXCFmLi0rABdjQRGANEVworE1ck6FqMCtUQGBMXLKtsfBAEV7KbKiCvzvXc24eCQ+mUW+BL2tt2zqR/zzl35pxThjzZX9sVEowFOdgFehsEF34I+NVBBpsJTAvBpgVzPsCBNRdtt5AHzIuxP2T6ndKiZsFES0ZM7l81TU/WirNybzFqTud8Vi5GStg+o1MItEALrD9Xob7NDA6Ge5qdYj5IHgtBH0Ef89WVnArFl7+OxbIZZhV48Fr3IwGY9HIP9EMpwur2lF/0L02OvtnIyDXEMqSJvcZzOhrCNkAiYnxhtca2THv9Me52glNqjG2XOAlFKagc4sJ/IU6FtQ7bDUPALdxrBB4I99ym5QF2CoZKEhknkeN/P0rhrzUDCV40Rg4PYGexfQurx9P5mMnBBDc6d4E4id/ZK7UkUR5Mes/4hl0EebFMelF5MOm93cVqqU/dtVIhZiFo4tC+EjTdPI+jRw5hKzCwZrXKqoRxNgZNRBqqEGmsxvfZOMKRAbXmi3BEDScfhqCRV+NfEJ9fUh4cun9rS55MlnPgFdDIxNQswm0DWkRyKlCo3tR/adEmkrMKTteZAAqAHpHCb3itjJvqzuN65emc7eNzi2pnS3GPW2/gWttTeIAEeiTSUK2+MB+qzhyDVwzZ4Hjx4p2HL3H2xOFczdF4pQJHDydD+2zkIzxiU4iZLWOd6xmvxz+rRy5EGqsy4mROtj15Cy/IzpB2MmIoAFKcTAdg7YbxAjVpM1wI8Q6a0SFOIriIcSaEVg82Xj6rRZyCGn6uOn65UTSzZXE0lZDa1GWGwtxH1YOWkkvu1BkqECamfuQvTsJgyUWVW0ZxohcaeT8xszVxhJw8yFUJtAdNW0D0YdfA+tNjkUxPQl40C5GLnqHcS3tPkmk7Fz9Zi0XlF5cYQy12EuG0LkQ7rfTbNX3xCvWjxadqymjDVGIHkJt1Ltqxpi93nc0cuNq9raOPlJDYz6G759Z/7jqb8ZWs1rMC3QLdoFuaJYdHbseyDjD3h7t6091VoVBhHW7fcDCadT5Iw8VoyclLM/Q7gvRTPI58N8V2BCLzw+1mNqNNJ6zLk6Ox0vLqFwKsDNRlQQPSa8bvRP2vkQ5rM1tvQ3Q5ImE+k1L3Qh7NlroZGAuJXrdBJXQI/BfZ8Cd7atm2ikCq+UqngS0LYcEQk+WcrJjy/RviDzwWkJrmgUarAAAAAElFTkSuQmCC';
const Chatbot = ({ messages = [], loading = false, onSend, error, errorText = null }) => {
  const [inputText, setInputText] = useState('');
  const bottomRef = useRef(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, loading]);

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
          if (msg.sender === 'user')
            return <UserMessage key={index} text={msg.text} />
          if (msg.sender !== 'user')
            return <AgentMessage key={index} text={msg.text} />
          return null
        })}
        {loading && <LoaderMessage />}
        {error && <ErrorMessage errorText={errorText}/>}
      </div>


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
      <div ref={bottomRef} />
    </div>
  )
}

export default Chatbot
