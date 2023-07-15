import { useState,useEffect } from "react";
import { categoryMovies } from "../services/api";
import MoviesList from "../components/MoviesList";
import {  UPCOMING_API_URL,POPULAR_API_URL, TOPRATED_API_URL,NOWPLAYING_API_URL,type } from "../constants/constant";
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import { useLocation } from "react-router-dom";

import { Box ,Typography,styled,Divider} from "@mui/material";
import Header from "../components/common/Header";

const Component = styled(Box)`
width: 60%;
margin: auto;
`

const Container = styled(Box)`
background: #F5F5F5;
text-align: left;
padding: 10px;
`

const StyledBanner = styled('img')(
  {
    height:450,
width:'100%'

  }
)

  



const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    }
  };





const CategoryMovies =()=>{

    const [movies,setMovies]=useState([]);

    const{ search} = useLocation();

useEffect(()=>{
    const getData= async (API_URL)=>{
        let response = await categoryMovies(API_URL);
        setMovies(response.results);
        
    }

    let API_URL='';

  if (search.includes('Upcoming')){
    API_URL=UPCOMING_API_URL;

  } else if(search.includes('popular')){
  API_URL=POPULAR_API_URL;



}  else if (search.includes('TopRated')){
  API_URL=TOPRATED_API_URL;

}  else if (search.includes('NowPlaying')){
  API_URL=NOWPLAYING_API_URL;

}
    getData(API_URL);
},[search])


    return(
        <>
        <Header/>
        <Component>
            
        <Carousel

responsive={responsive}
swipeable={false}
draggable={false}
infinite={true}
autoPlay={true }
autoPlaySpeed={2000}>
      
  {
    movies.map(movie=>(
        <StyledBanner  key={movie.id} src ={`https://image.tmdb.org/t/p/original/${movie.backdrop_path} `} alt='banner'/>
        
    ))
  }  


</Carousel>

<Container>
  <Typography variant ='h6'>IMDb Charts</Typography>
 
  <Typography  variant ='h4'>IMDb {type[search.split('=')[1]]} Movies</Typography>

{ // search split the [category=upcoming] of the url where [category] is conisdered as on index '0' and [upcoming] as on index 1
}
  <Typography style={{fontSize:14,margin:5}}>IMDb Top {movies.length} as rated by regular IMDb voters</Typography>
  <Divider />
  <MoviesList movies={movies}/>


</Container>

        </Component>
        </>

    )
}

export default CategoryMovies;