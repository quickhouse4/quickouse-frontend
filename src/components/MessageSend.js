import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { allMessagesBetweenUsers } from '../actions/socketAction';

const MessageSend = ({ userId, contactId }) => {
  const dispatch = useDispatch()
  const chats = useSelector((state) => state.getMessages)
  const { messages } = chats
  const token = localStorage.getItem('token');
  const payload = JSON.parse(atob(token.split('.')[1]));

  useEffect(() => {
    dispatch(allMessagesBetweenUsers(contactId, token));
  }, [contactId]);

  return (
    <>
      {!messages ?
        <h1>there is not yet message</h1> :
        messages && messages.map((mess, index) => (
          <div key={index} className='messageSend owner'>
            <div className='messageContent' style={{ alignItems: mess.senderId === userId ? 'flex-end' : "flex-start" }}>
              <img className='imgInfo' src="https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=" />
              <p className='para text-light fs-6' style={{ backgroundColor: mess.senderId === userId ? "#8da4f1" : "#3333ff" }}>{mess.message}</p>
            </div>
          </div>
        ))}
    </>
  )
}

export default MessageSend
