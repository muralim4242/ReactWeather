var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getInitialState: function() {
        return {isLoading: false}
    },
    handleSearch: function(location) {
        var that = this;
        this.setState({
          isLoading:true
        });
        openWeatherMap.getMap(location).then(function(temp) {
            that.setState({isLoading:false,location: location, temp: temp});
        }, function(err) {
            that.setState({isLoading:false});
            alert(err);
        });
    },
    render: function() {
        var {isLoading, location, temp} = this.state;
        function renderMessage() {
            if (isLoading) {
                return <h1>Fetching information....</h1>;
            } else if (temp && location) {
                return <WeatherMessage location={location} temp={temp}/>;
            }
        }
        return (
            <div>
                <h1>Weather component</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>
        )
    }
});

module.exports = Weather;
