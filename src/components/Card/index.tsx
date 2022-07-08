import React, { ReactNode } from "react";
import styles from "./Card.module.scss";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

interface ICard {
  color: string;
  title: string;
  children: ReactNode;
}

const clickHandler = () => {
  return (event: React.MouseEvent) => {
    console.log("clickou em")
    event.preventDefault();
  }}

const Card = (props: ICard) => {
  return (
    <div className={styles.Card} style={{borderColor:props.color}}>
      <div className={styles.divButtons}>
        <button className={styles.buttonsMini} onClick={clickHandler}><FontAwesomeIcon icon={faPenToSquare} className={styles.miniIcons}/></button>
        <button className={styles.buttonsMini}><FontAwesomeIcon icon={faXmark} className={styles.miniIcons}/></button>
        <button className={styles.buttonsMini}><FontAwesomeIcon icon={faHeart} className={styles.loveIcon}/></button>
      </div>

      <h2>{props.title}</h2>

      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

export default Card;
