import React from 'react';
import '../Chatbot.css';

const ErrorMessage = ({ text }) => {
  return <div className="chatbot-error">{text}</div>;
};

export default ErrorMessage;
