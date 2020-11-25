import { Visibility } from '@material-ui/icons'
import React from 'react'
import spinner from './triangle.gif'

function Spinner(props) {
    return (
        <>
            <img src={spinner} alt='loading'
             style={{
                    width:'200px',
                     margin:'40px auto',
                     display:'block',
                     Visibility:props.show?'visible':'hidden',
            }}></img>
        </>
    )
}

export default Spinner
