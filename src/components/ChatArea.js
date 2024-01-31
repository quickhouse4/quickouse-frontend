import React, { useEffect, useState } from 'react';
import Messages from '../screen/message';
import Input from './Input';
import { BsThreeDots } from 'react-icons/bs';
import {RiVideoAddFill} from "react-icons/ri"

const ChatArea = ({OneUser, userid}) => {
// console.log("OneUser",OneUser, "userid",userid)
  return (
    <div className='chat'>
      <div className='chatInfo'>
        <span>{OneUser && OneUser.lastname }</span>
        <div className='chatIcons'>
            <RiVideoAddFill style={{ fontSize: "1.4rem", cursor:"pointer"}}/>
              <BsThreeDots style={{ fontSize: "1.4rem", cursor:"pointer"}}/>
        </div>
      </div>
      <Messages contactId = {userid} />
      <Input contactId = {userid}/>
    </div>
  );
}

export default ChatArea;
