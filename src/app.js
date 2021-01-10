import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const dashBoard = () => (
    <div>
        This is the dashboard.
    </div>
)

const addExpensePage = () => (
    <div>
        This is the page to add an expense.
    </div>
)

const editExpensePage = () => (
    <div>
        This page is to edit the expenses.
    </div>
)

const helpPage = () => (
    <div>
        This is the help page.
    </div>
)

const notFoundPage = () => (
    <div>
        404 Error!
    </div>
)


const routes = (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={dashBoard} exact={true}/>
            <Route path="/create" component={addExpensePage} />
            <Route path="/editExpense" component={editExpensePage} />
            <Route path="/help" component={helpPage} />
            <Route component={notFoundPage} />
        </Switch>
    </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('app'));