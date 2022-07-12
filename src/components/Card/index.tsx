import React, { ReactNode, useState } from "react";
import Lottie from "react-lottie";
import styles from "./Card.module.scss";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { deleteVehicle, favoriteVehicle } from "../../lib/api";
import { IVehicle } from "../../types/Vehicle";
import animationData from "./heart.json"

interface ICard {
  color: string;
  title: string;
  children: ReactNode;
  update: Function;
  edit: Function;
  vehicle: IVehicle;
}


const Card = (props: ICard) => {
  const [favoriteActive, setFavoriteActive] = useState(false)

  const clickHandler = () => {
    deleteVehicle(props.vehicle.id)
      props.update()    
    }
  const updateHandler = () => {
    favoriteVehicle(props.vehicle.id)
      props.update()
      setFavoriteActive (!props.vehicle.isFavorite) 
      setAnimet({
        ...animet, isStopped: !animet.isStopped,
      })
    }
  const editHandler = () => {
      props.edit(props.vehicle)
    }
  
  const [animet, setAnimet] = useState ({
    isStopped: true, isPaused: false
  })

  const defaultOptions = {
    loop: false,
    autoplay: false, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
    
  return (
    <div className={styles.Card} style={{borderColor:props.color}}>
      <div className={styles.divButtons}>
        <button className={styles.buttonsMini} onClick={editHandler}><FontAwesomeIcon icon={faPenToSquare} className={styles.miniIcons}/></button>
        <button className={styles.buttonsMini} onClick={clickHandler}><FontAwesomeIcon icon={faXmark} className={styles.miniIcons}/></button>
        
        <button  className={styles.buttonsMini}
        onClick={updateHandler}>

            <div className={styles.animationHeart}
            >
              <Lottie options={defaultOptions}
              height={170}
              width={170}
              
              isStopped={animet.isStopped}
              isPaused={animet.isPaused}/>
            </div>
             
          <FontAwesomeIcon
          icon={faHeart}
          className={styles.loveIcon}
          style={favoriteActive ? {color: "#f33952"} : {}}
          
          /></button>
      </div>
 
      <h2>{props.title}</h2>

      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

export default Card;
