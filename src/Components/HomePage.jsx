
import '../Styles/HomePage.css'
import Slider from './Slider.jsx'
import Movies from './Movies'
import APIMovies from './APIMovies'
const HomePage = () => {
    return (
        <>
            <Slider></Slider>
            <h1 className='SubTitle'>Trending Movies</h1>
            <Movies></Movies>
            <h1 className='SubTitle'>API Movies</h1>
            <APIMovies></APIMovies>
        </>
    );
}

export default HomePage;
