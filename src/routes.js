import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Form from './pages/form';
import DocsList from './pages/docsList';
import Document from './pages/document';

const Routes = () => {
    return(
        <Router>
            <Switch>
                <Route exact path='/'>
                    <Form />
                </Route>
                <Route exact path='/documents'>
                    <DocsList />
                </Route>
                <Route exact path='/documents/:document_id'>
                    <Document />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes;