import React from 'react';
import {Layout} from 'antd';

import JHeader from '../Layout/JHeader';
import JSider from '../Layout/JSider';
import JFooter from '../Layout/JFooter';
import Routes from "../../routes/Routes";

const {
    Content,
} = Layout;

export default class Container extends React.Component {

    render() {
        return (
            <Layout>
                <JSider></JSider>
                <Layout style={{marginLeft: 200}}>
                    <JHeader></JHeader>
                    <Content style={{margin: '24px 16px 0', overflow: 'initial'}}>
                        <Routes />
                    </Content>
                    <JFooter></JFooter>
                </Layout>
            </Layout>
        );
    }
};
