import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { chatMessage } from '../actions/socketAction'
import { getOneUser } from '../actions/userAction'
import { useHistory } from 'react-router-dom'
import { capitalizeFirstLetter } from '../utils/Capitalize'

const Chats = ({ setCurrentChat ,chats }) => {

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

    const formatMessageTime = (timeString) => {
        const time = new Date(timeString);
        const options = { hour: '2-digit', minute: '2-digit', hour12: true };
        return time.toLocaleTimeString([], options);
    };

    return (
        <div className='chats'>
            {!chats ?
                <h1> there is no chat start chat </h1> :
                chats.length > 0 && chats.map((user, index) => (
                    <div key={index} className='userChat' onClick={() => handleLoadUserMessages(user.contactId)}>
                        <div className='avatar'>
                            <p className='text-light avatar-text' >{user && user.contactLastname.charAt(0).toUpperCase()}</p>
                        </div>
                        <div className='userChatInfo'>
                            <div style={{ flexDirection: "row" }}>
                                <span style={{ color: "white", fontSize: "18px", paddingRight: "10px" }}>{capitalizeFirstLetter(user.contactLastname)}</span>
                                <span style={{ color: "white", fontSize: "10px", }}>{
                                    formatMessageTime(user.lastConversation)
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
