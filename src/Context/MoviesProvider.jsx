import { Children, createContext,useState} from "react";

export let MoviesContext = createContext();

const MoviesProvider = ({children}) => {
    
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("http://localhost:5076/api/movie");
        if (!response.ok) throw new Error("Failed to fetch movies");
        const data = await response.json();
        SetMoviesData(data);
      } catch (err) {
        console.error("Error fetching movies:", err);
      } 
    };

    fetchMovies();
  }, []);

const [Signin, SetSignin] = useState(false);


    return (
        <>
            <MoviesContext.Provider value={{MoviesData,SetMoviesData,Signin, SetSignin}}>
                {children}
            </MoviesContext.Provider>        
        </>
    );
}

export default MoviesProvider;
