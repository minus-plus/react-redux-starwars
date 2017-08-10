import React, {Component} from 'react';

class FilmDetails extends Component {

    componentDidMount() {
        // after componentDidMount, getPeopleList with film id
        const filmId = this.props.params.id;
        this.props.getPeopleList(filmId);
    }
    render() {
        const {characters} = this.props;
        return (
            <div className="film-details-box">
                <div>
                    Characters:
                </div>
                <br />
                {
                    characters.map((character, key) => {
                        return(
                            <div key={key}>
                                {character.name}
                            </div>
                        )
                    })
                }

            </div>
        )
    }
}

export default FilmDetails;

