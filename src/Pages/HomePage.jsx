import { useContext } from 'react'
import '../Styles/HomePage.css'
import Slider from '../Components/Slider.jsx'
import Movie  from '../Components/Movie.jsx'
import { MoviesContext } from '../Context/MoviesProvider.jsx'
const HomePage = () => {
    let {MoviesData}=useContext(MoviesContext);
    return (
        <>
            <Slider></Slider>
            <h1 className='SubTitle'>Trending Movies</h1>
            <div id="MoviesContainer">
                {MoviesData.slice(0,15).map((Mov)=><Movie uData={Mov} key={Mov.id}></Movie>)}
            </div>
        </>
    );
}

export default HomePage;
