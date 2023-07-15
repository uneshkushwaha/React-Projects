
import { Box,styled } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const StyledBanner = styled('img')(
  {
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





const Banner=({movies})=>{
   
    return (
        <Box style={{width:'65%'}}>

        <Carousel

        responsive={responsive}
        swipeable={false}
        draggable={false}
        infinite={true}
        autoPlay={true }
        autoPlaySpeed={2000}
        keyBoardControl={true}
              >
          {
            movies.map(movie=>(
                <StyledBanner key={movie.id} src ={`https://image.tmdb.org/t/p/original/${movie.backdrop_path} `} alt='banner'/>
                
            ))
          }  
   
       
        </Carousel>
        </Box>
    )

}

export default Banner;