import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';

class App extends React.Component {
    render() {
        return (
            <>
                <h1>App</h1>
                <Switch>
                    <Route exact path='/' component={ LandingPage } />
                </Switch>
            </>
        );
    }
}

export default App;