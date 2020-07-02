import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { modules } from '../utils';
import './Menu.scss';

class Menu extends Component {
  render() {
    const status = this.props.user;
    return (
      <nav className="menu">
        <ul>
          <li className="nav-item">
            <Link to="/">首页</Link>
          </li>
          {status === undefined
            ? null
            : modules.map(({ name, path }) => (
                <li className="nav-item" key={name}>
                  <Link to={path}>{name}</Link>
                </li>
              ))}
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(Menu);
