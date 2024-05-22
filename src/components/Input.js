import React, { useEffect } from 'react'
import { useState } from 'react'
import { BsImage, BsPaperclip } from "react-icons/bs"
import { useDispatch, useSelector } from 'react-redux'
import { getOneUser } from '../actions/userAction'
import { getUser } from '../actions/socketAction'
import { getProfile } from '../actions/profileAction'
import { AiOutlineSend } from "react-icons/ai";
import { addSentMessage } from '../actions/socketAction';
import moment from 'moment'


const Input = ({ contactId }) => {
    const { socket } = useSelector((state) => state.socketChat)
    const token = localStorage.getItem('token');
    const dispatch = useDispatch()
    const payload = JSON.parse(atob(token.split('.')[1]));
    const user = useSelector((state) => state.getUser)
    const UserToken = useSelector((state) => state.userreducer)
    const userProfile = useSelector((state) => state.getProfile)
    const { profile } = userProfile
    const { userToken } = UserToken
    const { OneUser } = user
    const [state, setState] = useState({
        message: ""
    })
    useEffect(() => {
        dispatch(getOneUser(contactId, token))
    }, [])

    useEffect(() => {
        dispatch(getUser(token))
    }, [])

    useEffect(() => {
        dispatch(getProfile(token))
    }, [])
   

    function emitMessage() {
        const newMessage = {
            receiverId: contactId,
            senderId: payload.id,
            profilePhoto: "https://library.sportingnews.com/2023-01/cristiano-ronaldo-al-nassr-presentation.jpg",
            sender: {
                firstname: userToken && userToken.firstname,
                lastname: userToken && userToken.lastname
            },
            receiver: {
                contactLastname: OneUser.lastname,
                contactFirstname: OneUser.firstname
            },
            message: state.message
        };
        socket.emit('message', newMessage);
        dispatch(addSentMessage(newMessage));
    }

    const sendMessage = () => {
        if (socket) {
            emitMessage();
            setState({ ...state, message: "" });
        }
    };
    return (
        <div className='input'>
            <input type="text"
                value={state.message}
                onChange={(e) => setState({ ...state, message: e.target.value })}
                placeholder='Type a message....'
            />

            <div className='send'>
                <div className='icon'>
                    < BsImage className='fs-3'/>
                </div>
                <input type="file" style={{ display: "none" }} id="file" />
                <label htmlFor='file'>
                    <div className='icon'>
                        <BsPaperclip className='fs-3' />
                    </div>
                </label>
                <button  type='submit'  onClick={sendMessage}>
                    <AiOutlineSend className='fs-3'/>
                </button>
            </div>
        </div>
    )
}

export default Input



 // function emitMessage() {
    //     socket.emit('message', {
    //         receiverId: contactId,
    //         senderId: payload.id,
    //         profilePhoto: "https://library.sportingnews.com/2023-01/cristiano-ronaldo-al-nassr-presentation.jpg",
    //         sender: {
    //             firstname: userToken && userToken.firstname,
    //             lastname: userToken && userToken.lastname
    //         },

    //         receiver: {
    //             contactLastname: OneUser.lastname,
    //             contactFirstname: OneUser.firstname
    //         },
    //         message: state.message

    //     })
    // }