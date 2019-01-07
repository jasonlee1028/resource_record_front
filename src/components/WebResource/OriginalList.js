import React from 'react';

import {compose, graphql, withApollo} from 'react-apollo';
import {withRouter} from "react-router-dom";
import {Timeline, Spin} from "antd";

import {originalResourceList} from "../../api/graphql/WebResource.graphql";
import {getStore, setStore} from "../../api/util";


class OriginalList extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClickArticleTitle = (originalResourceId) => {

        this.props.history.push({
            pathname: `/OriginalArticle/${originalResourceId}`
        });
        setStore('originalResourceId', originalResourceId);
    };

    render() {
        if (this.props.data.error) return null;
        if (this.props.data.loading) return <Spin/>;

        let originalResourceList = this.props.data.originalResourceList;

        return (
            <div style={{margin: 24}}>
                <Timeline mode="alternate">
                    {/*<Timeline.Item*/}
                    {/*dot={<Icon type="clock-circle-o"*/}
                    {/*style={{fontSize: '16px'}}/>}>*/}
                    {/*<Link to={"/OriginalArticle"} >*/}
                    {/*[2019-01-05]使用 GitHub 和 Python 实现持续部署*/}
                    {/*</Link>*/}
                    {/*</Timeline.Item>*/}
                    {
                        originalResourceList.map((value, key) => {
                            return (
                                <Timeline.Item
                                    id={key}
                                >
                                    <a onClick={() => this.handleClickArticleTitle(value.id)}>
                                        [{value.createTime}]{value.title}
                                    </a>
                                </Timeline.Item>
                            )
                        })
                    }
                </Timeline>
            </div>
        );
    }
};

export default compose(
    withApollo,
    graphql(originalResourceList, {
        options: {
            variables: {
                originalCategoryId: getStore('originalCategoryId')
            }
        }
    }),
)(withRouter(OriginalList));
