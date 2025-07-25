import React from 'react';
import '../Chatbot.css';

const UserMessage = ({ text }) => {
  return <div className="chatbot-message user-message">{text}</div>;
};

export default UserMessage;
