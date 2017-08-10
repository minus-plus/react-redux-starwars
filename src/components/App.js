import React, {Component}from 'react';
import Filmlist from '../containers/FilmlistContainers';

class App extends Component {

    render() {
        return (
            <div>
                <div>
                    <a href="/film-details/1">jfiejwifw</a>
                </div>
                {this.props.children}
            </div>
        )
    }
}

export default App;