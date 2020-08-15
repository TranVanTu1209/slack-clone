import React, { useState, useEffect } from 'react';
import './Chat.css';
import { useParams } from 'react-router-dom';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import { db } from '../../firebase/firebase';
import Message from '../Message/Message';
import ChatInput from '../ChatInput/ChatInput';

const Chat = () => {

  const [roomMessages, setRoomMessages] = useState([]);
  const [roomDetails, setRoomDetails] = useState(null);
  const { chatId } = useParams();

  useEffect(() => {
    if (chatId)
    {
      db.collection('rooms').doc(chatId)
        .onSnapshot(snapshot => {
          setRoomDetails(snapshot.data());
        });
      db.collection('rooms').doc(chatId).collection('messages').orderBy('timestamp', 'desc')
        .onSnapshot(snapshot => {
          setRoomMessages(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })));
        })
    }
  }, [chatId]);
  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__header-left">
          <h4 className="chat__channel-name">
            <strong> #{roomDetails?.name} </strong>
            <StarBorderIcon />
          </h4>
        </div>
        <div className="chat__header-right">
          <p>
            <ClearAllIcon /> Details
          </p>
        </div>
      </div>
      <div className="chat__body">
        {
          roomMessages?.map(msg => {
            const { user, userImage, text, timestamp } = msg.data;
            return <Message key={msg.id} user={user} text={text} timestamp={timestamp} userImage={userImage} />
          })
        }
      </div>
      <ChatInput roomDetails={roomDetails} channelId={chatId} />
    </div>
  )
}

export default Chat;
