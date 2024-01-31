import React, { useState } from 'react'
import MessageSend from '../components/MessageSend'
import { useEffect } from 'react'
import { setUpSocket } from '../actions/socketAction'
import { useDispatch, useSelector } from 'react-redux'

const Messages = ({ contactId }) => {
  const dispatch = useDispatch()
  const token = localStorage.getItem('token');
  const { socket } = useSelector((state) => state.socketChat)
  const payload = JSON.parse(atob(token.split('.')[1]));
  const [userId, setUserId] = useState("");
  
  useEffect(() => {
    dispatch(setUpSocket());
    if (socket) {
      socket.emit("joined", { contactId });
    }
    return () => {
      if (socket) {
        socket.emit("leave", {
          contactId,
        });
      }
    };
  }, [socket]);

  useEffect(() => {
    if (payload) {
      setUserId(payload.id);
    }
  }, [])
  
  return (
    <div className='messages'>
      <MessageSend userId={userId} contactId={contactId} socket={socket} />
    </div>
  )
}

export default Messages