import "./footer.scss"

function Footer(){


    return(
        <footer>
            <img src="./carro.png" alt="" className="imgCarro"/>
            <div className="insideFooter">
                <a href="https://www.linkedin.com/in/gabriel-amaral-da-silva-9705a917a/">Feito com carinho por Gabriel Amaral</a>
                <div id="copyright-text" className="copyText">
                    &copy; Topo da praça corporations. 2022. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer