import React, { useContext, useEffect } from 'react'
import {Route,Switch,Link} from 'react-router-dom'
import Lyrics from './Lyrics'
import { Iden } from './Context'
import Button from '@material-ui/core/Button'

function Display(props) {
    const [value,setvalue] = useContext(Iden);

    useEffect(()=>{
        Set();
    },[props.track]);


   const Set = ()=>{
       setvalue(props.t_id);
    }
  
    return (
        <>
                            <div className='track'>
                                <h3 className='song'>{props.track}</h3>
                                <h4 className='info'>Album: {props.album}</h4>
                                <h4 className='info'>Artist: {props.artist}</h4>
                                <Link to='/lyrics'>
                                <Button color="primary" >
                                     Get Lyrics
                                </Button>
                                </Link>
                            </div>
            <Switch>
                <Route path='/lyrics' component={Lyrics}/>
            </Switch>
                   
        </>
    )
}

export default Display
