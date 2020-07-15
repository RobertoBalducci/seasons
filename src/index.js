import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from  './Spinner';


class App extends React.Component {

    state = {latitude: null, errorMessage: ""};

    componentDidMount() {

        const successCallBack = (position) => {
            this.setState({latitude: position.coords.latitude});
        };
        const errorCallBack = (error) => {
            this.setState({errorMessage: error.message});
        }
        console.log('componentDidMount');
        window.navigator.geolocation.getCurrentPosition(successCallBack, errorCallBack);
    }

    componentDidUpdate() {
        console.log('index componentDidUpdate');
    }
    componentWillUnmount() {
        console.log('index componentWillUnmount');
    }

    componentDidCatch(error, errorInfo) {
        console.log('index  componentDidCatch');
        console.log(error, errorInfo);
    }

    render () {

        if (!this.state.latitude && !this.state.errorMessage) {
            return <Spinner message={"Please accept location request"}/>;
        }

        if (!this.state.latitude && this.state.errorMessage) {
            return <div>Error: {this.state.errorMessage}</div>
        }

        return <SeasonDisplay latitude={this.state.latitude}/>;
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));
