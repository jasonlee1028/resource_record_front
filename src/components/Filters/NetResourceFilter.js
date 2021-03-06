import React, {Component} from 'react'
import {Layout} from 'antd';

import SelectDate from '../Widget/SelectDate';
import SearchInput from '../Widget/SearchInput';

const {
    Header
} = Layout;

export default class NetResourceFilter extends Component {

    render() {
        return (
            <Header style={{background: '#fff', padding: 0}}>
                <span style={{padding: 16}}
                >起始日期:<SelectDate></SelectDate></span>
                <span style={{padding: 16}}
                >资源搜索:<SearchInput></SearchInput></span>
            </Header>
        );
    }
};

