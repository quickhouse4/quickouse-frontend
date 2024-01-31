import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { chatMessage } from '../actions/socketAction'
import { getOneUser } from '../actions/userAction'
import { useHistory } from 'react-router-dom'

const Chats = ({ setCurrentChat }) => {
    const user = useSelector((state) => state.getAllChats)
    const { chats } = user
    const dispatch = useDispatch()
    const token = localStorage.getItem('token');
    const history = useHistory()
    const payload = JSON.parse(atob(token.split('.')[1]));
    useEffect(() => {
        dispatch(chatMessage(payload.id))
    }, [payload.id])
    const handleLoadUserMessages = (id) => {
        setCurrentChat(id)
        dispatch(getOneUser(id, token))
        history.push(`/chat/${id}`)
    }
    
    return (
        <div className='chats'>
            {!chats ?
                <h1> there is no chat start chat </h1> :
                chats && chats.map((user, index) => (
                    <div key={index} className='userChat' onClick={() => handleLoadUserMessages(user.contactId)}>
                        <img className='imgChat' src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' />
                        <div className='userChatInfo'>
                            <div style={{ flexDirection: "row" }}>
                                <span style={{ color: "white", fontSize: "18px", paddingRight: "10px" }}>{user.contactLastname}</span>
                                <span style={{ color: "white", fontSize: "10px", }}>{
                                    new Date(user.lastConversation).toLocaleTimeString([], { timeStyle: 'short' })
                                }</span>
                            </div>
                            {/* <p>{user.message}</p> */}
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default Chats
