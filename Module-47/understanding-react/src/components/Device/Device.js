import React from 'react';
import Config from '../Config/Config';

const Device = (props) => {
    return (
        <div style={{border:'2px solid green',margin:'5px'}}>
            <h2>My Device : {props.name}</h2>
            <Config price={props.price} steps={props.steps}/>
            <h4>Current steps : {props.steps}</h4>
        </div>
    );
};

export default Device;