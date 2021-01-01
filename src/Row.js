import React,{useState,useEffect} from 'react';
import axios from './axios'; 
import './Row.css';
// import requests from './requests'
const base_url="https://image.tmdb.org/t/p/w342";
function Row({title,fetchUrl,big_poster}) {
    const [movies,setMovies]=useState([]);

    useEffect(() => {
        async function fetchData(){
            const request=await axios.get(fetchUrl);
            // console.log(request);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl])
    // console.log(movies);

    return (
        <div className="row">
            <h2>{title}</h2>
        <div className="row_posters">
            {movies.map(yes=>(
                (yes.poster_path)?
                <img  key={yes.id} className={`row_poster ${big_poster && "big_poster"}`}   src={`${base_url}${big_poster?yes.poster_path:yes.backdrop_path}`}  alt=''></img> 
                :<></>
                
                
            ))}
            </div>            
        </div>
    )
}

export default Row
