import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {latitude: null, errorMessage: ""};
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({latitude: position.coords.latitude});
            },
            (err) => {
                this.setState({errorMessage: err.message});
            }
        );
    }
    render () {

        if (this.state.errorMessage && !this.state.latitude) {
            return <div>Error: {this.state.errorMessage}</div>;
        }
        if (!this.state.errorMessage && this.state.latitude) {
            return <div>Location: {this.state.latitude}<br /></div>;
        }
        return <div>Loading...<br /></div>;
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
