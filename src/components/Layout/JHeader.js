import React, {Component} from 'react'
import {Layout} from 'antd';

import '../../assets/css/Header.css';

const {
    Header
} = Layout;

export default class JHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slogan: "Stay hungry, Stay foolish!"
        }
    }

    render() {
        return (
            <Header style={
                {
                    background: '#fff',
                    padding: 4,
                    textAlign: 'center',
                }}>
                <span className="slogan">{this.state.slogan}</span>
            </Header>
        );
    }
};

