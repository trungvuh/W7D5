import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (event) => {
      this.setState({ [type]: event.target.value });
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = this.state;
    this.props.processForm(user);
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup">Sign Up</Link>;
    }
    else {
      return <Link to="/login">Log In</Link>;
    }
  }

  renderErrors() {
    return (
      <ul>
        {
          this.props.errors.map((error, index) => (
            <li key={`error-${index}`}>{error}</li>))
        }
      </ul>
    );
  }

  render () {
    return (
      <div className="session-form">
        <form onSubmit={this.handleSubmit}>
          Please {this.props.formType} or {this.navLink()}
          {this.renderErrors()}
          <div>
            <label>Username:
              <input
                type="text"
                value={this.state.username}
                onChange={this.handleInput('username')} />
            </label>
            <br/>

            <label>Password:
              <input
                type="password"
                value={this.state.password}
                onChange={this.handleInput('password')} />
            </label>
            <br/>

            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}



export default withRouter(SessionForm);
