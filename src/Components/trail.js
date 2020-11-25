import React,{ useEffect, useState, createContext} from 'react'
import Axios from 'axios'


export const Context = createContext();

function Trail(props) {
    const [track,setTrack] = useState([ ]);
    useEffect(() => {
     Top();
     Search();
    }, [])

    const apiKey = '0f721c28a837fc8fd3d2d83f073539eb';
    const Top = async()=>{
           const result = await Axios
           .get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?
           page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${apiKey}`)
           .catch (err=>console.log(err));
          
          let track_list = result.data.message.body.track_list;
         // console.log(track_list);
          let a = track_list.map(val=>
            [{album:val.track.album_name,
                track:val.track.track_name,
                artist:val.track.artist_name,
                track_id:val.track.commontrack_id,
            }]);
            setTrack(track.push(...a));
            console.log(track);
    }

    const Search =  async()=>{
        let result = await Axios
        .get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=sad
        &page_size=5&page=1&s_track_rating=desc&apikey=${apiKey}`)
        .catch(err=>console.log(err));
       // console.log(result.data.message.body.track_list);
        let track_list = result.data.message.body.track_list;

        let a = track_list.map(val=>
            [{album:val.track.album_name,
                track:val.track.track_name,
                artist:val.track.artist_name,
                track_id:val.track.commontrack_id,
                //lyric_link:val.track_share_url,
            }]);
            console.log(a);
            
    }
    return (
        <> 
        <Context.Provider value={[track,setTrack]}>
            {props.children}
        </Context.Provider>
        </>
    )
}

export default Trail
