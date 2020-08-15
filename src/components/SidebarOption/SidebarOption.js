import React from 'react';
import './SidebarOption.css';
import { useHistory } from 'react-router-dom';
import { db } from '../../firebase/firebase';

const SidebarOption = ({ title, Icon, iconClass, addChannelsOption, id }) => {
  const history = useHistory();
  const selectChannelHandler = () => {
    if (id)
    {
      history.push(`/chat/${id}`);
    } else
    {
      history.push(title);
    }
  }
  const addChanelHandler = () => {
    const chatName = prompt('Please enter the room name');
    if (chatName)
    {
      db.collection('rooms').add({ name: chatName });
    }
  }
  return (
    <div className="sidebarOption" onClick={addChannelsOption ? addChanelHandler : selectChannelHandler} >
      {
        Icon && <Icon className={iconClass} />
      }
      <span >
        {Icon ? title : `#${title}`}
      </span>
    </div>
  )
}

export default SidebarOption;
