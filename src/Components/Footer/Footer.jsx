import Logo from '../../assets/Logo.png'
import linkedIn from '../../assets/linkedIn.png'
import insta from '../../assets/insta.png'
import Zap from '../../assets/zap.png'

import styles from './Footer.module.scss'

function Footer(){
    return(
      <footer>
        
        <div className={styles.logoName}>

         <img src={Logo} alt="Logo da Connect." />
        <h2>Connect</h2>

        </div>    
       
            <p>
        © 2026 Vai na Web & Empower. Todos os direitos reservados. Projeto destinado exclusivamente a fins educativos.
       </p>
                
        <nav className={styles.imagens}>
        <img src={Zap}  alt="Logo do WhatsApp."  />
        <img src={insta} alt="Logo do Instagram." />
        <img src={linkedIn} alt="Logo do LinkedIn." />
        </nav>
        </footer>
    )
}
export default Footer