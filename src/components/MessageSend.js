import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { allMessagesBetweenUsers } from '../actions/socketAction';
import moment from 'moment';

const MessageSend = ({ userId, contactId }) => {
  const dispatch = useDispatch();
  const chats = useSelector((state) => state.getMessages);
  const { messages } = chats;
  const token = localStorage.getItem('token');

  useEffect(() => {
    dispatch(allMessagesBetweenUsers(contactId, token));
  }, [contactId]);

  const formatMessageTime = (timeString) => {
    const time = new Date(timeString);
    console.log(time)
    const options = { hour: '2-digit', minute: '2-digit', hour12: true };
    return time.toLocaleTimeString([], options);
  };
  return (
    <>
      {messages.length ===0 ? (
        <div className='d-flex justify-content-center align-items-center mt-5'>
          <h3 className='fs-5 display-6 align-self-center'>There are no messages yet</h3>
        </div>
      ) : (
        messages.length > 0 &&
        messages.map((mess, index) => (
          <div key={index} className='messageSend owner'>
            <div className='messageContent' style={{ alignItems: mess.senderId === userId ? 'flex-end' : 'flex-start' }}>
              <p className='para text-light fs-6' style={{ backgroundColor: mess.senderId === userId ? '#8da4f1' : '#3333ff' }}>
                {mess.message}
                <span className="message-time">{moment(mess.createdOn).format("HH:mm:ss")}</span>
              </p>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default MessageSend;
