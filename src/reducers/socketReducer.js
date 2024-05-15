import { io } from "socket.io-client";
import {
  SET_UP_SOCKET,
  ALL_CHATS_REQUEST,
  ALL_CHATS_SUCCESS,
  ALL_CHATS_FAIL,
  ALL_MESSAGES_REQUEST,
  ALL_MESSAGES_SUCCESS,
  ALL_MESSAGES_FAIL,
  USER_REQUEST,
  USER_SUCCESS,
  USER_FAIL,
  ADD_SENT_MESSAGE
} from "../actions/types"

const initial = {
  socket: io('ws://localhost:5000'),
  userchats: []
}

export const socketReducer = (state = initial, { type, payload }) => {
  switch (type.action) {
    case SET_UP_SOCKET:
      return {
        ...state,
        socket: payload
      };
    default:
      return state
  }
}

export const sentMessageReducer = (state = {}, action) =>{
    switch(action.type){
      case ADD_SENT_MESSAGE:
        return {
          Response: action.payload
        };
      default:
          return state;
    }
}


export const getMessagesReducer = (state = { messages: [] }, action) => {
  switch (action.type) {
    case ALL_MESSAGES_REQUEST:
      return { messageLoading: true, messages: [] }
    case ALL_MESSAGES_SUCCESS:
      return { messageLoading: false, messages: action.payload };
    case ALL_MESSAGES_FAIL:
      return { messageLoading: false, messages: action.payload }
    default:
      return state;
  }
}

export const getAllChatReducers = (state = { chats: [] }, action) => {
  switch (action.type) {
    case ALL_CHATS_REQUEST:
      return { chatLoading: true, chats: [] }
    case ALL_CHATS_SUCCESS:
      return { chatLoading: false, chats: action.payload };
    case ALL_CHATS_FAIL:
      return { chatLoading: false, chats: action.payload }
    default:
      return state;
  }
}

export const userReducer = (state = { userToken: [] }, action) => {
  switch (action.type) {
    case USER_REQUEST:
      return { userLoading: true, userToken: [] }
    case USER_SUCCESS:
      return { userLoading: false, userToken: action.payload };
    case USER_FAIL:
      return { userLoading: false, userToken: action.payload }
    default:
      return state;
  }
}
