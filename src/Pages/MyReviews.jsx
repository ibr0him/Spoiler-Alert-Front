import React, { useContext } from 'react';
import { MoviesContext } from '../Context/MoviesProvider';
import MyReviewComponent from '../Components/MyReviews Components/MyReviewComponent';

const MyReviews = () => {
    const {User} = useContext(MoviesContext);
    let ClassName = {
        Title: "text-[40px] font-bold text-white w-fit",
        Container: "flex flex-col gap-8 my-[100px] px-0 sm:px-[50px]",
        Line: "w-[30px] grow-1 h-1 bg-white rounded-full",
        ReviewsContainer: "flex flex-wrap justify-between items-center gap-y-8"
    };
    return (
        <div className={ClassName.Container}>
            <div className='flex items-center gap-4 md:gap-8'>
                <div className={ClassName.Line}></div>
                <label className={ClassName.Title}>My Reviews</label>
                <div className={ClassName.Line}></div>
            </div>
            <div className={ClassName.ReviewsContainer}>
                {
                    User.reviews.map(r=>(
                        <MyReviewComponent 
                        review={r.review} rating={r.rating} 
                        movieTitle={r.movieTitle} img={r.img} key={r.id}></MyReviewComponent>
                    ))
                }
            </div>

        </div>
    );
}

export default MyReviews;
