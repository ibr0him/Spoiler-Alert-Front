import { useContext, useState, useEffect, useRef } from "react";
import UserReview from "../Cast Components/UserReview";
import { MoviesContext } from "../../Context/MoviesProvider";
import userService from "../../Services/userService";
import ReviewModel from "../../Models/Review";

const Reviews = () => {

    let { ClickedMovie, setClickedMovie, User, setUser, message, IsAdmin, Signin } = useContext(MoviesContext);
    const [UsersReviews, setUsersReviews] = useState([]);
    const [Btn, setBtn] = useState("Add Review");
    const [CurrentReview, setCurrentReview] = useState(new ReviewModel({}));

    useEffect(() => {
        if (ClickedMovie.id != null) {
            setUsersReviews(ClickedMovie.reviews);
            if (Signin) {
                let temp = userService.isUserReviwed({ ClickedMovie, User });
                if (temp !== false) {
                    setBtn("Modify Review");
                    setCurrentReview({ ...temp });
                }
            }
        }
    }, [ClickedMovie]);

    let AddReviewBtn = async () => {

        if (!Signin) // Guest Not User
        {
            message.showMessage("Please Login First To Add Review");
            return;
        }
        if (IsAdmin) {
            message.showMessage("Admin Can't Review Movie , Only Add One");
            return;
        }
        if (Btn == "Add Review")
            await userService.addReview({ User, setUser, ClickedMovie, setClickedMovie, CurrentReview, setCurrentReview, message });

        if (Btn == "Modify Review") {

            let i = ClickedMovie.reviews.findIndex(r => r.id === CurrentReview.id);
            if (i !== -1) {
                ClickedMovie.reviews[i] = {
                    ...ClickedMovie.reviews[i],
                    review: CurrentReview.review,
                    rating: CurrentReview.rating
                };
            }
            setClickedMovie({...ClickedMovie});

            i = User.reviews.findIndex(r => r.id === CurrentReview.id);
            if (i !== -1) {
                User.reviews[i] = {
                    ...User.reviews[i],
                    review: CurrentReview.review,
                    rating: CurrentReview.rating
                };
            }
            setUser({...User});

            await userService.UpdateReview({CurrentReview, message });
        }

    }

    let ClassName = {
        Container: "flex flex-col gap-15",
        ReviewsContainer: "flex flex-col gap-8",
        AddReviewContainer: "flex flex-col gap-4 px-8 py-4 w-full lg:w-[50%] h-[400px] bg-black/70 rounded-xl self-center",
        TField: "px-4 py-4 w-full outline-none bg-black/15 rounded-sm border-2 border-[#24b1bf]",
        LogBtn: "bg-[#24b1bf] rounded-md text-white font-bold text-xl lg:text-3xl w-full cursor-pointer h-[70px]"
    };

    if (UsersReviews.length != 0)
        return (
            <div className={ClassName.Container}>
                <div className={ClassName.ReviewsContainer}>
                    {UsersReviews.map((item) => (
                        <UserReview key={item.id} userTitle={item.userTitle} rating={item.rating} review={item.review}></UserReview>
                    ))}
                </div>
                <div className={ClassName.AddReviewContainer}>
                    <input className={ClassName.TField} type="text" placeholder="Rating"
                        value={CurrentReview.rating} onChange={(e) => setCurrentReview({ ...CurrentReview, rating: e.target.value })} />

                    <textarea className={ClassName.TField} style={{ flexGrow: "2" }}
                        placeholder="Tell Us Your Opinion" value={CurrentReview.review}
                        onChange={(e) => setCurrentReview({ ...CurrentReview, review: e.target.value })}></textarea>

                    <button className={ClassName.LogBtn} onClick={AddReviewBtn}>{Btn}</button>
                </div>

            </div>
        );
}

export default Reviews;
