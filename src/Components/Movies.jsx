import { useState } from "react"
import Movie from "./Movie"
import '../Styles/MovieStyle.css'


function Movies(){
let [MoviesData]=useState([
{id:1,Image:"https://m.media-amazon.com/images/I/91WNnQZdybL.jpg",Title:"Aladdin",Type:"Action , Comedy",Rating:"8.4"},
{id:2,Image:"https://image.tmdb.org/t/p/original/pEz5aROvfy5FBW1OTlrDO3VryWO.jpg",Title:"Soul",Type:"Adventure , Familly",Rating:"6.2"},
{id:3,Image:"https://s.movieinsider.com/images/p/581510_m1614447018.jpg",Title:"BigFoot Family",Type:"Adventure , Familly",Rating:"7.3"},
{id:4,Image:"https://m.media-amazon.com/images/M/MV5BMjA5NzUwODExM15BMl5BanBnXkFtZTgwNjM0MzE4NjE@._V1_.jpg",Title:"In the Heart of the Sea",Type:"Adventure , Horror",Rating:"9.2"},
{id:5,Image:"https://m.media-amazon.com/images/M/MV5BN2RkYmRhZTMtZDllNy00ZjNmLThjNzItYTljNzJmNGNhMDA4XkEyXkFqcGc@._V1_.jpg",Title:"Everest",Type:"Adventure",Rating:"6.4"},
{id:6,Image:"https://i.ebayimg.com/images/g/4xYAAOSwCGZiwSv8/s-l1200.jpg",Title:"Venom",Type:"Action",Rating:"8.4"},
{id:7,Image:"https://www.originalfilmart.com/cdn/shop/products/fantastic4_2015_stylek_teaser_original_filM-art_5000x.jpg?v=1627545303",Title:"Fantastic Four",Type:"Action",Rating:"9.4"},
{id:8,Image:"https://i0.wp.com/www.heyuguys.com/images/2013/05/The-Conjuring-Poster.jpg?fit=1299%2C1921&ssl=1",Title:"The Conjuring",Type:"Horror",Rating:"6.4"}
]);
    return(
        <div id="MoviesContainer">
            {MoviesData.map((Mov)=><Movie uData={Mov} key={Mov.id}></Movie>)}
        </div>
    )
}
export default Movies;