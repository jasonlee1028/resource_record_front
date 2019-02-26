import React, {Component} from 'react';

import ReactEcharts from "echarts-for-react";


var plantCap = [
    {
        name: 'Python',
    },
    {
        name: '爬虫',
    },
    {
        name: '分布式',
    },
    {
        name: '数据库',
    },
    {
        name: 'Go',
    },
    {
        name: '大数据',
    },
    {
        name: 'Scala',
    },
    {
        name: '后端',
    }
];

var datalist = [{
    offset: [56, 48],
    symbolSize: 120,
    opacity: .95,
    fontSize: 40,
    color: '#f467ce'
}, {
    offset: [35, 80],
    symbolSize: 95,
    opacity: .88,
    fontSize: 36,
    color: '#7aabe2'
}, {
    offset: [20, 43],
    symbolSize: 90,
    opacity: .84,
    fontSize: 32,
    color: '#ff7123'
}, {
    offset: [83, 30],
    symbolSize: 120,
    opacity: .8,
    fontSize: 28,
    color: '#ffc400'
}, {
    offset: [36, 20],
    symbolSize: 65,
    opacity: .75,
    fontSize: 24,
    color: '#5e333f'
}, {
    offset: [64, 10],
    symbolSize: 70,
    opacity: .7,
    fontSize: 20,
    color: '#6b3442'
}, {
    offset: [75, 75],
    symbolSize: 60,
    opacity: .68,
    fontSize: 16,
    color: '#8a3647'
}, {
    offset: [88, 62],
    symbolSize: 50,
    opacity: .6,
    fontSize: 12,
    color: '#68333f'
}];

var datas = [];
for (var a = 0; a < plantCap.length; a++) {
    var item = plantCap[a];
    var itemToStyle = datalist[a];
    datas.push({
        name: item.name,
        value: itemToStyle.offset,
        symbolSize: itemToStyle.symbolSize,
        label: {
            normal: {
                textStyle: {
                    fontSize: itemToStyle.fontSize
                }
            }
        },
        itemStyle: {
            normal: {
                color: itemToStyle.color,
                opacity: itemToStyle.opacity
            }
        },
    })
}

const option = {
    backgroundColor: '#f0f2f5',
    title: {
        text: "",
        textStyle: {
            color: '#ff5ef8',
            fontSize: 24
        }
    },
    grid: {
        show: false,
        top: 10,
        bottom: 10
    },
    xAxis: [{
        gridIndex: 0,
        type: 'value',
        show: false,
        min: 0,
        max: 100,
        nameLocation: 'middle',
        nameGap: 5
    }],
    yAxis: [{
        gridIndex: 0,
        min: 0,
        show: false,
        max: 100,
        nameLocation: 'middle',
        nameGap: 30
    }],
    series: [{
        type: 'scatter',
        symbol: 'circle',
        symbolSize: 120,
        label: {
            normal: {
                show: true,
                formatter: '{b}',
                color: '#fff',
                textStyle: {
                    fontSize: '20'
                }
            },
        },
        itemStyle: {
            normal: {
                color: '#00acea'
            }
        },
        data: datas
    }]
};


class About extends Component {
    render() {
        return (
            <div style={{textAlign: "center", padding: 24}}>
                <h2>个人资料记录网站，暂未完成，敬请期待...</h2>
                <ReactEcharts
                    option={option}
                >
                </ReactEcharts>
            </div>
        );
    }
}

export default About;
