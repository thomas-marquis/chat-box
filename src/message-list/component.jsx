import React from 'react';
import { arrayOf, shape, string, oneOf } from 'prop-types';

export default function MessageList({ messages }) {
  const renderMessage = ({ user, text }) => {
    if (!user || !text) return null;
    return <li>{`${user}: ${text}`}</li>;
  };

  return messages && <ul>{messages.map(renderMessage)}</ul>;
}

const emptyArray = [];

MessageList.propTypes = {
  messages: arrayOf(
    shape({
      text: string,
      user: oneOf('ME', 'BOT')
    })
  )
};

MessageList.defaultProps = {
  messages: emptyArray
};
