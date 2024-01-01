import React from 'react';
import style from '../../assets/css/card.module.css'

const Card = ({ index ,info }) => {
  return (
    <div className={style.card} key={index}>
      <div className={style.cardContent}>
        <div className={style.textSection}>
          <p className={style.textHead}>{info.name}</p>
        </div>
        <div className={style.textSection}>
          <p>{info.address}</p>
        </div>
        <div className={style.textSection}>
          <p>{info.location}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
