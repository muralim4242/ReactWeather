var React = require('react');
var WeatherMessage = ({location, temp}) => {
    return (
        <h3 className="text-center">The temperature in {location} is {temp} cc</h3>
    );
}

module.exports = WeatherMessage;
