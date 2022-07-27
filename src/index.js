import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from "./reportWebVitals";
import SeasonDisplay from './SeasonDisplay';
import './SeasonDisplay.css';
import Spinner from './Spinner';
import './style/App.css';


class App extends React.Component {

    // constructor(props) {
    //     super(props);

    //     //this is the only time we do direct assignment
    //     this.state = {lat: null, errorMessage: '' };
    // }

    state = {lat:null, errorMessage: ''};

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude}),
            err => this.setState({ errorMessage: err.message })
        )
    }

    renderContent() {
        if(this.state.errorMessage && !this.state.lat) {
            return <SeasonDisplay err={this.state.errorMessage} />
        }

        if(!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat} />
        }

        return <Spinner message="Please Accept location request" />
    }

    render() {

        return(
            <div className="boreder red">
                {this.renderContent()}
            </div>
        )
      
       
    }
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



reportWebVitals();