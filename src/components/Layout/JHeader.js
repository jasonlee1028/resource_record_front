import React, {Component} from 'react'
import {Layout} from 'antd';


const {
    Header
} = Layout;

export default class JHeader extends Component {

    render() {
        return (
            <Header style={{background: '#fff', padding: 0}}/>
        );
    }
};

