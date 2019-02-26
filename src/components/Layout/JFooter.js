import React, {Component} from 'react'
import {Layout} from 'antd';


const {
    Footer,
} = Layout;

export default class JFooter extends Component {

    render() {
        return (
            <Footer style={{textAlign: 'center'}}>
                Jason Web Site ©2019 Created by Lee
            </Footer>
        );
    }
};

