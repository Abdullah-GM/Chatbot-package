import React, { useState } from 'react';
import Chatbot from '../../src';

const App = () => {
  const [messages, setMessages] = useState([
    { role: 'user', text: 'Hi!' },
    { role: 'agent', text: 'Hello, how can I help?' },
  ]);
  const [loading, setLoading] = useState(false);

  const handleSend = (text) => {
    setMessages((prev) => [...prev, { role: 'user', text }]);
    setLoading(true);
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: 'agent', text: 'Got it!' }]);
      setLoading(false);
    }, 4000);
  };

  return (
    <div style={{ padding: 20, height: '500px' }}>
      <Chatbot messages={messages} loading={loading} onSend={handleSend} />
    </div>
  );
};

export default App;

 