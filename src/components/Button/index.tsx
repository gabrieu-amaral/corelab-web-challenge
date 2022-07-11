import { useState } from "react";
import NewCar from "../../pages/Vehicles/NewCar"
import styles from "../../index.module.scss"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

interface IButton {
  onClick: () => void;
  text: string;
  openNewCar: boolean;
}


const Button = (props: IButton) => {
  const showNewCar = () => {
    props.onClick()
  }


  return (
  <>
    <button onClick={showNewCar} className={styles.buttonA + " " + (!props.openNewCar ? styles.activeX : "")}>{!props.openNewCar ? <FontAwesomeIcon icon={faXmark} className={styles.svgX}/> : props.text}</button>
  </>

  )
  
};

export default Button;
