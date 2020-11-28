import React, { createContext, useState } from 'react'


export const Rambo=createContext();
function Context(props) {
    let id='';
    return (
        <>
          <Rambo.Provider value={id}>
            {props.children}    
          </Rambo.Provider>  
        </>
    )
}

export default Context
