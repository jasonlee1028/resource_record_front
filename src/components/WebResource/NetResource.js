import React from 'react';
import { Button } from 'antd';

import ResourceCategory from './ResourceCategory';

export default class NetResource extends React.Component {

    handleButtonClick = (event) => {
        this.props.history.push({
            pathname: `/CreateNewResource`
        });
    };

    render() {
        return (
            <div>
                <Button type="primary" onClick={this.handleButtonClick}>新增资源</Button>
                <ResourceCategory></ResourceCategory>
            </div>
        );
    }
};

