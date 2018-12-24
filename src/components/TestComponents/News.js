import React, { Component } from 'react';
import suzy from '../../assets/images/suzy.jpg'

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: "News",
            list: [
                '11111',
                '22222',
                '33333',
            ],
            list2: [
                <h1>H1</h1>,
                <h2>H2</h2>,
                <h3>H3</h3>,
            ]
        }
    }

    render() {
        let listResult = this.state.list.map((value, key)=>{
            return <li key={key}>{value}</li>
        })
        return (
            <div className='news'>
                {this.state.msg}
                <img src={suzy} />
                {/*<img src={require("../assets/images/suzy.jpg")} />*/}
                {/*<img src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />*/}

                {this.state.list2}
                { listResult }
            </div>
        );
    }
}

export default News;
