import Sapato from "../assets/sapato.png";
import Detalhe from "../assets/detalhe.png";

const SectionBanner = () => {
    return (
        <> 
        <section id="banner">
            <div className="conteudo">
                <h6>Melhores ofertas personalizadas</h6>
                <h2>Queima de<br />estoque Nike 🔥</h2>
                <p>Consequat culpa exercitation mollit nisi excepteur do<br />do tempor laboris eiusmod irure consectetur.
                </p>
                <a href="#" className="btn">Ver Ofertas</a>
            </div>
            <img src={Sapato} alt="Sapato Nike" className="tenis" />
            <img src={Detalhe} alt="Detalhe decorativo" className="detalhe" />
        </section>
        </>
     );
};

export default SectionBanner;
