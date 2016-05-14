var axios = require('axois');
const OPEN_WEATHER_GET_URI = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=086ba6c522ce6ce6a92a915301b3b532';

module.exports = {
    getMap: function(location) {
        var encodedQueryString = encodeURIComponent(location);
        var requestURI = `${OPEN_WEATHER_GET_URI}q=${encodedQueryString}`;

        axios.get(requestURI).then(function(res) {
          if(res.data.message && res.data.cod)
          {
            throw new Error(res.data.message);
          }
          else {
            return res.data.main.temp;
          }
        },function(res){
          throw new Error(res.data.message);
        })
    }
}
