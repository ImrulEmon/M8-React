import React from 'react';

const Config = (props) => {
    return (
        <div style={{border:'2px solid black',margin:'5px'}}>
            <ul>
                <li>{props.price}</li>
                <li>{props.steps}</li>
            </ul>
        </div>
    );
};

export default Config;