// React imports
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

// Component imports
import DashBoard from '../components/DashBoard';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const AppRouter = () => (
    <BrowserRouter>
        <div>
        <Header />
        <Switch>
            <Route path="/" component={DashBoard} exact={true}/>
            <Route path="/create" component={AddExpensePage} />
            <Route path="/editExpense" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
            <Route component={NotFoundPage} />
        </Switch>
        </div>
    </BrowserRouter>
)

export {AppRouter as default}