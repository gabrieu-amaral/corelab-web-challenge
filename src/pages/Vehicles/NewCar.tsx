import { IVehicle } from "../../types/Vehicle"
import styles from"./Filter.module.scss"
import { useState, useEffect } from "react";
import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";
import { postVehicle, editVehicle } from "../../lib/api";

interface IForm {
    vehicleUpdated: any;
}

function NewCar(props:IForm){

    useEffect(() => {

        if (props.vehicleUpdated) {
            setForm(() => props.vehicleUpdated)
        }
      }, []);


    const vehicle: IVehicle = 
        {
          id: 1,
          name: '',
          description: '',
          plate: '',
          isFavorite: false,
          year: 0,
          color: '',
          price: 0,
          createdAt: new Date()
        }
      

        const save = () => {
            if (props.vehicleUpdated) {
                editVehicle(form, form.id)
            }else{
                postVehicle(form)
            }
            
        }
      
        const [form, setForm] = useState(vehicle);

        const handleChange = (e:any) => {
            console.log(e.target.getAttribute("name"))
            switch (e.target.getAttribute("name")){
                case "name":
                    form["name"] = e.target.value
                    break; 

                case "price":
                    form["price"] = e.target.value
                    break; 

                case "color":
                    form["color"] = e.target.value
                    break; 

                case "year":
                    form["year"] = e.target.value
                    break; 

                case "description":
                    form["description"] = e.target.value
                    break; 
            }
            
            setForm(() => form);
        }

    return(
        <form className={styles.box} onSubmit={save}>
            <span>
                <h2>Nome</h2>
                <input type="text" name="name" placeholder={form.name} onChange={handleChange} className={styles.spanB} required/>

                <h2>Preço</h2>
                <input type="number" name="price" value={form.price} onChange={handleChange} className={styles.spanB}required/>

                <h2>Cor</h2>
                <input type="color" name="color" value={form.color} onChange={handleChange} className={styles.spanB} required/>

                <h2>Ano</h2>
                <input type="text" name="year" value={form.year} onChange={handleChange} className={styles.spanB} required/>
                
                <h2>Descrição</h2>
                <input type="text" name="description" value={form.description} onChange={handleChange} className={styles.spanB}required/>

                <div className={styles.buttonSave}>
                    <button className={styles.buttonB}>Salvar</button>
                </div>
            </span>
        </form>
    )
}

export default NewCar