import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Form from './pages/form';
import DocsList from './pages/docsList';

const Routes = () => {
    return(
        <Router>
            <Switch>
                <Route exact path='/create'>
                    <Form />
                </Route>
                <Route exact path='/documents'>
                    <DocsList />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes;