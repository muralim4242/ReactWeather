var React = require('react');
var WeatherMessage = ({location, temp}) => {
    return (
        <h1>The temperature in {location} is {temp} cc</h1>
    );
}

module.exports = WeatherMessage;
