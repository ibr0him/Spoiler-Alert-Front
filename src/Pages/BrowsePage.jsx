import { useContext ,useEffect} from 'react';
import { MoviesContext } from '../Context/MoviesProvider';
import Movie from '../Components/Movie';
import { useLocation } from 'react-router';

const BrowsePage = () => {
     
    const location = useLocation();

    //Auto Scroll To The Bottom When adding a Movie
    useEffect(() => {
        if (location.state?.fromAddMovie) {
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        }
    }, [location]);

    let {MoviesData} = useContext(MoviesContext);
     let ClassName ={
        MoviesContainer:"flex flex-wrap my-[100px] mx-auto w-full justify-center gap-y-3.5"
    };
    return (
        <>
            <div className={ClassName.MoviesContainer}>
                {MoviesData.map((Mov)=><Movie uData={Mov} key={Mov.id}></Movie>)}
            </div>
        </>
    );
}

export default BrowsePage;
