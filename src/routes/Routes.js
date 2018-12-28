import React from 'react';
import {Route} from 'react-router-dom';

import Home from '../components/Common/Home';
import About from '../components/Common/About';

import NetResource from '../components/WebResource/NetResource';
import Original from '../components/WebResource/Original';
import ResourceStatistics from '../components/WebResource/ResourceStatistics';
import NetResourceItem from '../components/WebResource/NetResourceItem';

const routes = () => (
    <div style={{height: "100%"}}>
        <Route path="/" exact component={Home}/>
        <Route path="/NetResource" component={NetResource}/>
        <Route path="/Original" component={Original}/>
        <Route path="/ResourceStatistics" component={ResourceStatistics}/>
        <Route path="/NetResourceItem/:id" component={NetResourceItem}/>
        <Route path="/About" component={About}/>
    </div>
);

export default routes;
