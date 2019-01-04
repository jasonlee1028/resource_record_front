import React from 'react';
import ReactEcharts from 'echarts-for-react';

import {resourceStatistic} from '../../api/graphql/WebResource.graphql';
import {compose, graphql, withApollo} from "react-apollo";
import {Spin} from "antd";

class ResourceStatistic extends React.Component {
    constructor(props) {
        super(props);
    };

    formatOption =  {
        title: {
            text: "资源统计"
        },
        tooltip: {},
        legend: {
            data:['资源个数']
        },
        xAxis: {
            data: []
        },
        yAxis: {},
        series: [{
            name: '资源个数',
            type: 'bar',
            data: []
        }]
    };

    render() {

        if (this.props.data.error) return null;
        if (this.props.data.loading) return <Spin/>;

        let xAxisData = [];
        let seriesData = [];
        let resourceStatistic = this.props.data.resourceStatistic;
        resourceStatistic.map((value, key) => {
            xAxisData.push(value.resourceCategoryName);
            seriesData.push(value.resourceCount);
        });

        this.formatOption.xAxis.data = xAxisData;
        this.formatOption.series[0].data = seriesData;

        return (
            <ReactEcharts
                option={this.formatOption}
                style={{ width: "100%", height: "300px" }}
                theme="my_theme"
                notMerge={true}
                showLoading={this.props.loading}
            />
        );
    }
};


export default compose(
    withApollo,
    graphql(resourceStatistic),
)(ResourceStatistic);

