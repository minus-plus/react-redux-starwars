import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {getFilmById} from '../actions/filmActions';
import {getPeopleList} from '../actions/peopleActions';
import FilmDetails from '../components/FilmDetails';

function mapStateToProps (state) {
    return {
        film: state.activeFilm
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            getPeopleList
        },dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FilmDetails);
