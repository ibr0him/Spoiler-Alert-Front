import ReviewModel from "../Review";
import CompanyModel from "./CompanyModel";
import MovieCastModel from "./MovieCast";
import MovieModel from "./MovieModel";
import MovieSourcesModel from "./MovieSources";

class MovieDetailsModel extends MovieModel{
    constructor({BasicData={} ,cast=[],reviews=[],sources={},productionCompanies=[]}={}){
        const {id,title,posterImage,genres,overview,rating,releaseDate} = BasicData;
        super(
            {
            id:id,
            title:title,
            posterImage:posterImage,
            genres:genres,
            overview:overview,
            rating:rating,
            releaseDate:releaseDate
        });
        this.cast = cast.map((c,i)=> new MovieCastModel({ 
            id:`${i}C`,
            name:c.name,
            imgURL:c.imgURL
        }));
        this.reviews = reviews.map((r,i)=> new ReviewModel({
            id:r.id,
            review:r.review,
            rating:r.rating,
            movieTitle:r.movieTitle,
            userTitle:r.userName
        }));
        this.productionCompanies = productionCompanies.map((Com,i)=> new CompanyModel({
            id:`${i}Com`,
            name:Com.name,
            imgURL:Com.imgURL
        }));
        this.sources = sources instanceof MovieSourcesModel ? sources : new MovieSourcesModel(sources);
    };
    
}
export default MovieDetailsModel;