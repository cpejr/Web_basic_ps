import React from 'react';

// import { Container } from './styles';

function ServiceCard(props) {
  return (
    <div className="service-card">
      <div className="img-container">
        <img src={props.src} alt={props.text} />
      </div>
      <div className="service-name">
        <h3>
          {props.text}
        </h3>
      </div>
    </div>
  );
}

export default ServiceCard;