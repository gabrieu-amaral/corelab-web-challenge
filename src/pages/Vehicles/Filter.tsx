import { useState } from "react"
import styles from"./Filter.module.scss"

interface ISearch {
    search: Function
  }

function Filter(props:ISearch){

    const [name, setName] = useState("")
    const [color, setColor] = useState("")
    const [year, setYear] = useState("")

    const repasseFilter = () => {
        props.search({
            name:name,
            year:year,
        })
    } 


    return(
        <div className={styles.box}>
            <span>
                <h2>Nome</h2>
                <input type="text" value={name} onChange={(e) => setName(e.target.value) } className={styles.spanB}/>

                <h2>Cor</h2>
                <input type="text"  className={styles.spanB}/>

                <h2>Ano</h2>
                <input type="text"  value={year} onChange={(e) => setYear(e.target.value) } className={styles.spanB}/>

                <div className={styles.flexLine}>
                    <h2 className={styles.h2A}>Preço mín.</h2>
                    <input type="text"  className={styles.spanC}/>
                    
                    <h2 className={styles.h2B}>Preço máx.</h2>
                    <input type="text"  className={styles.spanD}/>
                </div>

                <div className={styles.buttonSave}>
                    <button className={styles.buttonB} onClick={repasseFilter}>Salvar</button>
                </div>
            </span>
        </div>
    )
}

export default Filter