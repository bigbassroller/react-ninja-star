import React from 'react';

// Using "Stateless Functional Components"
export default function(props) {
  return (
    <div className="user-profile">
      <div className="details">
        <p>Name: {props.name}</p>
        <p>id: {props.id}</p>
      </div>
    </div>
  );
}
