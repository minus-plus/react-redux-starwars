import React, {Component}from 'react';
import Menu from './Menu';
import '../styles/App.css'
class App extends Component {

    render() {
        return (
            <div className="app">
                <div className="app-header">

                    <div className="app-menu">
                        <a  href="/">Home</a>
                    </div>
                </div>

                {this.props.children}
            </div>
        )
    }
}

export default App;