import React from 'react';
import {DatePicker} from 'antd';

const {MonthPicker, RangePicker} = DatePicker;

export default class SelectDate extends React.Component {
    onChange(date, dateString) {
        console.log(date, dateString);
    }

    render() {
        return (
            <RangePicker style={{padding: 8}} onChange={this.onChange}/>
        );
    }
};
