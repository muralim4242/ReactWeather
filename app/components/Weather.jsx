var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');
var ErrorModal = require('ErrorModal');

var Weather = React.createClass({
    getInitialState: function() {
        return {isLoading: false}
    },
    handleSearch: function(location) {
        var that = this;
        this.setState({isLoading: true, errorMessage: undefined});
        openWeatherMap.getMap(location).then(function(temp) {

            that.setState({isLoading: false, location: location, temp: temp});
        }, function(err) {

            that.setState({isLoading: false, errorMessage: err.message});

        });
    },
    render: function() {
        var {isLoading, location, temp, errorMessage} = this.state;
        function renderMessage() {
            if (isLoading) {
                return <h3 className="text-center">Fetching information....</h3>;
            } else if (temp && location) {
                return <WeatherMessage location={location} temp={temp}/>;
            }
        }

        function errorModal() {

            if (typeof errorMessage === 'string') {
                return <ErrorModal error={errorMessage}/>;
            }
        }
        return (
            <div>
                <h1 className="page-title text-center">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/> {renderMessage()}
                {errorModal()}
            </div>
        )
    }
});

module.exports = Weather;
