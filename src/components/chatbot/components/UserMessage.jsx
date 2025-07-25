import React from 'react'
import '../Chatbot.css'

const UserMessage = ({ text }) => {

  let now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  let minutesString = minutes.toString().padStart(2, '0');

  return (
    <div>
      <div className='application-chatbot-message application-chatbot-message-user'>
        <div className='application-chatbot-avatar'>G</div>
        <div className='application-chatbot-text'>
          <div>
            <p>{text}</p>
          </div>
        </div>
      </div>
      <span className='user-timestamp'>{hours}:{minutesString} {ampm}</span>
    </div>
  )
}

export default UserMessage
