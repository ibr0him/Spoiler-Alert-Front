import axios from "axios";

import AdminModel from "../Models/User Models/Admin";
import CustomerModel from "../Models/User Models/Customer";
import ReviewModel from "../Models/Review";

const apiBase = import.meta.env.VITE_API_BASE;



const userService = {

    addUser: async (userData, contextValues) => {
        const { id, ...NoIdUser } = userData;
        const { message } = contextValues;
        try {
            const Res = await axios.post(`${apiBase}/api/users/register`, NoIdUser);
            message.showMessage("Welcome To Our Familly 👋 , Now You Can Login");
            return true;
        }
        catch (err) {
            message.showMessage(err.response ? err.response.data : err.message);
            return false;
        };
    },


    LoginUser: async (userData, contextValues) => {
        const { Email, Password } = userData;
        const { SetSignin, setIsAdmin, setUser, User, message } = contextValues;

        try {
            const Res = await axios.post(`${apiBase}/api/users/login`, { Email: Email, Password: Password });
            message.showMessage('Logged In Successfully');
            SetSignin(true);
            if (Res.data.isAdmin) {
                setIsAdmin(true);
                setUser(new AdminModel(Res.data));
            }
            else {
                setIsAdmin(false);
                setUser(new CustomerModel(Res.data));
            }
            return true;

        }
        catch (err) {
            message.showMessage(err.response ? err.response.data : err.message);
            return false;
        };
    },

    isUserReviwed: (contextValues) => {
        const { ClickedMovie, User } = contextValues;
        let match = User.reviews.find((movie) => movie.movieTitle === ClickedMovie.title);

        if (match === undefined)
            return false;

        return match;
    },

    addReview: async (contextValues) => {

        const { User, setUser, ClickedMovie, setClickedMovie, CurrentReview, setCurrentReview, message } = contextValues;
        let newReviewDB = {
            review: CurrentReview.review,
            rating: CurrentReview.rating,
            movieId: ClickedMovie.id.slice(0, -1),
            userId: User.id.slice(0, -1),
        };
        let newReviewClient = new ReviewModel({
            movieTitle: ClickedMovie.title,
            userTitle: User.name,
            img: ClickedMovie.sources.img1,
            review: CurrentReview.review,
            rating: CurrentReview.rating
        })

        // Add To Local Data
        ClickedMovie.reviews.push(new ReviewModel({ ...newReviewClient, id: ClickedMovie.reviews.length }));
        User.reviews.push(new ReviewModel({ ...newReviewClient, id: User.reviews.length }));
        setCurrentReview(new ReviewModel({ ...newReviewClient, id: User.reviews.length - 1 }));
        setClickedMovie({ ...ClickedMovie });
        setUser(User);

        // Add To Database
        try {
            const Res = await axios.post(`${apiBase}/api/reviews`, newReviewDB);
            message.showMessage("Review Added Successfully");
            ClickedMovie.reviews[ClickedMovie.reviews.length - 1].id = `${Res.data.id}R`;
            User.reviews[User.reviews.length - 1].id = `${Res.data.id}R`;
            CurrentReview.id = `${Res.data.id}R`;
            setCurrentReview({ ...CurrentReview });
            setUser(User);
            setClickedMovie({ ...ClickedMovie });

            return true;
        }
        catch (err) {
            message.showMessage(err.response ? err.response.data : err.message);
            return false;
        };
    },
    UpdateReview: async (contextValues) => {
        const { CurrentReview, message } = contextValues;
        const id = CurrentReview.id.slice(0, -1);
        try {
            await axios.put(`${apiBase}/api/reviews/${id}`, { review: CurrentReview.review , rating: CurrentReview.rating });
            message.showMessage("Review Updated Successfully");
            return true;
        }
        catch (err) {
            message.showMessage(err.response ? err.response.data : err.message);
            return false;
        };
    }


}
export default userService;