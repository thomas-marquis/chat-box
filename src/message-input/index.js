import { connect } from 'react-redux';

import MessageInput from './component';
import { sendMessage } from './actions';

export const mapDispatchToProps = {
  sendMessage
};

export default connect(null, mapDispatchToProps)(MessageInput);
