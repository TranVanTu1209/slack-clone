import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import SidebarOption from '../SidebarOption/SidebarOption';
import ChatIcon from '@material-ui/icons/Chat';
import AirplayIcon from '@material-ui/icons/Airplay';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import AddIcon from '@material-ui/icons/Add';
import { db } from '../../firebase/firebase';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../context/StateProvider';

const Sidebar = () => {
  const [{ user }] = useStateValue();
  const [channels, setChannels] = useState([]);
  useEffect(() => {
    // run when the sidebar component loaded
    db.collection('rooms').onSnapshot(snapshot => {
      setChannels(snapshot.docs.map(doc => ({
        id: doc.id,
        name: doc.data().name
      })));
    });
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <div className="sidebar__header-info">
          <h4>
            {user?.displayName}
          </h4>
          <SidebarOption iconClass="green" Icon={FiberManualRecordIcon} title={`#${user?.email.split('@')[0]}`} />
        </div>
        <div className="sidebar__edit">
          <CreateIcon />
        </div>
      </div>
      <div className="sidebar__body">
        <SidebarOption Icon={ChatIcon} title="Threads" />
        <SidebarOption Icon={AirplayIcon} title="Mentions & Reactions" />
        <SidebarOption Icon={TouchAppIcon} title="More Apps" />
        <SidebarOption Icon={FileCopyIcon} title="File Transfer" />
        <SidebarOption Icon={TouchAppIcon} title="Co-operate Intelisense" />
        <SidebarOption Icon={SupervisorAccountIcon} title="People Connection" />
      </div>
      <div className="sidebar__footer">
        <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
        {
          channels?.length > 0 && channels.map(channel =>
            <Link to={`/chat/${channel.id}`} key={channel.id}  >
              <SidebarOption title={channel.name} id={channel.id} />
            </Link>
          )
        }
      </div>
      <SidebarOption Icon={AddIcon} title="Add Channels" addChannelsOption />
    </div>
  )
}

export default Sidebar;
