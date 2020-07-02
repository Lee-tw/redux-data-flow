import React, { Component } from 'react';
import { connect } from 'react-redux';

class Profile extends Component {
  render() {
    const info = this.props.user;

    return (
      <div className="main-view profile">
        <h2>个人信息</h2>
        <ul>
          <li>用户名：{info.name}</li>
          <li>用户id：{info.id}</li>
          <li>用户头像：</li>
          <img src={info.avatar} alt="头像" />
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps)(Profile);
