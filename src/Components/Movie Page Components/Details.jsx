import { BsCalendarDateFill} from "react-icons/bs";

const Details = () => {
    let ClassName = {
        Container: "flex flex-col gap-4",
        Title: "text-[60px] font-bold text-white",
        Overview: "w-full text-[20px]",
        RatingContainer:"flex justify-center items-center w-20 h-20 bg-white text-3xl text-black rounded-full font-bold ",
        SubTitle:"text-[30px] text-white font-bold",
        genreLabel:"text-[15px] text-white font-bold bg-black/30 rounded-lg p-4"
    };
    let genres =["Familly","Comedy","Science Fiction"];
    return (
        <>
            <div className={ClassName.Container}>
                <label className={ClassName.Title}>Venom</label>
                <p className={ClassName.Overview}>The wildly funny and touching story of a lonely Hawaiian girl and the fugitive alien who helps to mend her broken family.</p>
                <div className="flex justify-between mt-[10px] items-center flex-wrap gap-y-8">
                    <div className="flex gap-4 items-center">
                        <label className={ClassName.SubTitle}>Genres:</label>
                        {genres.map((item)=>(
                            <label className={ClassName.genreLabel}>{item}</label>
                        ))}
                    </div>
                     <div className={ClassName.RatingContainer}>7.2</div>
                </div>
                <div className="flex items-center gap-8 mt-[20px] sm:mt-0">
                    <BsCalendarDateFill size={50}></BsCalendarDateFill>
                    <label className="text-[25px] text-white font-bold">2025-10-25</label>    
                </div>
               
            </div>
        </>
    );
}

export default Details;
