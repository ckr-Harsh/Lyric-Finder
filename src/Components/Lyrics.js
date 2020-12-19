import React, { useEffect,useState } from 'react'
import Axios from 'axios'
import {Link} from 'react-router-dom'
import Spinner from './Spinner'
import Button from '@material-ui/core/Button';
import * as Mat from '@material-ui/icons'
import useLocalStorage from './Lstorage'



function Lyrics(props) {
    const [data,setData]=useLocalStorage('data',{});
    const [Err, setErr] = useState();

    useEffect( ()=>{
           Fetch();
    },[]);
    
      let apiKey= '0f721c28a837fc8fd3d2d83f073539eb';
        
                const Fetch = async()=>{
                    await Axios
           .get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${props.match.params.id}&apikey=${apiKey}`)
            .then( res=>{ 
                let result = res.data.message.body.lyrics;
                setData(result);
                        
            })
            .catch(err=>{
                setErr(`Try again,${err}`);
            });
                }
         
const Show = ()=>{ 
   if(
       data===undefined ||
       Object.keys(data).length ===0
   ){
       return(
           <Spinner/>
       );
   }else{
         return( 
             <>
         <Link to='/'>
        <Button  startIcon={<Mat.ArrowBackOutlined/>} 
                color="secondary"
                size='small'
                variant='outlined' >
           Go Back
      </Button>
        </Link>
        <h2>{Err}</h2>
                        <div className='lyrics'>
                            <h2 className='song'>Lyrics:</h2>
                            <p className='info'>{data.lyrics_body}</p>
                            <h2 className='song'>Copyright:</h2>
                            <p className='info'>{data.lyrics_copyright}</p>
                            </div>
        </>
         );

   }
    
}
return(
    <>
    <Show/>
    </>
)
}
export default Lyrics;
