import { useEffect,useState } from "react";
import {categoryMovies } from "../services/api";
import {Box,styled} from "@mui/material";
import Banner from "../components/Banner";
import UpNext from "../components/UpNext";
import Slide from "../components/Slide";

//components
import Header from "../components/common/Header";
import {UPCOMING_API_URL} from '../constants/constant';


const Wrapper=styled(Box)`
display:flex;
padding:35px 0px;
` 

const Component=styled(Box)`

padding:0px 100px;
` 

const Home = () => {

    const[movies,setMovies]=useState([]);

    useEffect(() => {
        const getData=async ()=>{
            let response=await categoryMovies(UPCOMING_API_URL);
            setMovies(response.results);
        }
        getData();

    }, [])


    return (
        <>
        <Header />

         <Component>

        <Wrapper>
            <Banner movies={movies}/>
            <UpNext movies={movies}/>
        </Wrapper>
            <Slide  movies={movies}/>
            <Slide movies={movies}/>
            <Slide movies={movies}/>
            <Slide movies={movies}/>

         </Component>

        </>
    )

}
export default Home;