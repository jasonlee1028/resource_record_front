import React, {Component} from 'react'
import {Layout, Menu, Icon} from 'antd';

const {
    Header, Content, Footer, Sider,
} = Layout;

export default class Home extends React.Component {

    render() {
        return (
            <Layout>
                <Sider style={{
                    overflow: 'auto', height: '100vh', position: 'fixed', left: 0,
                }}
                >
                    <div className="logo"/>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                        <Menu.Item key="1">
                            <Icon type="cloud-o"/>
                            <span className="nav-text">网络资源</span>
                        </Menu.Item>

                        <Menu.Item key="2">
                            <Icon type="shop"/>
                            <span className="nav-text">个人原创</span>
                        </Menu.Item>

                        <Menu.Item key="3">
                            <Icon type="bar-chart"/>
                            <span className="nav-text">资源统计</span>
                        </Menu.Item>


                    </Menu>
                </Sider>
                <Layout style={{marginLeft: 200}}>
                    <Header style={{background: '#fff', padding: 0}}/>
                    <Content style={{margin: '24px 16px 0', overflow: 'initial'}}>
                        <div style={{padding: 24, background: '#fff', textAlign: 'center'}}>
                            梦想开始的地方...
                        </div>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>
                        Jason Web ©2018 Created by Lee
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}

