import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Form from './pages/form';

const Routes = () => {
    return(
        <Router>
            <Switch>
                <Route path='/'>
                    <Form />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes;