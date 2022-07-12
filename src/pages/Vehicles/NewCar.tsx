import { IVehicle } from "../../types/Vehicle"
import styles from"./Filter.module.scss"
import { useState, useEffect } from "react";
import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";
import { postVehicle, editVehicle } from "../../lib/api";
import styled from "styled-components";

interface IForm {
    vehicleUpdated: any;
}

function NewCar(props:IForm){

    const [form, setForm] = useState(props.vehicleUpdated);
    const [name, setName] = useState(props.vehicleUpdated.name)
    const [price, setPrice] = useState(props.vehicleUpdated.price)
    const [color, setColor] = useState(props.vehicleUpdated.color)
    const [year, setYear] = useState(props.vehicleUpdated.year)
    const [description, setDescription] = useState(props.vehicleUpdated.description)
    useEffect(() => {

        if (props.vehicleUpdated) {
            setForm(() => props.vehicleUpdated)
        }
      }, []);
      

        const save = () => {
            const vehicle = {
                name: name,
                price: price,
                color: color,
                year: year,
                description: description,
            }

            if (props.vehicleUpdated.id) {
                editVehicle(vehicle, props.vehicleUpdated.id)
            }else{
                postVehicle(vehicle)
            }
            
        }

        const Container = styled.span`
        display: inline-flex;
        align-items: center;
        width: 150px;
        max-width: 150px;
        border: 0px solid #bfc9d9;
        border-radius: 50px;
      
        input[type="color"] {
          margin-right: 0px;
          -webkit-appearance: none;
          border: none;
          width: auto;
          height: auto;
          cursor: pointer;
          background: none;
          &::-webkit-color-swatch-wrapper {
            padding: 0;
            width: 30px;
            height: 30px;
          }
          &::-webkit-color-swatch {
            border: 0px;
            border-radius: 100px;
            padding: 0;
          }
        }

        `;

    return(
        <form className={styles.box} onSubmit={save}>
            <div className={styles.divBox}>
                <h2>Nome</h2>
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className={styles.spanB} required/>

                <h2>Preço</h2>
                <input type="number" name="price" value={price} onChange={(e) => setPrice(e.target.value)} className={styles.spanB} required/>

                <h2>Cor</h2>
                <Container>
                    <input type="color" name="color" value={color} onChange={(e) => setColor(e.target.value)} className={styles.spanX} required/>
                </Container>

                <h2>Ano</h2>
                <input type="text" name="year" value={year} onChange={(e) => setYear(e.target.value)} className={styles.spanB} required/>
                
                <h2>Descrição</h2>
                <input type="text" name="description" value={description} onChange={(e) => setDescription(e.target.value)} className={styles.spanB} required/>

                <div className={styles.buttonSave}>
                    <button className={styles.buttonB}>Salvar</button>
                </div>
            </div>
        </form>
    )
}

export default NewCar