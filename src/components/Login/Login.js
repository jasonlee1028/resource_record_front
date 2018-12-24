import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <form method='post'>
                <p><span >用户名</span><input/></p>
                <p><span>密码</span><input/></p>
                <p><button>登录</button></p>
            </form>
        );
    }
}

export default Login;
