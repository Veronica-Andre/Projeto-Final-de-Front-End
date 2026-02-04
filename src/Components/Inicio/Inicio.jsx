import Uniao from "../../assets/uniao.png"

import style from './Inicio.module.scss' 

function Inicio(){
    return(
        <section className= {style.I}>
         <div className={style.T}>
             <h2>Projetos Sociais Que Transformam</h2>
             <p>Conectamos sua empresa com projetos sociais impactantes.
            Juntos, criamos mudanças reais na comunidade.
             </p>
       </div>
        
        <img src={Uniao} alt="Imagem de mãos segurando bonecos de papel em círculo com um globo terrestre no centro." />
        </section>
    )
}
export default Inicio