import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

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
        <p><a href='/'>Go home - server side routing</a></p>
        <Link to='/'>Go Home - client-side routing</Link>
    </div>
)

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to='/' activeClassName='is-active' exact={true}>Homepage</NavLink>
        <br />
        <NavLink to='/create' activeClassName='is-active'>Add Expense</NavLink>
        <br />
        <NavLink to='/editExpense' activeClassName='is-active'>Edit Expense</NavLink>
        <br />
        <NavLink to='/help' activeClassName='is-active'>Help</NavLink>
        <br />
        <br />
    </header>
)

const routes = (
    <BrowserRouter>
        <div>
        <Header />
        <Switch>
            <Route path="/" component={dashBoard} exact={true}/>
            <Route path="/create" component={addExpensePage} />
            <Route path="/editExpense" component={editExpensePage} />
            <Route path="/help" component={helpPage} />
            <Route component={notFoundPage} />
        </Switch>
        </div>
    </BrowserRouter>
)

export {routes as default}