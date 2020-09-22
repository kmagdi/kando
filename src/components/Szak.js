import React from 'react';
import CollectDataSpec from "./CollectDataSpec"


export const Szak=({match})=>{
    //console.log("match.params="+match.params)
    return(
        <React.Fragment>
            <CollectDataSpec id={match.params.id}/>
        </React.Fragment>
       )  
}