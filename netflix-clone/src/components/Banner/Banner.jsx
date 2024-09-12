import React, { useEffect, useState } from 'react'
import axios from "../../Utils/Axios"
import request from "../../Utils/Request"
import "./banner.css"

function Banner() {
const [movie, setmovies]= useState({});
useEffect(()=>{
    ( async()=>{
    try{const response= await axios.get(request.fetchnetflixorginals)
        console.log(response) // whole josen 
        setmovies(response.data.results[
            Math.floor(Math.random() *response.data.results.length)
        ]);console.log(setmovies)
    }catch(error){
        console.log("error",error)
    }
})()
   
},[])

function trancate(string,n) {
  return string?.length> n ? string.substring(0,n)+"..." :string 
  
}

  return (
    <div className='banner'
    style={{
        backgroundSize:"cover",
        backgroundImage:`url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat"
    }}
>
          <div className='banner_container'>
            <h1 className='banner_title'>
                {movie?.title||movie.name||movie.original_name}</h1>
              <div className='banner_buttons'>
                <button className='banner_button play'>Play</button>
                <button className='banner_button'>My List</button>
              </div>
              <h3 className='banner_discription'> { trancate(movie?.overview ,150)}</h3>
          </div>
          <div className='banner_fadebutton'/>
    </div>
  )
}
export default Banner