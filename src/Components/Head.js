import React ,{createContext, useContext, useState}from 'react'
import Search from './Search'
import * as Mat from '@material-ui/icons'
import {Route, Switch} from 'react-router-dom'
import Trail from './trail'
import {Link} from 'react-router-dom'
import Lyrics from './Lyrics'
import { Rambo } from './Context'


;

function Head(props) {
    const [song,setSong] = useState();

    const Song = (e)=>{
        setSong(e.target.value);
     //   console.log(id);
    }
    const DoSearch=()=>{
        console.log(song);
       // id=song;
      // console.log(id);
    }

    return (
        <>
           <h1>LyricFinder</h1>

            <div className='first'>
                     <h2><Mat.MusicNoteTwoTone/>
                        Enter the Name of the Song
                         <Mat.MusicNoteTwoTone/>
                     </h2>
                 <input 
                    type='text'
                    placeholder='Enter Name of the song'
                    onChange={Song}
                    value={song}
                />
                <Link to='/search'>
                    <button 
                    onClick={DoSearch}
                    > Search</button>
                </Link>
            </div>  

            <div className='router'>
              <Switch>
                    <Route exact path='/'component={Trail}/>
                    <Route exact path='/search' component={Search}/>
                    <Route path='/lyrics' component={Lyrics}/>
              </Switch>
            </div>
         
        </>
    )
}

export default Head
