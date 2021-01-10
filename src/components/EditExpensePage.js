import React from 'react';

const EditExpensePage = (props) => {
    console.log(props);
    return (
        <div>
            This is the page to edit an expense. Id: {props.match.params.id}
        </div>
    )
}

export {EditExpensePage as default}