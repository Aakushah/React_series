import React from 'react'
import './Home.scss'
import { useEffect,useState } from 'react';

// import { Link } from "react-router-dom";
import axios from 'axios';

import { FaPlay,FaPlus} from 'react-icons/fa6'


const apikey="a3fd63a43a08f5f25a5542bcd4f42e11";
const url="https://api.themoviedb.org/3/";
const upcoming="upcoming";
const nowplaying="now_playing";
const toprated="top_rated";
const popular="popular";
const imgurl="https://image.tmdb.org/t/p/original/";


const Card=  ({img}) => {
  return ( 
      <img className='card' src={img} alt='cover'/> 
  )
}

const Row = ({title,arr=[]}) =>{
  return (
      <div className='row'>
        <h1>{title}</h1>
        <div>
          {
            arr.map((item,index) => (
              <Card key={index} img={`${imgurl}${item.poster_path}`}/>
            ))
          } 
        </div>
      </div>
  )
}

const Home= () =>{

  const [upcomingmovies, setUpcomingmovies] = useState([]);
  const [nowplayingmovies, setNowplayingmovies] = useState([]);
  const [topratedmovies, setTopratedmovies] = useState([]);
  const [popularmovies, setPopularmovies] = useState([]);
  // const [genre, setGenre] = useState([]);

  useEffect(()=>{
    
    const fetchUpcoming=async()=>{
      const {data:{results},} =await axios.get(`${url}movie/${upcoming}?api_key=${apikey}`)
      setUpcomingmovies(results);
    };
    const fetchNowplaying=async()=>{
      const {data:{results},} =await axios.get(`${url}movie/${nowplaying}?api_key=${apikey}`)
      setNowplayingmovies(results);
    };
    const fetchToprated=async()=>{
      const {data:{results},} =await axios.get(`${url}movie/${toprated}?api_key=${apikey}`)
      setTopratedmovies(results);
    };
    const fetchPopular=async()=>{
      const {data:{results},} =await axios.get(`${url}movie/${popular}?api_key=${apikey}`)
      setPopularmovies(results);
    };

    

  //   const getAllGenre = async () => {
  //     const {
  //         data: { genres },
  //     } = await axios.get(`${url}/genre/movie/list?api_key=${apikey}`);
  //     setGenre(genres);
  //     console.log(genres);
  // };


    // getAllGenre();
    fetchUpcoming();
    fetchNowplaying();
    fetchToprated();
    fetchPopular();


  },[]);
  


  return (
    <div className='home'>
      
      <div className='banner' style={{backgroundImage: popularmovies[0] ? `url(${`${imgurl}${popularmovies[0].poster_path}`})` : "rgb(0, 0, 0)" }}>

        {
          popularmovies[0] && (
            <h2>{popularmovies[0].original_title}</h2>

          )
        }
        {
          popularmovies[0] && (
            <p>{popularmovies[0].overview}</p>

          )
        }
        <div className='hBtn'>
          <button > <FaPlay /> Play</button>
          <button > <FaPlus /> My List</button>
        </div> 
      </div>

      <Row title={"Popular On Netflix"} arr={popularmovies}/>
      <Row title={"UpComing Movies"} arr={upcomingmovies}/>
      <Row title={"Now Playing"}  arr={nowplayingmovies}/>
      <Row title={"Top Rated"} arr={topratedmovies} />

      {/* <div className="genreBox">
                {genre.map((item) => (
                    <Link key={item.id} to={`/genre/${item.id}`}>
                        {item.name}
                    </Link>
                ))}
      </div> */}
      

     
    </div>
  )
}

export default Home