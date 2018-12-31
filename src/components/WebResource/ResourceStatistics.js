import React from 'react';

import ResourceStatistic from '../Chart/ResourceStatistic';

export default class NetResource extends React.Component {

    render() {
        return (
            <div style={{padding: 24, background: '#fff', textAlign: 'center'}}>
                <ResourceStatistic></ResourceStatistic>
            </div>
        );
    }
};

