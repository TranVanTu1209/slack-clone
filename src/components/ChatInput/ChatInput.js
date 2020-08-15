import React from 'react';
import { Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import './ChatInput.css';
import { useState } from 'react';
import { db } from '../../firebase/firebase';
import { useStateValue } from '../../context/StateProvider';
import firebase from 'firebase';

const ChatInput = ({ roomDetails, channelId }) => {
  const [{ user }] = useStateValue();
  const [message, setMessage] = useState('');
  console.log(user);
  const sendMessage = (e) => {
    e.preventDefault();
    if (channelId && message.length > 0)
    {
      db.collection('rooms').doc(channelId).collection('messages').add({
        text: message,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: user.displayName,
        userImage: user.photoURL
      });
    }
    setMessage('');
  }
  return (
    <div className="chatInput">
      <form onSubmit={sendMessage}>
        <input type="text" placeholder={`Message to #${roomDetails?.name}`}
          value={message} onChange={e => setMessage(e.target.value)} />
        <Button type="submit" variant="contained" color="secondary" >
          <SendIcon />
        </Button>
      </form>
    </div>
  )
}

export default ChatInput;
