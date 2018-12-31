import React from 'react';
import ReactEcharts from 'echarts-for-react';

export default class ResourceStatistic extends React.Component {
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
            data: [
                "Python资源",
                "前端资源",
                "分布式资源",
                "网络协议",
                "数据库相关",
                "机器学习",
                "博客网站",
                "Linux系统",
                "Java编程",
                "爬虫相关",
                "性能优化",
                "Go编程",
                "服务器",
                "数据分析",
                "GitHub",
                "操作系统",
                "面试",
            ]
        },
        yAxis: {},
        series: [{
            name: '资源个数',
            type: 'bar',
            data: [
                5, 20, 36, 10, 10, 20, 18, 20,
                10, 18, 28, 36, 16, 24, 19, 20,
                28
            ]
        }]
    };

    render() {

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

