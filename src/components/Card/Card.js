import React from 'react';
import './Card_Style.css';

const Card = ({ src, title }) => {
  return (
    <a
      className='card animate__animated animate__zoomIn'
      href={src}
      target='_blank'
      rel='noreferrer'
    >
      <img src={src} alt={title} />
      <p>{title}</p>
    </a>
  );
};

export default Card;
