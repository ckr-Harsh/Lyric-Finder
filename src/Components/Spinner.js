import React from 'react'
import spinner from './triangle.gif'

function Spinner() {
    return (
        <>
            <img src={spinner} alt='loading'
             style={{
                    width:'70px',
                     margin:'40px auto',
                     display:'block',
            }}></img>
        </>
    )
}

export default Spinner
