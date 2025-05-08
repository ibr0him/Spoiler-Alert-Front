import React, { Component } from 'react';
import '../Styles/MoviesStyles.css';

class APIMovie extends Component {
    constructor(props) {
        super(props);
        this.Path = "https://image.tmdb.org/t/p/w500";
    }
    render() {
        const { uData } = this.props;

        return (
            <div id="MovieContainer">
                <div id='ImageContainer'>
                    <img src={`${this.Path}${uData.poster_path}`} alt={uData.original_title} />
                </div>
                <label>{uData.original_title}</label>
                <label style={{ fontWeight: "lighter", opacity: "0.6" }}>{uData.release_date}</label>
                <div id='Rating'>{String(uData.vote_average).substring(0, 3)}</div>
            </div>
        );
    }
}

export default APIMovie;
