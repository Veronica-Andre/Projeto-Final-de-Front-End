import ImgPerfil from '../../assets/ImgPerfil.jpeg'
import styles from './Perfil.module.scss'
function Perfil(){
    return(
        <section className={styles.containerTelaPerfil}>
            <article>
                <img src={ImgPerfil} alt="Foto do Voluntário" />
                <div className={styles.cardInfo}>
                    <h2>Verônica André S.S.</h2>
                    <h3>Voluntária Ativa</h3>
                    <p className={styles.sobreMim}>Apaixonada por fazer a diferença na comunidade. Acredito que pequenas ações podem transformar vidas e estou sempre em busca de novas oportunidades para ajudar.</p>
                    <address>
                        Magé, RJ 

                        veronicaandre.dss@gmail.com
                        
                        membro desde Janeiro de 2022.
                    </address>
                    <ul className={styles.listaInteresses}>
                        <li>Educação</li>
                        <li>Meio Ambiente</li>
                        <li>Assistência Social</li>
                        <li>Design</li>
                    </ul>
                </div>
            </article>
       
        </section>
    )
}
export default Perfil