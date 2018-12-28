import React, {Component} from 'react';
import {Card} from 'antd';
import {Link} from "react-router-dom";

import {compose, graphql, withApollo} from 'react-apollo';
import {resourceCategory} from '../../api/graphql/WebResource.graphql';

class ResourceCategory extends Component {
    constructor(props) {
        super(props);

        this.state = {
            resourceCategoryList: [
                {
                    id: 0,
                    name: "r0",
                    displayName: "全部",
                    url: "/NetResourceItem"
                },
                {
                    id: 1,
                    name: "r1",
                    displayName: "Python资源",
                    url: "/NetResourceItem"
                },
                {
                    id: 2,
                    name: "r2",
                    displayName: "前端资源",
                    url: "/NetResourceItem"
                },
                {
                    id: 3,
                    name: "r3",
                    displayName: "分布式资源",
                    url: "/NetResourceItem"
                },
            ]
        }
    }

    componentWillMount() {
        console.log('====')
    }

    render() {
        console.log(this.props.data);
        return (
            <div style={{display: 'flex'}}>
                {this.state.resourceCategoryList.map((value, key) => {
                    return (
                        <Card style={{width: 240, margin: 16}} bodyStyle={{padding: 0}}>
                            <div className="custom-image">
                                <img alt="example" width="100%"
                                     src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>
                            </div>
                            <div className="custom-card">
                                <h3>{value.displayName}</h3>
                                <Link to={value.url}>点我呀</Link>
                            </div>
                        </Card>
                    )
                })}
            </div>
        );
    }
};

export default compose(
    withApollo,
    graphql(resourceCategory, {
        options: props => {
            return {};
        }
    })
)(ResourceCategory);
