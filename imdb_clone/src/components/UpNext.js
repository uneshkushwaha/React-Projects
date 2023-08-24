
import { Typography, Box, styled } from "@mui/material";


const Component =styled(Box)`

width:40%;
display: flex;
flex-direction: column;
align-items: baseline;
padding-left: 20px;

& > p{
  color:yellow;
  font-weight:800;
  font-size:18px;
  margin-bottom:10px;
}

`

const Wrapper = styled(Box)`
    color: #FFFFFF;
    display: flex;
    & > p {
        margin-left: 20px;
    }
`
const Poster = styled('img')(
    {
  width:'20%'
  
    }
  )
    



const UpNext = ({ movies }) => {
    return (

        <Component>
            <Typography> Up Next</Typography>
            {
                 movies.splice(0,3).map(movie => (

                    <Wrapper key={movie.id}>

                    <Poster   src ={`https://image.tmdb.org/t/p/original/${movie.poster_path} `} alt='poster'/>
                    <Typography  >{movie.original_title}</Typography>
                  
                    </Wrapper>  
            ))
            }
          
        </Component>

    )
}
export default UpNext;