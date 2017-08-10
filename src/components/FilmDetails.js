import React, {Component} from 'react';

class FilmDetails extends Component {

    componentDidMount() {
        this.props.getPeopleList();
    }
    render() {
        console.log(this.props);
        return (
            <div>
                film details
            </div>
        )
    }
}

export default FilmDetails;

