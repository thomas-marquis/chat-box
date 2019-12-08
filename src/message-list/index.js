import { connect } from 'react-redux';

import MessageList from './component';
import { selectUserMessage } from '../message-input/selectors';

const mapStateToProps = state => ({
  messages: selectUserMessage(state)
});

export default connect(mapStateToProps)(MessageList);
