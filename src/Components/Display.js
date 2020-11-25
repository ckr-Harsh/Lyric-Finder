import React from 'react'
import Spinner from './Spinner';

function Display(props) {
    console.log(props.key);
    return (
        <>
        <li>
            <div className='track' 
                            style={{
                                visibility:props.show?"hidden":'visible'
                            }}>
                     <h2>{props.track}</h2>
                     <h3>Album:{props.album}</h3>
                     <h3>Artist:{props.artist}</h3>
                     <button >Get Lyrics</button>
                 </div>
        </li>
        <Spinner show={props.show}/>
        </>
    )
}

export default Display
