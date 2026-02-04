import {useState} from 'react'

import aulaTecno from '../../assets/aulaTecno.png'
import Escola from '../../assets/escola.png'
import Esporte from '../../assets/esporte.png'
import Familia from '../../assets/familia.png'
import Jovem from '../../assets/jovem.png'
import Recicla from '../../assets/recicla.png'

import style from './AcoesDaConnect.module.scss'

function AcoesDaConnect(){

    const [acoesDaConnect, setAcoeDaConnect] = useState( [

        {
            id: 1,
            imagem: Recicla,
            nome:'Mutirão de Reciclagem',
            texto:'Coletar materiais recicláveis e orientar sobre descarte cosciente.'

        },

        {
            id: 2,
            imagem: aulaTecno,
            nome: 'Aulas de Tecnologia',
            texto:'Ensinar noções básicas de informática, internet segura e programação. Preparar jovens para o mercado de trabalho digital.'
        },

        {
            id: 3,
            imagem: Esporte,
            nome: 'Esporte e Inclusão',
            texto: 'Organizar treinos e jogos que incentivem a participação de todos. Promover disciplina, saúde e trabalho em equipe entre jovens.'
        },

        {
            id: 4,
            imagem: Familia,
            nome: 'Instituto Grande Família',
            texto: 'Contribua com alimentos não perecíveis e ajude famílias em situação de vulnerabilidade.'
        },

        {
            id: 5,
            imagem: Escola,
            nome: 'Projeto Futuro na Escola',
            texto: 'Doe livros, cadernos, lápis, mochilas e canetas para ajudar jovens a continuarem seus estudos com mais estrutura.'
        },

        {
            id: 6,
            imagem: Jovem,
            nome: 'Instituto Conecta Jovem',
            texto: 'Doe computadores usados, tablets ou celulares em bom estado para permitir que jovens tenham acesso ao mundo digital.'
        }

    ]
    )

    return(
        
        <main>
            <section className={style.textos}>

             <h2>Ações da Connect</h2>
            <p>junte-se a quem acredita na mudança. Apoie, participe e transforme vidas através de ações sociais que geram impacto real nas comunidades.</p>
       
            </section>
       
             <section className={style.segsection}>
                {AcoesDaConnect.map((item) => (
                    <article key={item.id}className={style.cards}>
                        <img src={item.imagem} alt="" />
                        <h3>{item.nome}</h3>
                        <p>{item.texto}</p>
                    </article>
                ))}

             </section>
 
           
           

       
        </main>
    )
}
export default AcoesDaConnect