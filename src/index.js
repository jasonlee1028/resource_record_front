import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import './assets/css/index.css';

import Login from './components/Login/Login';
import Container from './components/Container/Container';
import RootApolloProvider from './graphql/RootApolloProvider';

import { getStore } from './api/util'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <RootApolloProvider>
        <Router>
            <Switch>
                <Route path="/Login" component={Login} />
                <Route
                    path="/"
                    render={() =>
                        getStore("token") ? <Container /> : <Redirect to={"/Login"} />
                    }
                />
            </Switch>
        </Router>
    </RootApolloProvider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
