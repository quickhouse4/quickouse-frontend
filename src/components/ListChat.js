import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import Chats from './Chats';
import { useSelector, useDispatch } from 'react-redux';
import { chatMessage } from '../actions/socketAction';

const SidebarChat = ({ setCurrentChat }) => {
    const [filteredChats, setFilteredChats] = useState([]);
    const user = useSelector((state) => state.getAllChats);
    const { chats } = user;
    const dispatch = useDispatch();
    const token = localStorage.getItem('token');
    const payload = JSON.parse(atob(token.split('.')[1]));

    useEffect(() => {
        dispatch(chatMessage(payload.id));
    }, [payload.id, dispatch]);

    const handleSearch = (query) => {
        const filtered = chats.filter((chat) =>
            chat.contactLastname.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredChats(filtered);
    };

    return (
        <div className="sidebar">
            <SearchBar handleSearch={handleSearch} />
            <Chats chats={chats} setCurrentChat={setCurrentChat} filteredChats={filteredChats} />
        </div>
    );
}

export default SidebarChat;
