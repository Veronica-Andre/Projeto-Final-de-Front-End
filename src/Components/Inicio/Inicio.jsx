import Uniao from "../../assets/uniao.png"

import style from './Inicio.module.scss' 

function Inicio(){
    return(
        <section className= {style.I}>
         <div className={style.T}>
             <h1>Projetos Sociais Que Transformam</h1>
             <p>Conectamos sua empresa com projetos sociais impactantes.
            Juntos, criamos mudanças reais na comunidade.</p>
       </div>
        
        <img src={Uniao} alt="Mão simbolizando projetos sociais"/>
        </section>
    )
}
export default Inicio