import React, { useEffect,useState ,useContext} from 'react'
import Axios from 'axios'
import {Link} from 'react-router-dom'
import Spinner from './Spinner'
import { Iden } from './Context'
import IconButton from '@material-ui/core/IconButton';
import * as Mat from '@material-ui/icons'



function Lyrics() {
    const [data,setData]=useState([]);
    const [Err, setErr] = useState();
    const [value,setvalue]= useContext(Iden);
    const [Spin ,setSpin]= useState(true);

    useEffect( ()=>{
           Fetch();
    },[]);
    
    let id= value;
      
        const apiKey = '0f721c28a837fc8fd3d2d83f073539eb';
                const Fetch = async()=>{
                    await Axios
           .get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${id}&apikey=${apiKey}`)
            .then( res=>{ 
               // console.log(res.data.message.body.lyrics);
                let result = [res.data.message.body.lyrics];
                console.log(result);
                setData(result);
               data===''?setSpin(true):setSpin(false);
                        
            })
            .catch(err=>{
                console.log(err);
                setErr(`Try again,${err}`);
            });
                }
                
           
    return (
        <>
        <Link to='/'>
        <IconButton aria-label="delete"  color="secondary">
        <Mat.ArrowBack />
      </IconButton>
        </Link>
        <h2>{Err}</h2>
          <div >
           {
             data.map(val=>{
               return(
                 <div className='lyrics'>
                    <h2 className='song'>Lyrics:</h2>
                    <p className='info'>{val.lyrics_body}</p>
                    <h4 className='song'>Copyright:</h4>
                    <p className='info'>{val.lyrics_copyright}</p>
                 </div>
               )
             })
            }   
          </div> 
          { Spin?<Spinner/>:''} 
        </>
    )
}

export default Lyrics
