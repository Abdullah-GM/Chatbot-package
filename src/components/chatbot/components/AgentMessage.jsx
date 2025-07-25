import React from 'react';
import '../Chatbot.css';

const AgentMessage = ({ text }) => {
  return <div className="chatbot-message agent-message">{text}</div>;
};

export default AgentMessage;
