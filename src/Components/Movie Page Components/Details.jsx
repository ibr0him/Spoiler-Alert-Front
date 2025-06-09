import { useContext,useEffect,useState } from "react";
import { BsCalendarDateFill } from "react-icons/bs";
import { MoviesContext } from "../../Context/MoviesProvider";


const Details = () => {

    let { ClickedMovie } = useContext(MoviesContext);
    const [Genres, setGenres] = useState([]);
    useEffect(() => {
        if (ClickedMovie.id != null) {
            setGenres(ClickedMovie.genres.split(','));
        }
    }
        , [ClickedMovie]);

    let ClassName = {
        Container: "flex flex-col gap-4",
        Title: "text-[60px] font-bold text-white",
        Overview: "w-full text-[20px]",
        RatingContainer: "flex justify-center items-center w-20 h-20 bg-white text-3xl text-black rounded-full font-bold ",
        SubTitle: "text-[30px] text-white font-bold",
        genreLabel: "text-[15px] text-white font-bold bg-black/30 rounded-lg p-4"
    };
    return (
        <>
            <div className={ClassName.Container}>
                <label className={ClassName.Title}>{ClickedMovie.title}</label>
                <p className={ClassName.Overview}>{ClickedMovie.overview}</p>
                <div className="flex justify-between mt-[10px] items-center flex-wrap gap-y-8">
                    <div className="flex gap-4 items-center">
                        <label className={ClassName.SubTitle}>Genres:</label>
                        {Genres.map((item,i) => (
                            <label key={`${i}${item}`}  className={ClassName.genreLabel}>{item}</label>
                        ))}
                    </div>
                    <div className={ClassName.RatingContainer}>{ClickedMovie.rating}</div>
                </div>
                <div className="flex items-center gap-8 mt-[20px] sm:mt-0">
                    <BsCalendarDateFill size={50}></BsCalendarDateFill>
                    <label className="text-[25px] text-white font-bold">{ClickedMovie.releaseDate}</label>
                </div>

            </div>
        </>
    );
}

export default Details;
