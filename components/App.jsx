import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const propTypes = {
  children: PropTypes.element.isRequired,
  routes: PropTypes.array.isRequired,
};

function App({ children, routes }) {
  function generateMapMenu() {
    let path = '';

    function nextPath(route) {
      path += (
        (path.slice(-1) === '/' ? '' : '/') +
        (route.path === '/' ? '' : route.path)
      );
      return path;
    }

    return (
      routes.filter(route => route.mapMenuTitle)
        .map((route, index, array) => (
          <li key={index}>
            <Link className="nav-button" to={nextPath(route)}>{route.mapMenuTitle}</Link>
            {(index + 1) < array.length && ' / '}
          </li>
        ))
    );
  }

  return (
    <div>
      <header className="header">
        <div className="logo">
          Dave Dubroff
        </div>
        <nav className="nav">
          <ul>
            {generateMapMenu()}
          </ul>
        </nav>
      </header>
      {children}
      <div style={{ color: '#A0A0A0', fontSize: '14px', marginTop: '50px' }}>
        <a href="http://www.rafaelpedicini.com" className="extended-link">
          Code and concept by <span className="link-style">Rafael Pedicini</span>
        </a>
      </div>
    </div>
  );
}

App.propTypes = propTypes;

export default App;
