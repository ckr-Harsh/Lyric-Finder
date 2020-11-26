import React, {useState} from 'react'
import * as Mat from '@material-ui/icons'
import Axios from 'axios'

function Home() {
    const [song,setSong] = useState();
    const[neu,setNew]=useState();

    const Song = (e)=>{
        setSong(e.target.value);
        setNew(song);
    }

    const DoSearch=()=>{
        Search();
        setSong('');
    }


    const apiKey = '0f721c28a837fc8fd3d2d83f073539eb';
    const Search =  async()=>{
        let result = await Axios
        .get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/matcher.track.get?
        q_track=${song}&page_size=5&apikey=${apiKey}`)
        .then(res=>{
            console.log(res);
        })
        .catch(err=>console.log(err));
       
        }

    return (
        <>
            <h1>LyricFinder</h1>

            <div className='first'>
                <h2><Mat.MusicNoteTwoTone/>
                    Enter the Name of the Song
                    <Mat.MusicNoteTwoTone/>
                </h2>
                <input 
                    type='text'
                    placeholder='Enter Name of the song'
                    onChange={Song}
                    value={song}
                    />
                    <button
                        onClick={DoSearch}
                        >Search</button>
            </div>
        </>
    )
}

export default Home
