import { PiUserBold } from "react-icons/pi";
import { FaStar } from "react-icons/fa";
import CSS from "../../Styles/CustomCss.module.css"

const UserReview = ({ userTitle, review, rating }) => {

    let ClassName = {
        Container: "flex gap-2 sm:gap-8 items-center",
        Circle: "w-[50px] h-[50px] rounded-full bg-black/70 flex justify-center items-center",
        Line: "w-full h-1 bg-white rounded-full",
        ReviewContainer: "flex flex-col gap-4 bg-black/50 rounded-lg px-8 py-4 "+CSS.ReviewBody,
        RatingContainer: "flex gap-3 items-center",
        Title: "text-[25px] text-white w-fit",
        SubTitle: "text-[20px] text-white"
    };

    return (
        <>
            <div className={ClassName.Container}>
                <div className={ClassName.Circle}>
                    <PiUserBold size={30}></PiUserBold>
                </div>
                <div className={ClassName.ReviewContainer}>
                    <div className="flex flex-col gap-2 w-fit">
                        <label className={ClassName.Title}>{userTitle}</label>
                        <div className={ClassName.Line}></div>
                    </div>
                    <p className={ClassName.SubTitle}>{review}</p>
                    <div className={ClassName.RatingContainer}>
                        <FaStar size={30} color="#22ebff"></FaStar>
                        <label className="text-[20px] text-white font-bold">{rating}</label>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserReview;
