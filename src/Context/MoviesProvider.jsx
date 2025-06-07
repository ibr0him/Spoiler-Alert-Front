import { Children, createContext,useState} from "react";
import {v4 as uuid} from "uuid"



export let MoviesContext = createContext();

const MoviesProvider = ({children}) => {
    
   let [MoviesData, SetMoviesData] = useState([
  { id: uuid(), Image: "https://m.media-amazon.com/images/I/91WNnQZdybL.jpg", Title: "Aladdin", Type: "Action , Comedy", Rating: "8.4" },
  { id: uuid(), Image: "https://image.tmdb.org/t/p/original/pEz5aROvfy5FBW1OTlrDO3VryWO.jpg", Title: "Soul", Type: "Adventure , Family", Rating: "6.2" },
  { id: uuid(), Image: "https://s.movieinsider.com/images/p/581510_m1614447018.jpg", Title: "BigFoot Family", Type: "Adventure , Family", Rating: "7.3" },
  { id: uuid(), Image: "https://m.media-amazon.com/images/M/MV5BMjA5NzUwODExM15BMl5BanBnXkFtZTgwNjM0MzE4NjE@._V1_.jpg", Title: "In the Heart of the Sea", Type: "Adventure , Horror", Rating: "9.2" },
  { id: uuid(), Image: "https://m.media-amazon.com/images/M/MV5BN2RkYmRhZTMtZDllNy00ZjNmLThjNzItYTljNzJmNGNhMDA4XkEyXkFqcGc@._V1_.jpg", Title: "Everest", Type: "Adventure", Rating: "6.4" },
  { id: uuid(), Image: "https://i.ebayimg.com/images/g/4xYAAOSwCGZiwSv8/s-l1200.jpg", Title: "Venom", Type: "Action", Rating: "8.4" },
  { id: uuid(), Image: "https://www.originalfilmart.com/cdn/shop/products/fantastic4_2015_stylek_teaser_original_filM-art_5000x.jpg?v=1627545303", Title: "Fantastic Four", Type: "Action", Rating: "9.4" },
  { id: uuid(), Image: "https://i0.wp.com/www.heyuguys.com/images/2013/05/The-Conjuring-Poster.jpg?fit=1299%2C1921&ssl=1", Title: "The Conjuring", Type: "Horror", Rating: "6.4" },
  { id: uuid(), Image: "https://image.tmdb.org/t/p/w500/j8tqBXwH2PxBPzbtO19BTF9Ukbf.jpg", Title: "Warfare", Type: "Action", Rating: "7.1" },
  { id: uuid(), Image: "https://image.tmdb.org/t/p/w500/jM2uqCZNKbiyStyzXOERpMqAbdx.jpg", Title: "Exterritorial", Type: "Science Fiction", Rating: "6.6" },
  { id: uuid(), Image: "https://image.tmdb.org/t/p/w500/m9EtP1Yrzv6v7dMaC9mRaGhd1um.jpg", Title: "Thunderbolts*", Type: "Action , Drama", Rating: "7.5" },
  { id: uuid(), Image: "https://image.tmdb.org/t/p/w500/qycPITRqXgPai7zj1gKffjCdSB5.jpg", Title: "Balle perdue 3", Type: "Action , Crime", Rating: "7.3" },
  { id: uuid(), Image: "https://image.tmdb.org/t/p/w500/6FRFIogh3zFnVWn7Z6zcYnIbRcX.jpg", Title: "A Working Man", Type: "Drama", Rating: "6.5" },
  { id: uuid(), Image: "https://image.tmdb.org/t/p/w500/tbJ3RkA2s6X5qrBzrYHYTxvDBui.jpg", Title: "Rust", Type: "Drama , Thriller", Rating: "6.3" },
  { id: uuid(), Image: "https://image.tmdb.org/t/p/w500/iPPTGh2OXuIv6d7cwuoPkw8govp.jpg", Title: "A Minecraft Movie", Type: "Adventure , Family , Fantasy", Rating: "6.2" },
  { id: uuid(), Image: "https://image.tmdb.org/t/p/w500/r46leE6PSzLR3pnVzaxx5Q30yUF.jpg", Title: "Havoc", Type: "Action , Crime", Rating: "6.5" },
  { id: uuid(), Image: "https://image.tmdb.org/t/p/w500/pzIddUEMWhWzfvLI3TwxUG2wGoi.jpg", Title: "Captain America: Brave New World", Type: "Action , Adventure , Science Fiction", Rating: "6.1" },
  { id: uuid(), Image: "https://image.tmdb.org/t/p/w500/bTvHlcqiOjGa3lFtbrTLTM3zasY.jpg", Title: "Tarzan", Type: "Adventure , Family", Rating: "7.3" },
  { id: uuid(), Image: "https://image.tmdb.org/t/p/w500/ixQoOExnnvIxYvnqGgfhaWqXeXc.jpg", Title: "용감한 시민", Type: "Action , Drama", Rating: "7.1" },
  { id: uuid(), Image: "https://image.tmdb.org/t/p/w500/eujLbO0kf1eqWC8XpHUJdtAVW2J.jpg", Title: "ज्वेल थीफ: द हीस्ट बिगिन्स", Type: "Action , Thriller", Rating: "6.5" },
  { id: uuid(), Image: "https://image.tmdb.org/t/p/w500/lXR32JepFwD1UHkplWqtBP1K79z.jpg", Title: "Death of a Unicorn", Type: "Comedy , Fantasy", Rating: "6.4" },
  { id: uuid(), Image: "https://image.tmdb.org/t/p/w500/fceheXB5fC4WrLVuWJ6OZv9FXYr.jpg", Title: "The Accountant", Type: "Action , Thriller", Rating: "7.1" },
  { id: uuid(), Image: "https://image.tmdb.org/t/p/w500/dDlfjR7gllmr8HTeN6rfrYhTdwX.jpg", Title: "In the Lost Lands", Type: "Fantasy , Adventure", Rating: "6.3" },
  { id: uuid(), Image: "https://image.tmdb.org/t/p/w500/t4MiAeYpjL7saYvqvcn9xtOfA4K.jpg", Title: "Conjuring the Cult", Type: "Horror", Rating: "3.9" },
  { id: uuid(), Image: "https://image.tmdb.org/t/p/w500/jYfMTSiFFK7ffbY2lay4zyvTkEk.jpg", Title: "Sinners", Type: "Horror , Thriller", Rating: "7.5" },
  { id: uuid(), Image: "https://image.tmdb.org/t/p/w500/z73X4WKZghBh5fri31o8P6vBEB2.jpg", Title: "Van Gogh by Vincent", Type: "Documentary", Rating: "6.4" },
  { id: uuid(), Image: "https://image.tmdb.org/t/p/w500/hBJdzKPeDaC96AzlrtMWBomYSZV.jpg", Title: "Saint Catherine", Type: "Drama , History", Rating: "6.3" },
  { id: uuid(), Image: "https://image.tmdb.org/t/p/w500/zboCGZ4aIqPMd7VFI4HWnmc7KYJ.jpg", Title: "Another Simple Favor", Type: "Comedy , Mystery", Rating: "6.0" }
]);

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
