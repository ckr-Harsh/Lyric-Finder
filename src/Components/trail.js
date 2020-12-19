import React,{ useContext, useState} from 'react'
import Display from './Display'
import Spinner from './Spinner';
import { Track } from './Context';



function Trail() {
   const [Err, setError] = useState();
   const [t,setTrack] = useContext(Track);
   

    return (
        <> 
        <div className='header'>
            <h2>Top 20 Tracks</h2>
        </div>
        <h2>{Err}</h2>
        <div className='tracks'>
           {
                t.map((val,index)=>{
                    return(
                        <Display
                        artist={val.track.artist_name}
                        track={val.track.track_name}
                        key={index}
                        album={val.track.album_name}
                        t_id={val.track.track_id}
                        />
                    );
                })   
           }
                
        </div>
        { t===''?<Spinner/>:''}
        </>
    )
}

export default Trail
