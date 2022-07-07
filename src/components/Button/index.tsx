import { useState } from "react";
import NewCar from "../../pages/Vehicles/NewCar"
import styles from "../../index.module.scss"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

interface IButton {
  onClick: () => void;
  text: string;
}


const Button = (props: IButton) => {
  

  const [openNewCar, setOpenNewCar] = useState(true)
  const showNewCar = () => {
    setOpenNewCar(!openNewCar);
    props.onClick()
  }


  return (
  <>
    <button onClick={showNewCar} className={styles.buttonA + " " + (!openNewCar ? styles.activeX : "")}>{!openNewCar ? <FontAwesomeIcon icon={faXmark} className={styles.svgX}/> : props.text}</button>

    { openNewCar ? "": ( <NewCar /> )}
  </>

  )
  
};

export default Button;
