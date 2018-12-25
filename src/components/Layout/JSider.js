import React, {Component} from 'react'
import {Layout, Menu, Icon} from 'antd';

import {Link} from "react-router-dom";

const {
    Sider,
} = Layout;

export default class JSider extends Component {

    render() {
        return (
            <Sider style={{
                overflow: 'auto', height: '100vh', position: 'fixed', left: 0,
            }}
            >
                <div className="logo"/>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                    <Menu.Item key="1">
                        <Icon type="cloud-o"/>
                        <Link to={"/NetResource"} style={{display: "inline"}}>
                            网络资源
                        </Link>
                    </Menu.Item>

                    <Menu.Item key="2">
                        <Icon type="shop"/>
                        <Link to={"/Original"} style={{display: "inline"}}>
                            个人原创
                        </Link>
                    </Menu.Item>

                    <Menu.Item key="3">
                        <Icon type="bar-chart"/>
                        <Link to={"/ResourceStatistics"} style={{display: "inline"}}>
                            资源统计
                        </Link>
                    </Menu.Item>
                </Menu>
            </Sider>
        );
    }
};

