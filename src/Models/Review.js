class ReviewModel{
    constructor({id=null,movieId=null,userId=null,review="",rating="",movieTitle="",userTitle="",img=""}={}){
        this.id=`${id}R`;
        this.movieId=movieId;
        this.userId = userId;
        this.rating=rating;
        this.review=review;
        this.movieTitle=movieTitle;
        this.userTitle=userTitle;
        this.img = img;
    }
}
export default ReviewModel;
