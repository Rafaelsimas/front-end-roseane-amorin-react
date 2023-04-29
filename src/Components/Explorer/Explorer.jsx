import { Link } from 'react-router-dom'
import LogoSite from '../../assets/img/Cláudia Alves.png'
import ImageBanner from '../../assets/img/Rosane-removebg-preview.png'
export default function Explorer(){
    function alerta(teste){
        alert(teste)
    }
    return(
        <>
        <div className="toggleResponsiveMobile">
        <header id="mobile">
            <nav id="boxMobile">
                <img src={LogoSite} alt="" />
                <ion-icon onClick={() => alerta('Em breve daremos suporte')} name="menu-outline"></ion-icon>

            </nav>
        </header>
    </div>

    <div className="toggleResponsiveDesktop">
        <header id="desktop">
            <nav id="boxDesktop">
                <img src="./img/Cláudia Alves.png" alt="" />
                <ul>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                </ul>

            </nav>
        </header>
    </div>

    <section id="hero">
        <div className="flex-hero">
            <div className="box-text">
                <h1>O cuidado que você merece feito por quem ama o que faz</h1>
                <p>Conheça o meu trabalho e venha conhecer nosso espaço</p>
                <Link to="/dashboard">
                    <button>Veja mais</button>
                </Link>
            </div>
            <div className="box-image">
                <img src={ImageBanner} alt="Imagem da Proprietária" />
            </div>
        </div>
    </section>
        </>
    )
}