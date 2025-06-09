class MovieModel{
    constructor({id=null,title="",posterImage="",genres="",overview="",rating="",releaseDate=""}={})
    {
        this.id=id;
        this.title=title;
        this.posterImage=posterImage;
        this.genres= genres;
        this.overview=overview;
        this.rating=rating;
        this.releaseDate=releaseDate;
    };
}
export default MovieModel;
