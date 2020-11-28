import React, { useEffect,useState } from 'react'
import Axios from 'axios'
import {Link} from 'react-router-dom'

function Lyrics(props) {
    const [data,setData]=useState([]);
    const [Err, setErr] = useState();
    const [spin ,setSpin]= useState(false);

    useEffect( ()=>{
          //  Fetch();
    },[]);

    let id= props.id;
   // console.log(id);
      
        const apiKey = '0f721c28a837fc8fd3d2d83f073539eb';
                const Fetch = async()=>{
                    await Axios
           .get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${id}&apikey=${apiKey}`)
            .then( res=>{ 
               // console.log(res.data.message.body.lyrics);
                let a = res.data.message.body.lyrics;
                console.log(a);
                setData(...a);
              // data===''?setSpin(true):setSpin(false);
                        
            })
            .catch(err=>{
                console.log(err);
                setErr(`Try again,${err}`);
            });
                }
                
    const Lyrics= ()=>{
    
      //  spin===true?setSpin(false):setSpin(true);
    }            
    return (
        <>
        <Link to='/'>
            <button>
                Back
            </button>
        </Link>
        <h2>Lyrics:</h2>
          <div>
           {
             
            }   
          </div>  
        </>
    )
}

export default Lyrics
