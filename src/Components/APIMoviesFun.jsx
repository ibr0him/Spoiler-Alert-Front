import { useEffect,useMemo,useState } from "react";
import APIMovie from "./APIMovie"
import axios from "axios";
import useRating from "../Custom Hooks/useRating";

const APIMoviesFun = () => {
    
    const [MoviesData, setMoviesData] = useState([]);
    
    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7")
        .then((res)=>setMoviesData(res.data.results))
    }, []);

    let OldMovie = useMemo(() => {
        const sorted = MoviesData.sort((a, b) => new Date(a.release_date) - new Date(b.release_date));
        return `${sorted[0]?.original_title} , Date is ${sorted[0]?.release_date}`;
    }, [MoviesData]);
    
    const [low ,avg ,high] = useRating(MoviesData);

    if(!MoviesData) return(<div style={{fontSize:"30px" ,textAlign:"center"}}>Loading</div>);
    return (   
        <>
            <div style={TestStyling}>
            <h2>Oldest Movie is {OldMovie}</h2>
            <h2>Highest Rating : {high?.original_title} ({high?.vote_average})</h2>
            <h2>Average Rating : {avg?.original_title} ({avg?.vote_average})</h2>
            <h2>Lowest Rating  : {low?.original_title} ({low?.vote_average})</h2>
            </div>
            <div id="MoviesContainer">
                {MoviesData.map((Mov) => <APIMovie uData={Mov} key={Mov.id} />)}
            </div>
        </>
    );
}
let TestStyling={display:"flex",width:"fit-content",margin:"0px auto",flexWrap:"wrap",gap:"100px"};

export default APIMoviesFun;
