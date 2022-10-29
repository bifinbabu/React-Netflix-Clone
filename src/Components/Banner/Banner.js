import React, { useEffect, useState } from 'react'
import {API_KEY, imageUrl} from '../../constants/constants'
import axios from '../../axios'
import './Banner.css'

function Banner() {
  const [movie, setMovie] = useState()
  useEffect(() => {
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results);
      //code to pick a random movie from array of movies on each refresh or reload
      var maxNumber = 19;
        var randomNumber = Math.floor((Math.random() * maxNumber));
        
      setMovie(response.data.results[randomNumber])
    })
  }, [])
  
  return (
    <div style={{backgroundImage: `url(${movie ? imageUrl+movie.backdrop_path : ""})` }} 
    className='banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title : "" }</h1>
            <h1 className='title'>{movie ? movie.name : "" }</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My list</button>
            </div>
            <h1 className='description'>{movie ? movie.overview : "" }</h1>
        </div>
        <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner