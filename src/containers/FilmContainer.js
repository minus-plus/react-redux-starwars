import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Film from '../components/Film';
import {setActiveFilm} from '../actions/filmActions';


function mapDispathToProps(dispatch) {
    return bindActionCreators(
        {
            setActiveFilm
        }, dispatch)
}

export default connect(null, mapDispathToProps)(Film);

