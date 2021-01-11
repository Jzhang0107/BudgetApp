import React from 'react';

const PortfolioItem = (props) =>
{
    return(
        <header>
            <h1>Project: {props.match.params.id}</h1>
        </header>
    )
}

export {PortfolioItem as default}