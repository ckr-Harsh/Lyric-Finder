import React, { useState } from 'react'
import Axios from 'axios'

function Display(props) {
    const [data,setData]=useState([]);
    const [Err, setErr] = useState();
    const [spin ,setSpin]= useState(false);

    //let id= props.t_id;
      let id = 15953433;
        const apiKey = '0f721c28a837fc8fd3d2d83f073539eb';
                const Fetch = async()=>{
                    await Axios
           .get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${id}&apikey=${apiKey}`)
            .then( res=>{ 
                console.log(res.data.message.body.lyrics);
                setData(res.data.message.body.lyrics);
              // data===''?setSpin(true):setSpin(false);
                        
            })
            .catch(err=>{
                console.log(err);
                setErr(`Try again,${err}`);
            });
                }

          const Show= ()=>{
              return(
                  <> 
                  <h2>Lyrics:</h2>
                  <h3>{data.lyrics_body}</h3>
                  <h3>{data.lyrics_copyright}</h3>
                  </>
              )
          }      

    
    const Lyrics= ()=>{
     //   Fetch();
        spin===true?setSpin(false):setSpin(true);
    }            

    return (
        <>
        <li>
            <div className='track' >
                     <h2>{props.track}</h2>
                     <h3>Album:{props.album}</h3>
                     <h3>Artist:{props.artist}</h3>
                     <button onClick={Lyrics} >Get Lyrics</button>
                 </div>
                <Show/>
        </li>
        </>
    )
}

export default Display
