import React, {Component} from 'react';
import {Card, Spin} from 'antd';
import {Link, withRouter} from "react-router-dom";

import {setStore} from '../../api/util';
import {compose, graphql, withApollo} from 'react-apollo';
import {resourceCategory} from '../../api/graphql/WebResource.graphql';

class ResourceCategory extends Component {
    constructor(props) {
        super(props);
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
                        <Card style={{width: 240, margin: 16, float: 'left'}} bodyStyle={{padding: 0}}>
                            <div className="custom-image">
                                <img alt="example" width="100%"
                                     src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>
                            </div>
                            <div className="custom-card">
                                <h3>{value.displayName}</h3>
                                <span onClick={() => this.handleClickResourceCategory(value.id)}>点我呀</span>
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
