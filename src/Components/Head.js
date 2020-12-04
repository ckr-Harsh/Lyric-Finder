import React from 'react'
import Search from './Search'
import {Route, Switch} from 'react-router-dom'
import Trail from './trail'
import {NavLink} from 'react-router-dom'
import Lyrics from './Lyrics'
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import * as Mat from '@material-ui/icons'
import './head.css'


function Head() {
    return (
        <>
           <h1>LyricFinder
              <span className='git'> 
                <a  href='https://github.com/ckr-Harsh'>
                <Mat.GitHub className='github'/>
                </a>
              </span>
           </h1>
           <nav>
           <Paper square className='navbar'>
        <Tabs 
          variant="fullWidth"
          indicatorColor="secondary"
          textColor="secondary"
          centered
   
        >
          <NavLink to='/' exact activeClassName='active'>
           <Tab icon={<Mat.List/>} label='Top Tracks'/>
          </NavLink>
          <NavLink to='/search'exact activeClassName='active'>
            <Tab icon={<Mat.Search/>} label='Search'/>
          </NavLink>
           </Tabs>
          </Paper>
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
