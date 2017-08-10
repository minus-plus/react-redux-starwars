import React, {Component} from 'react';
import Film from '../containers/FilmContainer';

import {Grid, Row, Col, Carousel} from 'react-bootstrap';

class Filmlist extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getFilms();
    }

    render() {
        const {films} = this.props;
        const filmList = films.map((film, index) => {
            return(
                <Col className="film-box" xs={12} sm={6} md={3} key={index}>
                    <Film film={film} />
                </Col>
            )
        });

        return(

            <Grid>
                <Row>
                    {filmList}
                </Row>
            </Grid>
        )
    }

}


export default Filmlist;
