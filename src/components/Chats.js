import React from 'react';
import { useDispatch } from 'react-redux';
import { getOneUser } from '../actions/userAction';
import { useHistory } from 'react-router-dom';
import { capitalizeFirstLetter } from '../utils/Capitalize';
import moment from 'moment';

const Chats = ({ setCurrentChat, chats, filteredChats }) => {
    const dispatch = useDispatch();
    const token = localStorage.getItem('token');
    const history = useHistory();

    const handleLoadUserMessages = (id) => {
        setCurrentChat(id);
        dispatch(getOneUser(id, token));
        history.push(`/chat/${id}`);
    };


    const chatList = filteredChats.length > 0 ? filteredChats : chats;

    return (
        <div className='chats'>
            {chatList.length === 0 ? (
                <div className='d-flex justify-content-center mt-5'>
                    <h4 className='fs-5 align-self-center'>There are no chats</h4>
                </div>
            ) : (
                chatList.map((user, index) => (
                    <div key={index} className='userChat' onClick={() => handleLoadUserMessages(user.contactId)}>
                        <div className='avatar'>
                            <p className='text-light avatar-text'>
                                {user.contactLastname.charAt(0).toUpperCase()}
                            </p>
                        </div>
                        <div className='userChatInfo'>
                            <div style={{ flexDirection: "row" }}>
                                <span style={{ color: "white", fontSize: "18px", paddingRight: "10px" }}>
                                    {capitalizeFirstLetter(user.contactLastname)}
                                </span>
                                <span style={{ color: "white", fontSize: "10px" }}>
                                    {moment(user.lastConversation).format("HH:mm:ss")}
                                </span>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default Chats;
