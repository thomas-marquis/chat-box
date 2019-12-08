import React from 'react';

import MessageInput from '../message-input';
import MessageList from '../message-list';

export default function AppScreen() {
  return (
    <>
      <MessageList />
      <MessageInput />
    </>
  );
}
