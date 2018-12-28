import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
} from 'react-router-dom';

import './assets/css/index.css';

import Container from './components/Container/Container';
import RootApolloProvider from './graphql/RootApolloProvider';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <RootApolloProvider>
        <Router>
            <Switch>
                <Container/>
            </Switch>
        </Router>
    </RootApolloProvider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
