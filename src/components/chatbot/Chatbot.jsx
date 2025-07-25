import React, { useState } from 'react';
import './Chatbot.css';
import {
  UserMessage,
  AgentMessage,
  LoaderMessage,
  ErrorMessage,
} from '../../components/chatbot/components';

const Chatbot = ({ messages = [], loading = false, onSend, error }) => {
  const [inputText, setInputText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim()) {
      onSend && onSend(inputText);
      setInputText('');
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-messages">
        {messages.map((msg, index) => {
          if (msg.role === 'user') return <UserMessage key={index} text={msg.text} />;
          if (msg.role === 'agent') return <AgentMessage key={index} text={msg.text} />;
          return null;
        })}
        {loading && <LoaderMessage />}
        {error && <ErrorMessage text={error} />}
      </div>

      <form className="chatbot-input-area" onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chatbot;
