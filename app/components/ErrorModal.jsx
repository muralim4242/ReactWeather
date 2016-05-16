var React = require("react");

var ErrorModal = React.createClass({
    propTypes: {
        title: React.PropTypes.string,
        error: React.PropTypes.string.isRequired
    },
    getDefaultProps: function() {
        return {title: 'Error'}
    },
    componentDidMount: function() {
        var modal = new Foundation.Reveal($('#error-modal'));
        modal.open();
    },
    render: function() {
        var {title, error} = this.props;

        return (
            <div className="reveal tiny text-center" id="error-modal" data-reveal="" data-close-on-click="true" data-animation-in="spin-in" data-animation-out="spin-out">
                <h2>{title}</h2>
                <p>{error}</p>
                <p>
                    <button className="button hollow" data-close="">Okey</button>
                </p>
            </div>
        );
    }
})

module.exports = ErrorModal;
