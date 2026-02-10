import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

// Import dos componentes

import Inicio from '../Inicio/Inicio'
import AcoesDaConnect from '../AcoesDaConnect/AcoesDaConnect'
import QuemSomos from '../QuemSomos/QuemSomos'
import Perfil from '../Perfil/Perfil'

//Importar Imagens
import Logo from '../../assets/Logo.png'
import imgPerfil from '../../assets/ImgPerfil.jpeg'

import style from './NavBar.module.scss'

function NavBar(){
   return(
        <BrowserRouter>
            <nav className={style.navBar}>
                <Link to='/'>
                <img className={style.logo} src={Logo} alt="Logo do Projeto" />
                </Link>
                <ul>
                    <li><Link to='/'>Início</Link></li>
                   <li><Link to='/acoesDaConnect'>Ações da Connect</Link></li>
                    <li><Link to='/quemSomos'>Quem Somos</Link></li>
                </ul>
               <Link to='/perfil'>
               <img className={style.imgPerfil} src={imgPerfil} alt='Foto de Perfil'/>
               </Link>
            </nav>

           <Routes>

            <Route path='/' element={<Inicio/>}/>
            <Route path='/acoesDaConnect' element={<AcoesDaConnect/>}/>
            <Route path='/quemSomos' element={<QuemSomos/>}/>
            <Route path='/perfil' element={<Perfil/>}/>

           </Routes>

        </BrowserRouter>
    )
    
}
export default NavBar