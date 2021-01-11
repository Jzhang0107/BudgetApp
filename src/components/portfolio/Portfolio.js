import React from 'react';
import { NavLink } from 'react-router-dom';

const Portfolio = () =>
(
    <header>
        <h1>My Work</h1>
        <p>These are my projects</p>
        <NavLink to='/portfolio/1' activeClassName='is-active'>Item 1</NavLink>
        <NavLink to='/portfolio/2' activeClassName='is-active'>Item 2</NavLink>
    </header>
)

export {Portfolio as default}