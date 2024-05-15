import {
    SET_UP_SOCKET,
    ALL_MESSAGES_REQUEST,
    ALL_MESSAGES_SUCCESS,
    ALL_MESSAGES_FAIL,
    ALL_CHATS_REQUEST,
    ALL_CHATS_SUCCESS,
    ALL_CHATS_FAIL,
    USER_REQUEST,
    USER_SUCCESS,
    USER_FAIL,
    ADD_SENT_MESSAGE
} from "./types"
import { io } from "socket.io-client";
import axios from "axios";

export const setUpSocket = () => async (dispatch, getState) => {
    const token = localStorage.getItem('token');

    const { socketChat } = getState();
    const { socket } = socketChat;

    if (token && !socket) {
        const newSocket = io('ws://localhost:5000', {
            query: {
                token
            }
        });

        newSocket.on('connection', () => {
            console.log('connected');
        });

        newSocket.on('leave', () => {
            console.log('disconnected');
        });

        dispatch({
            type: SET_UP_SOCKET,
            payload: newSocket
        });

    }
};

export const chatMessage = (id) => async (dispatch) => {
    try {
        dispatch({
            type: ALL_CHATS_REQUEST
        })
        const response = await axios.get(`http://localhost:5000/api/getuserchat/${id}`)
        dispatch({
            type: ALL_CHATS_SUCCESS,
            payload: response.data.data
        })
    } catch (error) {
        dispatch({
            type: ALL_CHATS_FAIL,
            payload: error
        })
    }
}

export const allMessagesBetweenUsers = (contactId, token) => async (dispatch) => {

    try {
        dispatch({
            type: ALL_MESSAGES_REQUEST
        })
        const response = await axios.get(`http://localhost:5000/api/chats/${contactId}`, {
            headers: {
                token: token
            }
        })
        dispatch({
            type: ALL_MESSAGES_SUCCESS,
            payload: response.data.data
        })
    } catch (error) {
        dispatch({
            type: ALL_MESSAGES_FAIL,
            payload: error
        })
    }
}

export const getUser = (token) => async (dispatch) =>{
    try {
      dispatch({
        type:USER_REQUEST
      })
      const response = await axios.get(`http://localhost:5000/api/user`,{
        headers:{
          token
        }
      })
      dispatch({
        type:USER_SUCCESS,
        payload: response.data.data
      })
    } catch (error) {
      dispatch({
        type:USER_FAIL,
        payload: error
      })
    }
  }


export const addSentMessage = (message) => ({
    type: ADD_SENT_MESSAGE,
    payload: message,
  });
  

