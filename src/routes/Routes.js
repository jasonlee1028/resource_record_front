import React from 'react';
import {Route} from 'react-router-dom';

import Home from '../components/Common/Home';

import NetResource from '../components/WebResource/NetResource';
import Original from '../components/WebResource/Original';
import ResourceStatistics from '../components/WebResource/ResourceStatistics';

const routes = () => (
    <div style={{height: "100%"}}>
        <Route path="/" exact component={Home}/>
        <Route path="/NetResource" component={NetResource}/>
        <Route path="/Original" component={Original}/>
        <Route path="/ResourceStatistics" component={ResourceStatistics}/>
    </div>
);

export default routes;
