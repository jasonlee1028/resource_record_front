import React, {Component} from 'react';

import ReactEcharts from "echarts-for-react";


var plantCap = [
    {
        name: '温柔',
    },
    {
        name: '可爱',
    },
    {
        name: '活泼',
    },
    {
        name: '乐于助人',
    },
    {
        name: '聪明',
    },
    {
        name: '高智商',
    },
    {
        name: '赌神',
    },
    {
        name: '前端大神',
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
        text: "这就是我的王老师...",
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
                <h2>感谢王老师的指导，没有王老师的指导就没有今天...</h2>
                <h3>多年以后，每当有人问起，哟，你这网站做的这么好，都是跟谁学的呀...</h3>
                <h3>然后，我总是会双眼饱含泪光，仰望星空，骄傲地回答道，是王老师...</h3>
                <h3>此情此景，我相信那人一定会问，你的王老师是谁呀...</h3>
                <h3>于是，我缓缓地拿起手中的旺仔牛奶，深情的喝了一口，回答道，请往下看：</h3>

                <ReactEcharts
                    option={option}
                >
                </ReactEcharts>
            </div>
        );
    }
}

export default About;
