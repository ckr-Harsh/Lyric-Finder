import React,{ useEffect, useState} from 'react'
import Axios from 'axios'
import Display from './Display'
import Spinner from './Spinner';



function Trail() {
   const [t,setTrack] = useState([]);
   const [Err, setError] = useState();
   const [spin ,setSpin]= useState(true);
   
 
    useEffect(() => {
     Top();
    }, [])

    
    const Top = async()=>{
           const result = await Axios
           .get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?
           page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${apiKey}`)
           .then( res=>{  
              // console.log(JSON.parse(res));
               res===''?setSpin(true):setSpin(false)
                let track_list = res.data.message.body.track_list;
              setTrack(track_list);
              console.log(res);
              
                   
           })
           .catch (err=>{
                 setError(`Please Try again,${err}`);
                 console.log(err);
            });
          //  console.log(result);
        }    
      

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
                        )
                    })
                } 
        </div>
        { spin?<Spinner/>:''}
        </>
    )
}

export default Trail
