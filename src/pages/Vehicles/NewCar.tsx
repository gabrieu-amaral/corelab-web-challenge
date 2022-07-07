import styles from"./Filter.module.scss"

function NewCar(){


    return(
        <div className={styles.box}>
            <span>
                <h2>Nome</h2>
                <input type="text"  className={styles.spanB}/>

                <h2>Marca</h2>
                <input type="text"  className={styles.spanB}/>

                <h2>Cor</h2>
                <input type="text"  className={styles.spanB}/>

                <h2>Ano</h2>
                <input type="text"  className={styles.spanB}/>
                
                <h2>Placa</h2>
                <input type="text"  className={styles.spanB}/>

                <div className={styles.buttonSave}>
                    <button className={styles.buttonB}>Salvar</button>
                </div>
            </span>
        </div>
    )
}

export default NewCar