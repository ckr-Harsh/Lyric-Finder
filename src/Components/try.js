import createSpacing from '@material-ui/core/styles/createSpacing'
import React, { createContext, useState } from 'react'


export const Iden = createContext();
function Try(props) {
    const [value,setvalue] = useState();
    return (
        <>
            <Iden.Provider value={[value,setvalue]}>
                {props.children}
            </Iden.Provider>
        </>
    )
}

export default Try
