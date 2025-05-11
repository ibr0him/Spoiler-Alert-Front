import { useContext ,useEffect} from 'react';
import '../Styles/HomePage.css'
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
    return (
        <>
            <div id="MoviesContainer">
                {MoviesData.map((Mov)=><Movie uData={Mov} key={Mov.id}></Movie>)}
            </div>
        </>
    );
}

export default BrowsePage;
