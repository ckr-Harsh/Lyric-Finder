import React, { createContext, useState ,useEffect} from 'react'
import Axios from 'axios'

export const Track = createContext();
export const Iden = createContext();
function Try(props) {
    const [value,setvalue] = useState();
    const [t,setTrack] = useState([]);


    useEffect(() => {
        Top();
    }, [])
    const Top = async()=>{
        let apiKey= '0f721c28a837fc8fd3d2d83f073539eb';
            await Axios
           .get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?
           page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${apiKey}`)
           .then( res=>{
               let track_list = res.data.message.body.track_list;
               setTrack(track_list);
               console.log(res);    
           })
           .catch (err=>{
                 console.log(err);
            });
        }    
      
    return (
        <>
        <Track.Provider value={[t,setTrack]}>
            <Iden.Provider value={[value,setvalue]}>
                {props.children}
            </Iden.Provider>
        </Track.Provider>
        </>
    )
}

export default Try
