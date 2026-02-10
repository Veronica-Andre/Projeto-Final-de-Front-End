import Logo from '../../assets/Logo.png'
import linkedIn from '../../assets/linkedIn.png'
import insta from '../../assets/insta.png'
import Zap from '../../assets/zap.png'

import styles from './Footer.module.scss'

function Footer(){
    return(
        <section className={styles.containerFooter}>
        
        <div className={styles.logoName}>

         <img src={Logo} alt="Logo da Connect." />
        <h2>Connect</h2>

        </div>    
       
       <section className={styles.texto}>

        <p>© 2026 Vai na Web & Empower. Todos os direitos reservados.</p> 
        <p>Projeto destinado exclusivamente a fins educativos.</p>

       </section>
         
        <section className={styles.imagens}>
        <img src={Zap}  alt="Logo do WhatsApp."  />
        <img src={insta} alt="Logo do Instagram." />
        <img src={linkedIn} alt="Logo do LinkedIn." />
        </section>
        </section>
    )
}
export default Footer