import { pathOr } from 'ramda';

const emptyArray = [];

export const selectUserMessage = pathOr(emptyArray, ['entities', 'userInput', 'messages']);
