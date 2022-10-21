import React from "react";
import ImagemLocalizacao from '../assets/imagens/local.png'
import ImagemTelefone from '../assets/imagens/telefone.png'
import ImagemEmail from '../assets/imagens/email.png'
import ImagemFacebook from '../assets/imagens/fb.png'
import ImagemIG from '../assets/imagens/ig.png'
import ImagemTT from '../assets/imagens/tt.png'

function secaoContato(){
    return(
        <header className="container-contato">
            <div className="limitar-secao">
                <h2 id="contato">Fale conosco</h2>
                <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>
                <div className="cards-contato">
                    <div className="cardMenor-contato">
                        <h3>Contato</h3>
                        <div className="contato-contato">
                            <img className="imagemContato" src={ImagemLocalizacao} alt=''></img>
                            <p>Nova Iguaçu, RJ</p>
                        </div>
                        <div className="contato-contato">
                            <img className="imagemContato" src={ImagemTelefone} alt=''></img>
                            <p>(21) 9999-9999</p>
                        </div>
                        <div className="contato-contato">
                            <img className="imagemContato" src={ImagemEmail} alt=''></img>
                            <p>contato@oticavida.com</p>
                        </div>
                    </div>
                    <div className="cardMenor-contato">
                        <h3>Nossas Redes Sociais</h3>
                        <div className="contato-contato">
                            <img className="imagemContato" src={ImagemFacebook} alt=''></img>
                            <p>/OticaVida</p>
                        </div>
                        <div className="contato-contato">
                            <img className="imagemContato" src={ImagemIG} alt=''></img>
                            <p>@oticavidarj</p>
                        </div>
                        <div className="contato-contato">
                            <img className="imagemContato" src={ImagemTT} alt=''></img>
                            <p>@oticavidarj</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default secaoContato;