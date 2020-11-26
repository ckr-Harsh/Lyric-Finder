import React,{ useEffect, useState} from 'react'
import Axios from 'axios'
import Display from './Display'
import Spinner from './Spinner';



function Trail() {
   const [t,setTrack] = useState([]);
   const [Err, setError] = useState();
   const [spin ,setSpin]= useState(false);
 
    useEffect(() => {
    // Top();
    }, [])

    const apiKey = '0f721c28a837fc8fd3d2d83f073539eb';
    const Top = async()=>{
           const result = await Axios
           .get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?
           page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${apiKey}`)
           .then( res=>{  
              // console.log(JSON.parse(res));
               res===''?setSpin(true):setSpin(false)
                let track_list = res.data.message.body.track_list;
              setTrack(track_list);
              
                   
           })
           .catch (err=>{
                 setError(`Please Try again,${err}`);
                 console.log(err);
            });
          //  console.log(result);
        }
               
     let  a =   t.map(val=>console.log(val));
      

    return (
        <> 
        <h2>Top 20 Tracks</h2>
        <div className='tracks'>
            <h2>{Err}</h2>
            <ul>
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
            </ul>
            <Spinner style={{
                visibility:spin?'visible':'hidden'
            }} />
            
        </div>
        </>
    )
}

export default Trail
