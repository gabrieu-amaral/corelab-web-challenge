import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useState } from "react";
import Filter from "../../pages/Vehicles/Filter";
import './Search.module.scss';
import styles from "./Search.module.scss"

interface ISearch {
  placeholder: string;
  value: string;
  onChange: () => void;
}


const Search = (props: ISearch) => {

  const [filter,setFilter] = useState (true)
  const show = () => {
    setFilter(!filter)
  }

  return (
    <>

      <div className={styles.searchComponent}>
        <FontAwesomeIcon icon={ (faMagnifyingGlass)} className={styles.svgA}/>
        <input type="text" placeholder={props.placeholder} value={props.value} onChange={() => {}}/>
        <img src="./image1.png" alt="" onClick={show} className={styles.imgSettings}/>
      </div>

      
      { filter ? "": ( <Filter /> )}
    
      
    </>
  );
};

export default Search;

