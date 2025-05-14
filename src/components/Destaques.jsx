import camisa from "../assets/camisa.png";
import tenis from "../assets/tenis.png";
import fone from "../assets/fone.png";
import iconShirt from "../assets/icon-shirt.svg";
import iconPants from "../assets/icon-pants.svg";
import iconCap from "../assets/icon-hat.svg";
import iconTenis from "../assets/icon-shoes.svg"
import iconHeadphone from "../assets/icon-headphone.svg";


const Destaques = () => {
    return ( <section id="destaques">
            <h3>Coleções em Destaque</h3>
            <div className="colecoes">
                <div>
                    <div className="conteudo">
                        <h6>30%off</h6>
                        <h2>Novo Drop<br/>Supreme</h2>
                        <a href="" className="btn inverso">comprar</a>
                    </div>
                    <img src= {camisa} alt=""/>
                </div>

                <div>
                    <div className="conteudo">
                        <h6>30%off</h6>
                        <h2>Coleção<br/>Adidas</h2>
                        <a href="" className="btn inverso">comprar</a>
                    </div>
                    <img src= {tenis} alt=""/>
                </div>

                <div>
                    <div className="conteudo">
                        <h6>30%off</h6>
                        <h2>Novo<br/>Beats Bass</h2>
                        <a href="" className="btn inverso">comprar</a>
                    </div>
                    <img src= {fone} alt=""/>
                </div>
            </div>
            
            <h3>Departamentos</h3>            
            <div className="departamentos">
                <div>
                    <div className="icon">
                        <img src={iconShirt} alt=""/>
                    </div>
                    Camisetas
                </div>
                <div>
                    <div className="icon">
                        <img src={iconPants} alt=""/>
                    </div>
                    Calça
                </div>
                <div>
                    <div className="icon">
                        <img src={iconCap} alt=""/>
                    </div>
                    Boné
                </div>
                <div>
                    <div className="icon">
                        <img src={iconHeadphone} alt=""/>
                    </div>
                    HeadPhone
                </div>
                <div>
                    <div className="icon">
                        <img src={iconTenis} alt=""/>
                    </div>
                    Tênis
                </div>


            </div>



        </section>)}
 
export default Destaques;