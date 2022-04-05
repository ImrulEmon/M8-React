import React from 'react';
import { addToDb, deleteFromDb } from '../../utilities/fakedb';

const Cosmetic = (props) => {
    // console.log(props.cosmetic);
    const {name,age,gender,company,balance,_id} = props.cosmetic;
    const handlePurchase = id => {
        
        //set to local storage
        console.log(id);
        addToDb(id);
    }

    const handleRemove = id => {
        deleteFromDb(id);
    }

    return (
        <div>
            <p>id : {_id}</p>
            <h3>Name : {name}</h3>
            <h4>Age : {age}</h4>
            <h5>Gender : {gender}</h5>
            <h6>Company : {company}</h6>
            <h6>Balance : {balance}</h6>
            <button onClick={()=>handlePurchase(_id)}>Purches</button>
            <button onClick={()=> handleRemove(_id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;