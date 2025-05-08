import { useCallback, useState } from "react";
import {v4 as uuid} from "uuid"
import Form from "./Form";
import Navbar from "./Navbar";
import Styling from "../Styles/AddingPage.module.css"
import Movie from "./Movie"
import '../Styles/MovieStyle.css'
import APIMoviesFun from "./APIMoviesFun";

const AddingPage = () => {

let [MoviesData,SetMoviesData]=useState([
    {id:uuid(),Image:"https://m.media-amazon.com/images/I/91WNnQZdybL.jpg",Title:"Aladdin",Type:"Action , Comedy",Rating:"8.4"},
    {id:uuid(),Image:"https://image.tmdb.org/t/p/original/pEz5aROvfy5FBW1OTlrDO3VryWO.jpg",Title:"Soul",Type:"Adventure , Familly",Rating:"6.2"},
    {id:uuid(),Image:"https://s.movieinsider.com/images/p/581510_m1614447018.jpg",Title:"BigFoot Family",Type:"Adventure , Familly",Rating:"7.3"},
    {id:uuid(),Image:"https://m.media-amazon.com/images/M/MV5BMjA5NzUwODExM15BMl5BanBnXkFtZTgwNjM0MzE4NjE@._V1_.jpg",Title:"In the Heart of the Sea",Type:"Adventure , Horror",Rating:"9.2"},
    {id:uuid(),Image:"https://m.media-amazon.com/images/M/MV5BN2RkYmRhZTMtZDllNy00ZjNmLThjNzItYTljNzJmNGNhMDA4XkEyXkFqcGc@._V1_.jpg",Title:"Everest",Type:"Adventure",Rating:"6.4"},
    {id:uuid(),Image:"https://i.ebayimg.com/images/g/4xYAAOSwCGZiwSv8/s-l1200.jpg",Title:"Venom",Type:"Action",Rating:"8.4"},
    {id:uuid(),Image:"https://www.originalfilmart.com/cdn/shop/products/fantastic4_2015_stylek_teaser_original_filM-art_5000x.jpg?v=1627545303",Title:"Fantastic Four",Type:"Action",Rating:"9.4"},
    {id:uuid(),Image:"https://i0.wp.com/www.heyuguys.com/images/2013/05/The-Conjuring-Poster.jpg?fit=1299%2C1921&ssl=1",Title:"The Conjuring",Type:"Horror",Rating:"6.4"}
    ]);

    let Submit= (Result)=>{
        SetMoviesData([...MoviesData, {...Result,id:uuid()}]);
    }
    // let Submit = useCallback((Result) => {
    //     SetMoviesData(prev => [...prev, { ...Result, id: uuid() }]);
    //   }, []);
   
    return (
        <>
            <Navbar></Navbar>
            <Form PSubmit={Submit}></Form>
            <h1 className={Styling.SubTitle}>My Collections</h1>
            <div id="MoviesContainer">
                {MoviesData.map((Mov)=><Movie uData={Mov} key={Mov.id}></Movie>)}
            </div>
            <h1 className={Styling.SubTitle}>API Movies</h1>
            <APIMoviesFun></APIMoviesFun>
        </>
    );
}

export default AddingPage;
