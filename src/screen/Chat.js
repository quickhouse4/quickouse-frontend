import React, { useState } from 'react'
import Header from '../components/Header'
import SidebarChat from '../components/ListChat';
import ChatArea from '../components/ChatArea';
import "./chat.css";
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOneUser } from '../actions/userAction';
import { useEffect } from 'react';

const Chat = () => {
    const [label, setLabel] = useState()
    const { userid } = useParams();
    const [currentChat, setCurrentChat] = useState(userid);
    const dispatch = useDispatch()
    const token = localStorage.getItem("token")
    const user = useSelector((state) => state.getUser)
    const { OneUser } = user

    useEffect(() => {
        // console.log(currentChat)
        dispatch(getOneUser(currentChat, token))
    }, [currentChat])

    return (
        <>
            <Header setLabel={setLabel} userid={currentChat}/>
            <div className='home'>
                <div className="container-chat chat-scroll">
                    <SidebarChat setCurrentChat={setCurrentChat} />
                    <ChatArea OneUser={OneUser} userid={currentChat} />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Chat