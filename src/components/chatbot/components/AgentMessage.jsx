import React from 'react';
import '../Chatbot.css';
import { CamReport } from '../../utils/markdownConverter';

const AgentMessage = ({ text }) => {
  return <div className="chatbot-message agent-message">{CamReport({ camText: text })}</div>;
};

export default AgentMessage;
