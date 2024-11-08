import React from 'react';
import img from '../../assets/img/women.png'
import style from './styles.module.css'

const Card = () => {
  return (

    <div className={style.container}>
      <div className={style.maskimg}>
      <img
        src={img}
        alt="Fashion"
        className={style.img}
      />
      </div>
      <div className={style.titleBox }>
        <h1 className={style.title}>Make</h1>
        <h2 className={style.title}>your Own</h2>
        <h3 className={style.title}> <span className={style.spanTitle}> Style</span> unique ...</h3>
      </div>
    </div>
   
  
  );
};

export default Card;
