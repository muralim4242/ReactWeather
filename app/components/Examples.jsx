var React = require('react');
var {Link} = require('react-router');
var Examples = () => {
    return (
        <div>
            <h1 className="text-center page-title">Examples</h1>
            <p>Here are a few location try of</p>
            <ol>
                <li>
                    <Link to='/?location=banglore'>Banglore</Link>
                </li>
                <li>
                    <Link to='/?location=shimoga'>shimoga</Link>
                </li>
            </ol>
        </div>

    )
}

module.exports = Examples;
