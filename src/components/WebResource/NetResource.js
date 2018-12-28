import React from 'react';

import ResourceCategory from './ResourceCategory';

export default class NetResource extends React.Component {

    render() {
        return (
            <div>
                <div style={
                    {
                        padding: 24,
                        background: '#fff',
                        textAlign: 'left'
                    }}>
                    <ResourceCategory></ResourceCategory>
                </div>
            </div>
        );
    }
};

