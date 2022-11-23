import React, { useState } from 'react'
import axios from '../../Axios/axios'
import {imageUrl,apiKey} from '../../Constants/constants.js'
import './RowPoster.css'
import { useEffect } from 'react'
import YouTube from 'react-youtube'
function RowPoster(props) {
  const[filim,setFilim]=useState([]);
  const [urId, setUrlId] = useState('')
  useEffect(()=>{
        axios.get(props.url)
        .then((res)=>{
            
            setFilim(res.data.results)
            
        })
        .catch(err=>{
       //   alert('network Error')
        })
    },[])

    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
      },
    };
    
    const handleMovie =(id)=>{
         axios.get(`/movie/${id}/videos?api_key=${apiKey}&language=en-US`)
         .then(res=>{
          if(res.data.results.length !==0){
            setUrlId(res.data.results[0])
          }
          else{
            console.log('trailer not available')
          }
          console.log(res.data)
          .catch(e=>{
            console.log(e)
          })
         })
    }
  return (
    <div className='row'>
       
        <h2>{props.title}</h2>
        <div className='posters'>
            {
                filim.map((fil)=>{
                    return ( 
                      
                        <img onClick={()=>handleMovie(fil.id)} className={props.isSmall ? 'small-poster' : 'poster'} key={fil.title} src={`${imageUrl+fil.backdrop_path}`} alt='filim poster'/>             
                    )
                })           
            }  
        </div>
        {
          urId && <YouTube  videoId={urId.key} opts={opts} />
           
        }
       
    </div>
  )
}

export default RowPoster