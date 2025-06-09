import {useState ,useContext ,useEffect} from 'react';
import { MoviesContext } from '../Context/MoviesProvider';
import Movie from '../Components/Movie';
import { useLocation } from 'react-router';
import { IoSearch } from "react-icons/io5";

const BrowsePage = () => {
     
    const location = useLocation();
    let {MoviesData} = useContext(MoviesContext);
    const [SearchResult, setSearchResult] = useState(MoviesData);

    //Auto Scroll To The Bottom When adding a Movie
    useEffect(() => {
        if (location.state?.fromAddMovie) {
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        }
    }, [location]);

    let GetSearchResult=(e)=>{
        if(e.target.value =='')
            setSearchResult(MoviesData);
        setSearchResult(
            MoviesData.filter((item) =>
                item.title.toLowerCase().includes(e.target.value.toLowerCase())
            )
        );
    }

    
     let ClassName ={
        MoviesContainer:"flex flex-wrap my-[80px] mx-auto w-full justify-center gap-y-3.5",
        SearchContainer:"w-[75%] bg-black/30 flex justify-between items-center rounded-full px-10 h-15 mx-auto mt-[60px]",
        TextField:"h-full w-[70%] outline-none",
        SearchIcon:"h-[60%] w-auto"
    };
    return (
        <>
        <div className={ClassName.SearchContainer}>
            <input type="text" placeholder='Search' className={ClassName.TextField} onInput={GetSearchResult}/>
            <IoSearch className={ClassName.SearchIcon}></IoSearch>
        </div>
            <div className={ClassName.MoviesContainer}>
                {SearchResult.map((Mov)=><Movie uData={Mov} key={Mov.id}></Movie>)}
            </div>
        </>
    );
}

export default BrowsePage;
