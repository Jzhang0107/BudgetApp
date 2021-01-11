// React imports
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

// Component imports
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/portfolio/Header';
import Home from '../components/portfolio/Home';
import Portfolio from '../components/portfolio/Portfolio';
import PortfolioItem from '../components/portfolio/PortfolioItems';
import Contact from '../components/portfolio/Contact';

const PortfolioRouter = () => (
    <BrowserRouter>
        <div>
        <Header />
        <Switch>
            <Route path='/' component={Home} exact={true}/>
            <Route path='/portfolio/' component={Portfolio} exact={true} />
            <Route path='/portfolio/:id' component={PortfolioItem} exact={true}/>
            <Route path='/contact' component={Contact} />
            <Route component={NotFoundPage} />
        </Switch>
        </div>
    </BrowserRouter>
)

export {PortfolioRouter as default}