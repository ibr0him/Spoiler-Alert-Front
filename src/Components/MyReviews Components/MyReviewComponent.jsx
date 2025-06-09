import { FaStar } from "react-icons/fa";
import CSS from "../../Styles/CustomCss.module.css"

const MyReviewComponent = ({ review, rating, movieTitle, img }) => {
    let ClassName = {
        Title: "text-[30px] sm:text-[40px] font-bold text-white",
        Container: "h-[400px] w-full xl:w-[49%] bg-cover bg-center p-0 md:p-8 rounded-xl "+CSS.mainBoxShadow,
        Overlay: "w-full h-full bg-black/40 flex flex-col p-8 rounded-xl gap-4 overflow-hidden justify-center",
        VerLine: "h-[100%] w-1 rounded-full bg-white",
        overview: "text-[20px] sm:text-[30px] text-white"
    }
    return (
        <>
            <div className={ClassName.Container} style={{ backgroundImage: `url(${img})` }}>
                <div className={ClassName.Overlay}>
                    <label className={ClassName.Title}>{movieTitle}</label>
                    <div className="ml-8 flex gap-6 items-center">
                        <div className={ClassName.VerLine}></div>
                        <div className="flex flex-col gap-2">
                            <p className={ClassName.overview}>{review}</p>
                            <div className="flex gap-3 items-center">
                                <FaStar size={30} color="#22ebff"></FaStar>
                                <label className="text-[25px] font-bold text-white">{rating}</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MyReviewComponent;
