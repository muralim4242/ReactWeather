var React = require('react');
var About = () => {
    return (
      <div>
          <h1 className="text-center page-title">About</h1>
          <p>This is a weather application built on react, this is complete react web developer courese </p>
            <p>Here is some of the tool used</p>
            <ul>
              <li>
                  <a href="">React</a>-  This was js frame used
              </li>
              <li>
                  <a href="">Open weather map</a>- Weather api
              </li>
            </ul>
      </div>

    )
}

module.exports = About;
