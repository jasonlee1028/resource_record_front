import React, {Component} from 'react'
import {Layout, Carousel} from 'antd';

const {
    Header
} = Layout;

export default class JHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slogan: ["梦", "想", "开", "始", "的", "地", "方"]
        }
    }

    render() {
        return (
            <Header style={
                {
                    background: '#fff',
                    padding: 16,
                    textAlign: 'center',
                }}>
                <Carousel autoplay>
                    {this.state.slogan.map((value, key) => {
                        return <div><h2>{value}</h2></div>
                    })}
                </Carousel>
            </Header>
        );
    }
};

