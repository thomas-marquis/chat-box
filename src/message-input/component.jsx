import React, { useState } from 'react';
import { pathOr, compose } from 'ramda';
import { isEmptyString } from 'ramda-adjunct';
import { func, string } from 'prop-types';

import { InputContainer, TextInput } from './styles';

const textInputPlaceholder = () => 'Appuyer sur ENTREE pour envoyer le message';

function useInputCHandlers(sendMessage) {
  const [message, setMessage] = useState('');

  const handleSubmit = event => {
    if (event) event.preventDefault();
    if (isEmptyString(message)) return;
    sendMessage(message);
    setMessage('');
  };

  const handleTextChange = compose(setMessage, pathOr(message, ['target', 'value']));

  return [message, handleTextChange, handleSubmit];
}

export default function MessageInput({ sendMessage }) {
  const [currentMessage, handleTextChange, handleSubmit] = useInputCHandlers(sendMessage);

  return (
    <InputContainer onSubmit={handleSubmit}>
      <TextInput
        label={textInputPlaceholder()}
        onChange={handleTextChange}
        value={currentMessage}
      />
    </InputContainer>
  );
}

MessageInput.propTypes = {
  sendMessage: func
};

MessageInput.defaultProps = {
  sendMessage: Function.prototype
};
