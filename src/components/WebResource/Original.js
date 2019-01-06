import React from 'react';
import {Timeline, Icon, Spin} from 'antd';
import {Link} from "react-router-dom";

import {compose, graphql, withApollo} from 'react-apollo';
import OriginalNav from './OriginalNav';
import {originalResourceList} from "../../api/graphql/WebResource.graphql";

import { getStore, setStore } from '../../api/util';


class Original extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClickArticleTitle = (e) => {
        setStore('originalResourceId', e.target.id);
    };

    render() {
        if (this.props.data.error) return null;
        if (this.props.data.loading) return <Spin/>;

        let originalResourceList = this.props.data.originalResourceList;
        return (

            <div style={{
                padding: 24,
                background: '#fff',
                textAlign: 'center'
            }}>
                <div><OriginalNav></OriginalNav></div>
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
                                    <Timeline.Item id={key}>
                                        <Link
                                            id={value.id}
                                            to={"/OriginalArticle"}
                                              onClick={this.handleClickArticleTitle}>
                                            [{value.createTime}]{value.title}
                                        </Link>
                                    </Timeline.Item>
                                )
                            })
                        }
                    </Timeline>
                </div>
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
)(Original);
