import React,{useState,useEffect} from 'react';
import axios from './axios'; 
import './Row.css';
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'

// import requests from './requests'
const base_url="https://image.tmdb.org/t/p/w342";
function Row({title,fetchUrl,big_poster}) {
    const [movies,setMovies]=useState([]);
    const [TrailerUrl, setTrailerUrl] = useState('');

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
    function handleClick(movie){
        if(TrailerUrl){
            setTrailerUrl('');
        }
        else{
            movieTrailer(movie?.title || "")
            .then((url)=>{
                const UrlParams=new URLSearchParams(new URL(url).search);
                setTrailerUrl(UrlParams.get('v'));
            }
            )
            .catch((error)=>console.log(error));
        }
    }
    const opts=
    {
        height:"390",
        width:"100%",
        playerVars:{
            autoplay:1,
        }
    }

    return (
        <div className="row">
            <h2>{title}</h2>
        <div className="row_posters">
            {movies.map(yes=>(
                (yes.poster_path)?
                <img  onClick={()=> handleClick(yes)} key={yes.id} className={`row_poster ${big_poster && "big_poster"}`}   src={`${base_url}${big_poster?yes.poster_path:yes.backdrop_path}`}  alt=''></img> 
                :<></>
               
                
            ))}
            </div>   
            {TrailerUrl && <YouTube videoId={TrailerUrl} opts={opts}/>}         
        </div>
    )
}

export default Row
