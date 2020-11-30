import React, { useContext } from 'react'
import {Route,Switch,Link} from 'react-router-dom'
import Lyrics from './Lyrics'
import { Iden } from './try'

function Display(props) {
    const [value,setvalue] = useContext(Iden);

 const Set = ()=>{
    setvalue(props.t_id);
 }
    return (
        <>
        <div className='cards'>
          
                            <div className='card'>
                                <h2>{props.track}</h2>
                                <h3>{props.album}</h3>
                                <h3>{props.artist}</h3>
                                <Link to='/lyrics'>
                                     <button
                                     onClick={Set}
                                     >Get Lyrics</button>
                                </Link>
                            </div>
            <Switch>
                <Route path='/lyrics' component={Lyrics}/>
            </Switch>
                   
                  
        { /*   <Spinner style={{
                visibility:props.spinTop?'visible':'hidden'
            }} />
        */}   
        </div>
       
        </>
    )
}

export default Display
