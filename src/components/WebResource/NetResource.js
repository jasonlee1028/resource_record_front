import React from 'react';

import NetResourceFilter from '../Filters/NetResourceFilter';
import NetResourceItem from './NetResourceItem';

export default class NetResource extends React.Component {

    render() {
        return (
            <div>
                <NetResourceFilter></NetResourceFilter>
                <div style={
                    {
                        padding: 24,
                        background: '#fff',
                        textAlign: 'left'
                    }}>
                    <NetResourceItem></NetResourceItem>
                </div>
            </div>
        );
    }
};

