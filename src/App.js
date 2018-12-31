import React, { Component } from 'react';
import logo from '../src/assets/images/logo.svg';
import styles from './assets/css/App.css';

class App extends Component {
    render() {
        return (
            <div className={styles.App}>
                <header className={styles.AppHeader}>
                    <img src={logo} className={styles.AppLogo} alt="logo" />
                    {/*<p>*/}
                        {/*Edit <code>src/App.js</code> and save to reload.*/}
                    {/*</p>*/}
                    {/*<a*/}
                        {/*className="App-link"*/}
                        {/*href="https://reactjs.org"*/}
                        {/*target="_blank"*/}
                        {/*rel="noopener noreferrer"*/}
                    {/*>*/}
                        {/*Learn React*/}
                    {/*</a>*/}
                    <p style={{color: 'blue'}}>Hey, 你是第 888 位访客哟 ...</p>
                </header>
            </div>
        );
    }
}

export default App;
