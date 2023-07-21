import axios from 'axios'
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { API_KEY } from '../../Data'

const MovieActor = ({Id}) => {
    const [movieImg, setMovieImg] = useState([])
   const  getMovieImg = (key) => {
        axios(`https://api.themoviedb.org/3/person/${Id}/movie_credits?api_key=${key}&language=en-US`)
    .then(res => setMovieImg(res.data.cast))
   }

        useEffect(() =>{
            getMovieImg(API_KEY)
        }, [])
        console.log("movieImg",movieImg);
  return (
    <div id={"movi"} >
        <div className="movi">
            {
               movieImg.map(el => 
                <div className="movi--block">
                                       <Link to={`/movie/details/${el.id}`}>

                                   { el.poster_path ? 
                                       <img src={`https://image.tmdb.org/t/p/w220_and_h330_face/${el.poster_path}`} alt="img"/>
                                       :<img
                                       src="https://img.freepik.com/free-vector/oops-404-error-with-a-broken-robot-concept-illustration_114360-1932.jpg?w=2000"
                                       alt="img"
                                   />
                                    
                                   }
                                   </Link>
                                   

                                   <h4><center>{el.title}</center></h4>

                                   


                               </div>
                
                ) 
            }
        </div>
        
    </div>
  )
}

export default MovieActor