import React from 'react';
import {Card} from 'antd';

import '../../assets/css/ResourceItemCard.css';

export default class NetResourceItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            resourceList: [
                {
                    id: 1,
                    name: "r1",
                    displayName: "Requests: 让 HTTP 服务人类",
                    url: "http://docs.python-requests.org/zh_CN/latest/index.html"
                },
                {
                    id: 2,
                    name: "r2",
                    displayName: "Python 并行分布式框架 Celery",
                    url: "https://blog.csdn.net/freeking101/article/details/74707619"
                },
                {
                    id: 3,
                    name: "r3",
                    displayName: "Welcome to InfluxDB’s documentation!",
                    url: "https://influxdb-python.readthedocs.io/en/latest/"
                },
            ]
        }
    }

    render() {
        return (
            <div style={{ display: 'flex' }}>
                {this.state.resourceList.map((value, key) => {
                    return (
                        <Card style={{width: 240, margin: 16}} bodyStyle={{padding: 0}}>
                            <div className="custom-image">
                                <img alt="example" width="100%"
                                     src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>
                            </div>
                            <div className="custom-card">
                                <h3>{value.displayName}</h3>
                                <a target="_blank" href={value.url}>点我呀</a>
                            </div>
                        </Card>
                    )
                })}
            </div>
        );
    }
};
