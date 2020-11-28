import React, {useState,useEffect, useContext} from 'react'
import Axios from 'axios'
import Display from './Display';
import { Rambo } from './Context';

function Search(props) {
    const [res,setRes] = useState([]);
    const [Err,setError] = useState();

    let id=useContext(Rambo);
   console.log(id);
    useEffect(() => {
       // Search();
    }, [])

    const apiKey = '0f721c28a837fc8fd3d2d83f073539eb';
    const Search =  async()=>{
        await Axios
        .get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?
        q_track=${id}&page=1&page_size=5&s_track_rating=desc&apikey=${apiKey}`)
        .then(res=>{
            console.log(res.data.message.body.track_list);
            setRes(res.data.message.body.track_list);
            console.log(res);
        })
        .catch(err=>{
            console.log(err);
            setError(`Try Again,${err}`);
        });
       
        }
        //console.log(props.song);
    return (
        <>
            <h2>Search Results</h2>
            <h3>
                {Err}
                <p>Try Again</p>
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
          
           {/*   <Spinner style={{
                visibility:spin?'visible':'hidden'
            }} />*/}
        </div>

        </>
    )
}

export default Search
