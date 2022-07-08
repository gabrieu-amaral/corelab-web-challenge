import { IVehicle } from "../../types/Vehicle"
import styles from"./Filter.module.scss"
import { useState } from "react";
import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";
import { postVehicle } from "../../lib/api";

function NewCar(){


    const vehicle: IVehicle = 
        {
          id: 1,
          name: 'First Vehicle',
          description: 'This is a description of first vehicle',
          plate: 'DDT-0012',
          isFavorite: false,
          year: 2018,
          color: '#ff00ff',
          price: 22000,
          createdAt: new Date()
        }
      

        const save = () => {
            postVehicle(form)
        }
        const [form, setForm] = useState(vehicle);
        const handleChange = (e:any) => {
            console.log(e.target.getAttribute("name"))
            switch (e.target.getAttribute("name")){
                case "name":
                    form["name"] = e.target.value
                    break; 

                case "description":
                    form["description"] = e.target.value
                    break; 

                case "color":
                    form["color"] = e.target.value
                    break; 

                case "year":
                    form["year"] = e.target.value
                    break; 

                case "plate":
                    form["plate"] = e.target.value
                    break; 
            }
            
            setForm(() => form);
        }

    return(
        <div className={styles.box}>
            <span>
                <h2>Nome</h2>
                <input type="text" name="name" onChange={handleChange} className={styles.spanB}/>

                <h2>Marca</h2>
                <input type="text" name="description" onChange={handleChange} className={styles.spanB}/>

                <h2>Cor</h2>
                <input type="color" name="color" onChange={handleChange} className={styles.spanB}/>

                <h2>Ano</h2>
                <input type="text" name="year" onChange={handleChange} className={styles.spanB}/>
                
                <h2>Placa</h2>
                <input type="text" name="plate" onChange={handleChange} className={styles.spanB}/>

                <div className={styles.buttonSave}>
                    <button onClick={save} className={styles.buttonB}>Salvar</button>
                </div>
            </span>
        </div>
    )
}

export default NewCar