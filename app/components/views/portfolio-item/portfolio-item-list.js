import React from 'react';
import { Link } from 'react-router';

// Using "Stateless Functional Components"
export default function(props) {
  return (
    <div className="data-list">

      {props.portfolioItems.map(portfolioItem => {

        return (
          <div key={portfolioItem.id} className="data-list-item">
            <div className="details">
              <Link to={'/portfolio-items/' + portfolioItem.id}>{portfolioItem.name}</Link>
            </div>
            <div className="controls">
              <button onClick={props.deletePortfolioItem.bind(null, portfolioItem.id)} className="delete">Delete</button>
            </div>
          </div>
        );

      })}

    </div>
  );
}
