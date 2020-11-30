import React from 'react'
import Search from './Search'
import {Route, Switch} from 'react-router-dom'
import Trail from './trail'
import {Link} from 'react-router-dom'
import Lyrics from './Lyrics'




function Head(props) {
   

    return (
        <>
           <h1>LyricFinder</h1>
           <nav>
               <Link to='/'>Top Tracks</Link>
               <Link to='/search'>Search </Link>
           </nav>

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
