import React, {Component} from 'react';

class Film extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        // set active film
        this.props.setActiveFilm(this.props.film);
    }

    render() {
        const {film} = this.props;
        const filmImage = "/images/starwars-2.gif";
        return(
            <div onClick={this.handleClick}>

                    <div className="movie-image">
                        <img src={filmImage} />
                    </div>
                    <div>Title: {film.title}</div>
                    <div>Director: {film.director}</div>
                    <div className="producer-text">Producer: {film.producer}</div>

            </div>
        )
    }
}

export default Film;