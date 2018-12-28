import React from 'react';
import {Card} from 'antd';

import '../../assets/css/ResourceItemCard.css';
import NetResourceFilter from "../Filters/NetResourceFilter";

export default class NetResourceItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            resourceList: [
                {
                    id: 1,
                    name: "r1",
                    displayName: "Requests: 让 HTTP 服务人类",
                    url: "http://docs.python-requests.org/zh_CN/latest/index.html",
                    description: "Python的HTTP请求库"
                },
                {
                    id: 2,
                    name: "r2",
                    displayName: "Python 并行分布式框架 Celery",
                    url: "https://blog.csdn.net/freeking101/article/details/74707619",
                    description: "Python分布式计算框架"
                },
                {
                    id: 3,
                    name: "r3",
                    displayName: "Welcome to InfluxDB’s documentation!",
                    url: "https://influxdb-python.readthedocs.io/en/latest/",
                    description: "Python操作InfluxDB的库"
                },
            ]
        }
    }

    render() {
        return (
            <div>
                <NetResourceFilter></NetResourceFilter>
                <div style={{display: 'flex'}}>
                    {this.state.resourceList.map((value, key) => {
                        return (
                            <Card
                                title={value.displayName}
                                bordered={true}
                                style={{width: 300, margin: 16}}>
                                <p>{value.description}</p>
                                <p><a target="_blank" href={value.url}>点我呀</a></p>
                            </Card>
                        )
                    })}
                </div>
            </div>
        );
    }
};
