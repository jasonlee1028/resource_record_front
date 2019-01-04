import React from 'react';
import {Card, Input, DatePicker, Spin} from 'antd';

import {compose, graphql, withApollo} from 'react-apollo';

import '../../assets/css/ResourceItemCard.css';

import {getStore} from '../../api/util';

import {netResource} from '../../api/graphql/WebResource.graphql';

let paramsSearch = {
    startTime: "",
    endTime: "",
    keyWord: ""
};

class NetResourceItem extends React.Component {
    constructor(props) {
        super(props);
    }

    handleDateChange = (date, dateString) => {
        paramsSearch.startTime = dateString[0];
        paramsSearch.endTime = dateString[1];

        this.props.data.refetch({
            variables: {...paramsSearch}
        })
    };

    render() {
        const Search = Input.Search;

        const {RangePicker} = DatePicker;

        if (this.props.data.error) return null;
        if (this.props.data.loading) return <Spin/>;

        let netResourceList = this.props.data.netResource;

        return (
            <div>
                <div>
                    <span style={{padding: 16}}>起始日期:
                 <RangePicker style={{padding: 8}} onChange={this.handleDateChange}/>
                </span>
                    <span style={{padding: 16}}>资源搜索:
                <Search
                    placeholder="Python"
                    style={{padding: 8, width: 200}}
                    onSearch={value => console.log(value)}
                />
                </span>
                </div>
                <div style={{display: 'inline'}}>
                    {
                        netResourceList.map((value, key) => {
                        return (
                            <Card
                                id={key}
                                title={value.displayName}
                                bordered={true}
                                style={{
                                    width: 240,
                                    height: 160,
                                    margin: 16, float: 'left', textAlign: 'center'}}>
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

export default compose(
    withApollo,
    graphql(netResource, {
        options: props => {
            return {
                variables: Object.assign({},{categoryId:getStore("categoryId")},{...paramsSearch})
            }
        }
    })
)(NetResourceItem);
