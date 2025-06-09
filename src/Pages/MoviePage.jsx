import { useContext, useState, useEffect } from "react";
import CSS from "../Styles/CustomCss.module.css";
import { IoPlayCircleOutline } from "react-icons/io5";
import { Link, Outlet, useParams } from "react-router";
import { MoviesContext } from "../Context/MoviesProvider";
import MovieDetailsModel from "../Models/Movie Models/MovieDetailsModel";
import MovieService from "../Services/movieService";

const MoviePage = () => {

   
    const { id } = useParams();
    let MenuItems = [
        {
            id:"1Menu",
            Content:"Description"
        }, 
        {
            id:"2Menu",
            Content:"Crew Members"
        }, 
        {
            id:"3Menu",
            Content:"Production Companies"
        }, 
        {
            id:"4Menu",
            Content:"Reviews"
        }, 
        
    ];
    const [MenuIndex, setMenuIndex] = useState("1Menu");
    const [Index, setIndex] = useState(0);
    const { MoviesData, ClickedMovie, setClickedMovie, message } = useContext(MoviesContext);
    const [Images, setImages] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (ClickedMovie.id != null) {
            setImages([
                ClickedMovie.sources.img1,
                ClickedMovie.sources.img2,
                `https://img.youtube.com/vi/${ClickedMovie.sources.video.split('=')[1]}/hqdefault.jpg`
            ]);
            const lastUrlpart = window.location.href.split('/').at(-1);
            if(lastUrlpart == "Reviews")
                setMenuIndex("4Menu");
            if(lastUrlpart.includes('Companies'))
                setMenuIndex("3Menu");
            if(lastUrlpart.includes('Crew'))
                setMenuIndex("2Menu");
           
        }
        if(Object.keys(ClickedMovie).length === 0 || ClickedMovie.id !== id ){
            const fetchData = async () => {
            let loaded = await MovieService.getMovieDetails(id, { message, MoviesData, setClickedMovie });
            if(!loaded)
                setError('Error Fetching Movie');
                    };

            fetchData();
        
        }
    }, [ClickedMovie]);

    let ClassName = {
        Container: "absolute top-0 w-full h-[90%] bg-cover bg-center " + CSS.mainBoxShadow,
        ThumbnailContainer: "absolute top-[85%] left-[50%] translate-x-[-50%] flex gap-8 w-[90%] xl:w-[60%] h-[180px] mx-auto",
        Thumbnail: "w-[30%] h-full rounded-2xl bg-cover bg-center cursor-pointer overflow-hidden " + CSS.mainBoxShadow,
        Menu: "flex flex-col mt-[100vh] mb-[50px] w-full sm:w-[95%] gap-4 pl-0 sm:pl-8",
        MenuItem: "text-[15px] md:text-[20px] lg:text-[30px] font-bold text-center",
        Line: "relative z-1 w-full h-2 rounded-full bg-[#22ebff]",
        DynamicSec: "w-full sm:w-[95%] pl-0 sm:pl-8 mb-[100px]"
    };

    if (error) return <div>Error: {error}</div>;

    return (
        <>
            <div className={ClassName.Container} style={{ backgroundImage: `url(${Images[Index]})` }}>

                {Index === 2 && (
                    <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${ClickedMovie.sources.video.split('=')[1]}`}
                        title="YouTube video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                )}

                <div className={ClassName.ThumbnailContainer}>
                    {
                        Images.map((img, i) => (
                            <div
                                key={i}
                                style={{
                                    backgroundImage: `url(${img})`,
                                    outline: Index === i ? "5px solid #24b1bf" : "none"
                                }}
                                className={ClassName.Thumbnail}
                                onClick={() => setIndex(i)}

                            >
                                {
                                    i === 2 && (
                                        <div className="flex justify-center items-center w-full h-full bg-black/50">
                                            <IoPlayCircleOutline size={100}></IoPlayCircleOutline>
                                        </div>
                                    )
                                }
                            </div>
                        ))
                    }


                </div>
            </div>
            <div className={ClassName.Menu}>
                <div className="flex items-center gap-10">
                    {MenuItems.map((item) => (
                        <div className="flex flex-col gap-4"  key={item.id}>
                            <Link
                                className={ClassName.MenuItem}
                                to={item.Content == "Description" ? `/Movie/${id}` : item.Content}
                                style={{ color: MenuIndex == item.id ? "#22ebff" : "white" }}
                                onClick={() => setMenuIndex(item.id)}
                            >{item.Content}</Link>
                            <div className={ClassName.Line} style={{ visibility: MenuIndex == item.id ? "visible" : "hidden" }}></div>
                        </div>
                    ))}
                </div>
                <div className="relative top-[-20px] w-full h-0.5 rounded-full bg-white/40"></div>
            </div>
            <div className={ClassName.DynamicSec}>
                <Outlet></Outlet>
            </div>
        </>
    );
}

export default MoviePage;
