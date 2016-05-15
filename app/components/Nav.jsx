var React = require("react");
var {Link} = require("react-router");

var Nav = React.createClass({
  onSearch:function(e)
  {
      e.preventDefault();
      alert("Searching...");
  },
    render: function() {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="dropdown menu" data-dropdown-menu>
                        <li className="menu-text">React Weather App</li>
                        <li>
                              <Link to='/'>Get Weather</Link>
                        </li>
                        <li>
                              <Link to='/about'>About</Link>
                        </li>
                        <li>
                              <Link to='/examples'>Examples</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <ul className="menu">
                        <li>
                            <input type="search" placeholder="Enter city name for finding temperature"/></li>
                            <li>
                                <button type="button" onClick={this.onSearch} className="button">Search</button>
                            </li>
                        </ul>
                    </div>
                </div>
                );
              }
            });

module.exports = Nav;
