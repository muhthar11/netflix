import React,{useEffect, useState} from 'react'
import {API_KEY,imageUrl} from '../../constants/constants'
import axios from '../../axios'
import Youtube from 'react-youtube'
import './RowPost.css'

function RowPost(props) {
  const [movies,setMovies] = useState([])
  const [urlId,setUrlId] = useState('')

  useEffect(()=>{
      axios.get(props.url).then((response)=>{
        console.log("discover=",response.data)
        setMovies(response.data.results)
      }).catch((err)=>{
        alert(err)
      })
  },[])

  const opts = {
    height: '450',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovie = (movie_id)=>{
    console.log("movie_id= ",movie_id)
    axios.get(`movie/${movie_id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      console.log(response.data)
      if(response.data.length != 0){
        setUrlId(response.data.results[0])
      }
      else{
        alert("Trailer Not Available")
      }
    })
  }

  return (
    <div className="row">
        <h2>{props.title}</h2>
        <div className="posters">
          {
            movies.map((obj)=>
            <img onClick={()=>handleMovie(obj.id)} className='poster' src={`${movies? imageUrl+obj.poster_path: ""} `} alt="card" />
            )
          }
        </div>
       {urlId && <Youtube  opts={opts} videoId={urlId.key}/>} 
    </div>
  )
}

export default RowPost