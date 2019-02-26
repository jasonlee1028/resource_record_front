import React from 'react';

import OriginalNav from './OriginalNav';


export default class Original extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <div style={{
                padding: 24,
                background: '#fff',
                textAlign: 'center'
            }}>
                <div><OriginalNav></OriginalNav></div>
            </div>

        );
    }
};
