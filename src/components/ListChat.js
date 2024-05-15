import React ,{useState} from 'react';
import SearchBar from './SearchBar';
import Chats from './Chats';
import { useSelector } from 'react-redux';

const SidebarChat = ({setCurrentChat}) => {
    const [filteredChats, setFilteredChats] = useState([]);
    const user = useSelector((state) => state.getAllChats)
    const { chats } = user

    const handleSearch = (query) => {
        const filtered = chats.filter((chat) =>
          chat.contactLastname.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredChats(filtered);
      };
    return (
        <div className="sidebar">
            <SearchBar handleSearch={handleSearch}/>
            <Chats chats={filteredChats} setCurrentChat={setCurrentChat} />
            {/* <Chats setCurrentChat={setCurrentChat} /> */}
        </div>
    );
}

export default SidebarChat;
