import styled from 'styled-components';
import { TextField } from '@material-ui/core';

export const InputContainer = styled.form({
  position: 'absolute',
  bottom: 0,
  display: 'flex',
  width: '100%',
  left: 0,
  padding: '0 5px 5px 5px'
});

export const TextInput = styled(TextField)({
  width: '100%'
});
