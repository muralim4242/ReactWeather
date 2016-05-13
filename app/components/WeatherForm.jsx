var React=require('react');

var WeatherForm = React.createClass({
  onSubmitForm:function(e)
  {
    e.preventDefault();
    var location=this.refs.name.value;
    if(location.length>0)
    {
      this.refs.name.value='';
      this.props.onSearch(location);
    }

  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.onSubmitForm}>
          <input type="text" ref="name"></input>
          <button>Get Weather</button>
        </form>
      </div>
    );
  }

});

module.exports = WeatherForm;
