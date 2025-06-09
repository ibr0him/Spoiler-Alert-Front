import { Children, createContext, useState,useEffect } from "react";
import axios from "axios";
import useMessage from "../hooks/useMassage";
import Message from "../Components/Message";
import MovieModel from "../Models/Movie Models/MovieModel";

export let MoviesContext = createContext();

const apiBase = import.meta.env.VITE_API_BASE;

const MoviesProvider = ({ children }) => {

    let [MoviesData, SetMoviesData] = useState([]);
    const [Signin, SetSignin] = useState(false);
    const [IsAdmin, setIsAdmin] = useState(null);
    const [User, setUser] = useState({});
    const message = useMessage();
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null);
    const [ClickedMovie, setClickedMovie] = useState({});    

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const res = await axios.get(`${apiBase}/api/movie`);
                let Movies = res.data.map(m=> new MovieModel({
                    id:`${m.id}M`,
                    title:m.title,
                    posterImage:m.posterImage,
                    genres:m.genres,
                    overview:m.overview,
                    releaseDate:m.releaseDate,
                    rating:m.rating
                }));
                SetMoviesData(Movies);
            } catch (err) {
                message.showMessage("Failed to fetch movies:");
                setError(err.message || "Something went wrong");
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    return (
        <>
            <MoviesContext.Provider value={{ MoviesData, SetMoviesData, Signin, SetSignin, 
                IsAdmin, setIsAdmin, User, setUser,ClickedMovie, setClickedMovie,message }}>
                    
                {children}
                <Message message={message.message}></Message>
            </MoviesContext.Provider>
        </>
    );
}

export default MoviesProvider;
