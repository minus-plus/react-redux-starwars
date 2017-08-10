import React, {Component} from 'react';
import {Link} from 'react-router';

class Film extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        // set active film
        // this.props.setActiveFilm(this.props.film);
        console.log(this.props);
    }

    render() {
        const {film} = this.props;
        const filmImage = "/images/starwars-2.gif";
        const arr = film.url.split('/');
        const filmId = arr[arr.length - 2];

        return(
            <div onClick={this.handleClick}>
                <Link className="link" to={`/film-details/${filmId}`}>
                    <div className="movie-image">
                        <img src={filmImage} />
                    </div>
                    <div>Title: {film.title}</div>
                    <div>Director: {film.director}</div>
                    <div className="producer-text">Producer: {film.producer}</div>
                </Link>
            </div>
        )
    }
}

export default Film;