import { connect } from 'react-redux';
import { login, signup, logout } from '../../actions/session_actions';

import SessionForm from './session_form';

const mapStateToProps = (state) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.errors.session
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname.slice(1);

  if (formType === 'login') {
    return {
      login: user => dispatch(login(user)),
      formType
    };
  }
  else {
    return {
      signup: user => dispatch(signup(user)),
      formType
    };
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
