import React, {Component} from 'react'
import {Layout, Menu, Icon} from 'antd';

import {Link} from "react-router-dom";
import About from "../Common/About";

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
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">
                        <Icon type="home"/>
                        <Link to={"/"} style={{display: "inline"}}>
                            首页
                        </Link>
                    </Menu.Item>

                    <Menu.Item key="2">
                        <Icon type="cloud-o"/>
                        <Link to={"/NetResource"} style={{display: "inline"}}>
                            网络资源
                        </Link>
                    </Menu.Item>

                    <Menu.Item key="3">
                        <Icon type="shop"/>
                        <Link to={"/Original"} style={{display: "inline"}}>
                            个人原创
                        </Link>
                    </Menu.Item>

                    <Menu.Item key="4">
                        <Icon type="bar-chart"/>
                        <Link to={"/ResourceStatistics"} style={{display: "inline"}}>
                            资源统计
                        </Link>
                    </Menu.Item>

                    <Menu.Item key="5">
                        <Icon type="bar-chart"/>
                        <Link to={"/About"} style={{display: "inline"}}>
                            关于本站
                        </Link>
                    </Menu.Item>

                </Menu>
            </Sider>
        );
    }
};

