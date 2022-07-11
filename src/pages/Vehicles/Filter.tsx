import styles from"./Filter.module.scss"

function Filter(){


    return(
        <div className={styles.box}>
            <span>
                <h2>Nome</h2>
                <input type="text"  className={styles.spanB}/>

                <h2>Cor</h2>
                <input type="text"  className={styles.spanB}/>

                <h2>Ano</h2>
                <input type="text"  className={styles.spanB}/>

                <div className={styles.flexLine}>
                    <h2 className={styles.h2A}>Preço mín.</h2>
                    <input type="text"  className={styles.spanC}/>
                    
                    <h2 className={styles.h2B}>Preço máx.</h2>
                    <input type="text"  className={styles.spanD}/>
                </div>

                <div className={styles.buttonSave}>
                    <button className={styles.buttonB}>Salvar</button>
                </div>
            </span>
        </div>
    )
}

export default Filter