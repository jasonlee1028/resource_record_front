import React, { Component } from 'react';
import '../../assets/css/Header.css';

class Header extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='header'>
                <span>首页</span>
                <span>资源</span>
                <span>关于</span>
            </div>
        );
    }
}

export default Header;
