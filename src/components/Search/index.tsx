import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useState } from "react";
import Filter from "../../pages/Vehicles/Filter";
import './Search.module.scss';
import styles from "./Search.module.scss"

interface ISearch {
  placeholder: string;
  onChange: any;
  handleSearch: Function;
}



const Search = (props: ISearch) => {

  const [search, setSearch] = useState<string>("");
  const [filter,setFilter] = useState (true)
  const show = () => {
    setFilter(!filter)
  }
  const handleChangeSearch = (ev:any) => {
    setSearch(() => ev.target.value);
      props.onChange(ev.target.value)
  }
  const sendFilter = (filter:any) => {
    props.handleSearch(filter)
  }

  return (
    <>

      <div className={styles.searchComponent}>
        <FontAwesomeIcon icon={ (faMagnifyingGlass)} className={styles.svgA}/>
        <input type="text" placeholder={props.placeholder} className={styles.inputText}
          onChange={handleChangeSearch}/>
        <img src="./image1.png" alt="" onClick={show} className={styles.imgSettings}/>
      </div>

      
      { filter ? "": ( <Filter search={sendFilter} /> )}
    
      
    </>
  );
};

export default Search;

