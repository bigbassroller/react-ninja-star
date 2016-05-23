import React from 'react';
import { Link } from 'react-router';

// Using "Stateless Functional Components"
export default function(props) {
  return (
    <div className="app">
      <header className="site-header">
        <nav className="navbar navbar-inverse">
          <div className="container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <Link className="navbar-brand" to="/" activeClassName="active">React Ninja <i className="fa fa-star"></i></Link>
            </div>
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav pull-right">
                <li><Link to="/users" activeClassName="active">Users</Link></li>
                <li><Link to="/widgets" activeClassName="active">Widgets</Link></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main className="container theme-showcase" role="main">
        <div className="jumbotron">
          {props.children}
        </div>
      </main>
    </div>
    );
}
