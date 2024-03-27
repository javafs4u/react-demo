import React from 'react';
import { useEffect, useState } from "react";
import axios from 'axios';

function SocialMediaComponent() {
   const[feature, setFeature] =  useState('');

   const[total, setTotal] = useState(0);


   useEffect(()=>{
        if(feature !=='') {
            axios.get(`https://dummyjson.com/${feature}`)
            .then((response)=>{
                console.log(response);
                setTotal(response.data.total);
            })
            .catch(error=>{
                console.error(error);
            })
        }
        
   },[feature]);


    return(<div>
        <p>{feature}</p>
        { feature!==''?<p>Number of {feature} objects is {total} </p>:<p></p>}
        <button onClick={()=>{setFeature('users')}}>Users</button>
        <button onClick={()=>{setFeature('todos')}}>TODO</button>
    </div>)
}

export default SocialMediaComponent;