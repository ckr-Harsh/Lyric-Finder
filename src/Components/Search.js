import React, {useState} from 'react'
import Axios from 'axios'
import Display from './Display';
import * as Mat from '@material-ui/icons'
import Spinner from './Spinner'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import useLocalStorage from './Lstorage'


function Search() {
    const [res,setRes] = useLocalStorage('res',[]);
    const [Err,setError] = useState();
    const [song,setSong] = useState();
    const [spin, setSpin] = useState(false);

    const Song = (e)=>{
        setSong(e.target.value);
    }
    const DoSearch=()=>{
        setSong('');
        Search();
        setSpin(true);
    }
   
    const Search =  async()=>{
        let apiKey= '0f721c28a837fc8fd3d2d83f073539eb';
        await Axios
        .get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?
        q_track=${song}&page=1&page_size=5&s_track_rating=desc&apikey=${apiKey}`)
        .then(res=>{
            setRes(res.data.message.body.track_list);
           
        })
        .catch(err=>{
            console.log(err);
            setError(`Try Again,${err}`);
        });
       console.log(song);
        res===''?setSpin(true):setSpin(false);
        }
        console.log(spin);
        //console.log(props.song);
    return (
        <>
        <div className='header'>

        <h2>
            <Mat.MusicNoteTwoTone/>
                Enter the Name of the Song
            <Mat.MusicNoteTwoTone/>
        </h2>
        <br/>
        <div className='input'>
        <TextField
          label="Enter Song Name"
          id="outlined-size-small"
          placeholder='Enter Name of the song'
          onChange={Song}
          value={song}
          variant="outlined"
          size='small'
        />
        </div>
        <div className='btn'>
         <Button  variant="outlined" onClick={DoSearch} color="secondary">
            Search
         </Button>
         </div>
        </div>
           
            <h3>
                {Err}
            </h3>
             <div className='tracks'>
                {
                    res.map((val,index)=>{
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

export default Search
