import React from 'react';

const Cosmetic = (props) => {
    console.log(props.cosmetic);
    const {name,age,gender,company,balance} = props.cosmetic;
    return (
        <div>
            <h3>Name : {name}</h3>
            <h4>Age : {age}</h4>
            <h5>Gender : {gender}</h5>
            <h6>Company : {company}</h6>
            <h6>Balance : {balance}</h6>
        </div>
    );
};

export default Cosmetic;