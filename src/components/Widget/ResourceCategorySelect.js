import React from 'react';
import {Select} from 'antd';

const Option = Select.Option;


export default class ResourceCategorySelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            resourceCategoryList: [
                {
                    id: "ct0",
                    name: "all",
                    displayName: "全部资源"
                },
                {
                    id: "ct1",
                    name: "python",
                    displayName: "Python资源"
                },
                {
                    id: "ct2",
                    name: "front",
                    displayName: "前端资源"
                },
                {
                    id: "ct3",
                    name: "distributed",
                    displayName: "分布式资源"
                },
            ]
        }
    }

    handleChange = (value) => {
        console.log(value)
    };

    render() {
        return (
            <Select defaultValue={this.state.resourceCategoryList[0].displayName} style={{padding: 8, width: 120}} onChange={this.handleChange}>
                {this.state.resourceCategoryList.map((value, key) => {
                    return <Option value={value.name}>{value.displayName}</Option>
                })}
            </Select>
        );
    }
};
