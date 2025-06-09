import ReviewModel from "../Review";
import UserModel from "./User";

class CustomerModel extends UserModel{
    constructor({id=null,name="",password="",email="",isAdmin=false,reviews=[]}={}){
        super({id:id,name:name,password:password,email:email,isAdmin:isAdmin});
        this.reviews=reviews.map((r,i)=> new ReviewModel({
            id:r.id,
            review:r.review,
            rating:r.rating,
            movieTitle:r.movieTitle,
            img:r.lanscapeImage
        })
        );
    }
    addReview(review) {
    //Create Review Model out of the object if not already review model 
    const newReview = review instanceof ReviewModel ? review : new ReviewModel(review);
    this.reviews.push(newReview);
  }
}

export default CustomerModel;

