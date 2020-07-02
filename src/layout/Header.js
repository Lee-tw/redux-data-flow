import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setStatus } from '../actions/index';
import './Header.scss';

class Header extends Component {
  render() {
    const info = this.props.user;

    return (
      <header className="header">
        {info === undefined || info === {} ? (
          <div className="header-wrapper">
            <a className="sign" onClick={this.props.signIn}>
              Sign in
            </a>
          </div>
        ) : (
          <div className="header-wrapper">
            <img src={info.avatar} alt="头像" />
            <span className="username">{info.name}</span>
            <a className="sign" onClick={this.props.signOut}>
              Sign out
            </a>
          </div>
        )}
      </header>
    );
  }
}

const mapStateToProps = ({ user }) => ({ user });

const mapDispatchToProps = dispatch => ({
  signIn() {
    fetch(`https://my-json-server.typicode.com/kevindongzg/demo/login`, { method: 'GET' })
      .then(res => res.json())
      .then(json => dispatch(setStatus(json)));
  },
  signOut() {
    dispatch(setStatus(undefined));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
