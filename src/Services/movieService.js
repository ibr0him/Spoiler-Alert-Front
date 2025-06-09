import axios from "axios";
import MovieDetailsModel from "../Models/Movie Models/MovieDetailsModel";
import MovieModel from "../Models/Movie Models/MovieModel";


const apiBase = import.meta.env.VITE_API_BASE;

const MovieService = {

    getMovieDetails: async (id, contextValues) => {
        let newId = id.substr(0, id.length - 1);
        const { message, MoviesData, setClickedMovie } = contextValues;
        try {
            const Res = await axios.get(`${apiBase}/api/movie/${newId}`);

            let BasicData = MoviesData.find((Mov) => Mov.id === id);
            let MovieDetails = new MovieDetailsModel({
                BasicData: BasicData,
                cast: Res.data.cast,
                productionCompanies: Res.data.productionCompanies,
                reviews: Res.data.reviews,
                sources: Res.data.sources
            });
            setClickedMovie(MovieDetails);
            return true;
        }
        catch (err) {
            message.showMessage(err.response ? err.response.data : err.message);
            return false;
        };
    },
    AddMovie: async (contextValues) => {
        const { NewMovie,setLoading, setLoadingMsg,MoviesData, SetMoviesData } = contextValues;
        
        setLoading(true);

        let ClientMovie = new MovieModel({
            title: NewMovie.title,
            posterImage: NewMovie.posterImage,
            genres: NewMovie.genres,
            overview: NewMovie.overview,
            rating: NewMovie.rating,
            releaseDate: NewMovie.releaseDate
        })

        const { id, ...DBMovie } = ClientMovie; // take all properties from ClientMovie Except id and store them in DBMovie

        let CastList = NewMovie.cast.map((item) => ({ name: item.name, imgURL: item.imgURL }));
        let CompaniesList = NewMovie.productionCompanies.map((item) => ({ name: item.name, imgURL: item.imgURL }));

        let sources = NewMovie.sources;
        let movieId;

        // console.log("DBMovie");
        // console.log(DBMovie);
        // console.log("CastList");
        // console.log(CastList);
        // console.log("CompaniesList");
        // console.log(CompaniesList);
        // console.log("Sources");
        // console.log(sources);
        
        setLoadingMsg("Adding Movie Details...");
        try { //adding movie to database and get the Addedmovie id
            const Res = await axios.post(`${apiBase}/api/movie`, DBMovie);
            movieId = Res.data.id
        }
        catch (err) {
            console.log("Adding Movie Failed");
            console.log(`Adding Movie Error :${err.response ? err.response.data : err.message}`);
            return false;
        };

        if (movieId !== undefined) // ensures that there is responce from DB
        {
            try {
                await axios.post(`${apiBase}/api/sources`, { movieId: movieId, ...sources });
            } catch (err) {
                console.log("Adding Sources Failed");
                console.log(`Adding Sources Error :${err.response ? err.response.data : err.message}`);
                return false;
            }
            setLoadingMsg("Adding Crew Members...");
            try {
                await axios.post(`${apiBase}/api/cast/${movieId}`, CastList);
            } catch (err) {
                console.log("Adding Cast Members Failed");
                console.log(`Adding Sources Error :${err.response ? err.response.data : err.message}`);
                return false;
            }
            setLoadingMsg("Adding Production Companies...");
            try {
                await axios.post(`${apiBase}/api/companies/${movieId}`, CompaniesList);
            } catch (err) {
                console.log("Adding Production Companies Failed");
                console.log(`Adding Sources Error :${err.response ? err.response.data : err.message}`);
                return false;
            }
            //adding the new movie to UI
            ClientMovie.id=`${movieId}M`;
            SetMoviesData([...MoviesData,ClientMovie]);

            setLoadingMsg("Movie Added Successfully");
            setLoading(false);
            return true;
        }

    }
}
export default MovieService;