import React, { Component } from 'react';
import LoginPanel from './components/LoginPanel';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="login-page">
        {/* 左右布局带背景图的登录表单页 */}
        <LoginPanel />
      </div>
    );
  }
}
