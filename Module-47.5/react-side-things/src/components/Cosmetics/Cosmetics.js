import React, { useEffect, useState } from 'react';
import{ add } from '../../utilities/storage'
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics = () => {
   const [cosmetics, setCosmetics] = useState([])
   useEffect(()=>{
       fetch('./cosmetics.json')
       .then(res => res.json())
       .then(data => setCosmetics(data))
   },[])
    return (
       
        <div>
             <h3>My shop</h3>
             {
                 cosmetics.map(cosmetic => <Cosmetic 
                    key={cosmetic._id} 
                    cosmetic={cosmetic}/>)
             }
        </div>
    );
};

export default Cosmetics;






// const first = 55;
// const second =89;
// const sum = add(first,second);