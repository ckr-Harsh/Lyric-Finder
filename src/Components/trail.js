import React,{ useEffect, useState} from 'react'
import Axios from 'axios'
import Display from './Display'
import Spinner from './Spinner';



function Trail() {
   const [track,setTrack] = useState([]);
   const [Err, setError] = useState();
   const [show,setShow]=useState(false);
    useEffect(() => {
     Top();
    }, [])

    const apiKey = '0f721c28a837fc8fd3d2d83f073539eb';
    const Top = async()=>{
           const result = await Axios
           .get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?
           page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${apiKey}`)
           .catch (err=>{
             if(err){
                 setError(`Please Try again \t,${err}`);
             }else{
                 let track_list = result.data.message.body.track_list;
          
                let a = track_list.map(val=>
                      [{album:val.track.album_name,
                        track:val.track.track_name,
                        artist:val.track.artist_name,
                        track_id:val.track.commontrack_id,
                    }]);
                setTrack(a);
                }
                 console.log(track);
            });
                 track===''?setShow(true):setShow(false);
    
                }
                
    return (
        <> 
        <h2>Top 20 Tracks</h2>
        <div className='tracks'>
            <h2>{Err}</h2>
            <ul>


        {
            track.map((val,index)=>{
             return( 
                 <Display
                    display={show}
                    key={index}
                    track={val.track}
                    album={val.album}
                    artist={val.artist}
                    id={val.track_id}
                 />
             );
            })
        }
         </ul>
        </div>
        </>
    )
}

export default Trail
