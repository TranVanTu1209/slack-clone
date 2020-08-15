import React from 'react';
import './Message.css';
import moment from 'moment';

const Message = ({ text, timestamp, user, userImage }) => {
  return (
    <div className="message">
      <img src={userImage ? userImage : ""} alt={user} />
      <div className="message__info">
        <h4> {user} <span className="message__timestamp"> {moment(new Date(timestamp?.toDate())).fromNow()}  </span> </h4>
        <p>
          {text}
        </p>
      </div>
    </div>
  )
}

export default Message;
