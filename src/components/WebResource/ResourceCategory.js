import React, {Component} from 'react';
import {Card, Spin} from 'antd';
import { withRouter } from "react-router-dom";

import {setStore} from '../../api/util';
import {compose, graphql, withApollo} from 'react-apollo';
import { resourceCategory } from '../../api/graphql/WebResource.graphql';

import python from '../../assets/images/python.jpg';
import front from '../../assets/images/front.jpg';
import distributed from '../../assets/images/distributed.jpg';
import netProtocol from '../../assets/images/netProtocol.jpg';
import database from '../../assets/images/database.jpg';
import machineLearning from '../../assets/images/machineLearning.jpg';
import blog from '../../assets/images/blog.jpg';
import linux from '../../assets/images/linux.jpg';
import java from '../../assets/images/java.jpg';
import spider from '../../assets/images/spider.jpg';
import performance from '../../assets/images/performance.jpg';
import go from '../../assets/images/go.jpg';
import server from '../../assets/images/server.jpg';
import data from '../../assets/images/data.jpg';
import github from '../../assets/images/github.jpg';
import operateSystem from '../../assets/images/operateSystem.jpg';
import offer from '../../assets/images/offer.jpg';


class ResourceCategory extends Component {
    constructor(props) {
        super(props);

        this.state = {
            categoryImage: {
                python: python,
                front: front,
                distributed: distributed,
                net_protocol: netProtocol,
                database: database,
                machine_learning: machineLearning,
                blog: blog,
                linux: linux,
                java: java,
                spider: spider,
                performance: performance,
                go: go,
                server: server,
                data: data,
                github: github,
                operate_system: operateSystem,
                offer: offer,
            }
        }
    }

    handleClickResourceCategory = (categoryId) => {
        this.props.history.push({
            pathname: `/NetResourceItem/${categoryId}`
        });
        setStore('categoryId', categoryId);
    };

    render() {
        if (this.props.data.error) return null;
        if (this.props.data.loading) return <Spin/>;

        let resourceCategoryList = this.props.data.resourceCategory;

        return (
            <div style={{display: 'inline'}}>
                {resourceCategoryList.map((value, key) => {
                    return (
                        <Card
                            id={key}
                            style={{width: 240, margin: 16, float: 'left', textAlign: 'center'}}
                            bodyStyle={{padding: 8}}>
                            <div className="custom-image">
                                <img alt="example" style={{width:200, height: 100}}
                                     src={this.state.categoryImage[value.name]}/>
                            </div>
                            <div className="custom-card">
                                <h3>{value.displayName}</h3>
                                <a onClick={() => this.handleClickResourceCategory(value.id)}>点我呀</a>
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
)(withRouter(ResourceCategory));
