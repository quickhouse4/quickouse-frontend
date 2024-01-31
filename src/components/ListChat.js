import React from 'react';
import SearchBar from './SearchBar';
import Chats from './Chats';

const SidebarChat = ({setCurrentChat}) => {
    return (
        <div className="sidebar">
            <SearchBar />
            <Chats setCurrentChat={setCurrentChat} />
        </div>
    );
}

export default SidebarChat;
