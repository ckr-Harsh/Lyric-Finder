import React, {useState} from 'react'
import * as Mat from '@material-ui/icons'
import Axios from 'axios'
import Spinner from './Spinner';

function Home() {
    const [song,setSong] = useState();

    const Song = (e)=>{
        setSong(e.target.value);
    }

    const DoSearch=()=>{
        Search();
        setSong('');
    }


    const apiKey = '0f721c28a837fc8fd3d2d83f073539eb';
    const Search =  async()=>{
        let result = await Axios
        .get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/
        matcher.track.get?q_artist=eminem&q_track=${song}&apikey=${apiKey}`)
        .catch(err=>console.log(err));
        console.log(result);
       // console.log(result.data.message.body.track_list);
      //  let track_list = result.data.message.body.track_list;
/*
        let a = track_list.map(val=>
            [{album:val.track.album_name,
                track:val.track.track_name,
                artist:val.track.artist_name,
                track_id:val.track.commontrack_id,
                //lyric_link:val.track_share_url,
            }]);
            console.log(a);
            */
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
