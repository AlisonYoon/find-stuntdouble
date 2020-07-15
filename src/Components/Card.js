import React from 'react';

function Card(props) {

    return (
          <div className="card-stack">
              <img className="stunt-photo" src={props.imgSrc} alt=""/>
              <p className="stunt-name">{props.name}</p>
          </div>
    );
}

export default Card;