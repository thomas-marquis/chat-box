import { SEND_MESSAGE } from './actions';

const buildMessageObject = (message, user) => ({
  user,
  text: message
});

export const sendMessageReducer = (state, { message }) => ({
  ...state,
  messages: [...state.messages, buildMessageObject(message, 'ME')]
});

const defaultState = {
  messages: []
};

export default function messageInputReducers(state = defaultState, { type, payload }) {
  switch (type) {
    case SEND_MESSAGE:
      return sendMessageReducer(state, payload);
    default:
      return state;
  }
}
