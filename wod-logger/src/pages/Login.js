import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loginUser } from '../actions/authActions';

class Login extends Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    componentDidMount = () => {
        if (localStorage.getItem('token')) return this.props.history.push('/')
    };

    handleChanges = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value                
            }
        });
    };

    loginUser = e => {
        e.preventDefault();
        this.props.loginUser(this.state.credentials)

    }

  render() {
    return (
      <div className='loginDiv'>
       <form onSubmit={this.loginUser}>
        <label>Account</label>
        <input
            type='text'
            name='username'
            placeholder='Username'
            value={this.state.credentials.username}
            onChange={this.handleChanges}
         />

         <label for="password">Password</label>
         <input
            type='text'
            name='password'
            placeholder='......'
            value={this.state.credentials.password}
            onChange={this.handleChanges}
          />
          <div className="flex-spacer" />
          {this.props.errors && <p clasName='error'>{this.props.errors}</p> }

          <button type="submit" disabled={ !this.state.credentials.username || !this.state.credentials.password } 
            onClick={this.loginUser}
            >
              {this.props.fetching ? (
                  'Loading...'
              ) : (
                  'Login'
              )}
          </button>
       </form>        
      </div>
    );
  }
}

const mapStateToProps = ({ authReducer }) => ({
   fetching: authReducer.fetching,
   errors: authReducer.errors
});

export default connect(
    mapStateToProps,
    {loginUser}
)(Login)



