import { useContext } from 'react'
import Slider from '../Components/Slider.jsx'
import Movie  from '../Components/Movie.jsx'
import { MoviesContext } from '../Context/MoviesProvider.jsx'

const HomePage = () => {
    let {MoviesData}=useContext(MoviesContext);
    
    // Tailwind Styling
    let ClassName ={
        SubTitle:"text-[40px] font-bold text-center mx-auto mt-[100vh] mb-[100px]",
        MoviesContainer:"flex flex-wrap my-[100px] mx-auto w-full justify-center gap-y-3.5"
    };
    return (
        <>
            <Slider></Slider>
            <h1 className={ClassName.SubTitle}>Trending Movies</h1>
            <div className={ClassName.MoviesContainer}>
                {MoviesData.slice(0,15).map((Mov)=><Movie uData={Mov} key={Mov.id}></Movie>)}
            </div>
        </>
    );
}

export default HomePage;
