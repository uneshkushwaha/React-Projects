import React from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Box,styled ,Typography} from '@mui/material';



const StyledBanner = styled('img')(
    {
  width:'100%',
  height:'80%'
 
    }
  )

  const Title = styled(Typography)`
    color: #FFFFFF;
    display: flex;
`;

  


const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    }
  };
  

 



const Slide=({movies})=>{
    return(
        <Box style={{ marginTop: 20 }}>


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
                < React.Fragment  key={movie.id}>
                <StyledBanner   src ={`https://image.tmdb.org/t/p/original/${movie.backdrop_path} `} alt='banner'/>
                <Title>{movie.original_title}</Title>
               

            </React.Fragment>                  
                  ))
                }  
   
       
        </Carousel>
                </Box>


    )
}

export default Slide;