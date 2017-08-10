import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Filmlist from '../components/Filmlist';
import {getFilms} from '../actions/filmActions';

function mapStateToProps(state) {
    return {
        films: state.films
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            getFilms
        }, dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Filmlist);