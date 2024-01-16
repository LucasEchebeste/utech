import React from "react";
import "./index.css";

import bgVerde from "../../assets/imagens/bgVerde.png";
import celularMao from "../../assets/imagens/celularMao.png";

import celularMaoMobile from "../../assets/imagens/celularMaoMobile.png";

export default function Footer() {
  return (
    <>
      <div className="container d-none d-lg-block" style={{ marginTop: 94 }}>
        <div
          className="bgFooter"
          style={{ backgroundImage: `url(${bgVerde})` }}
        >
          <div className="d-flex">
            <div
              style={{ marginTop: 102, marginLeft: 335 }}
              className="tituloFooterNegrito"
            >
              Tech como deve ser:
              <br />{" "}
              <span className="tituloFooterNormal">
                com qualidade e agilidade
              </span>
              <div style={{ marginTop: 42 }} className="textoFooter">
                Em uma cultura cada vez mais data driven, coletar dados é apenas
                o primeiro passo. O que nos diferencia é a interpretação e
                aplicação estratégica das informações que os dados mostram, com
                um fluxo de trabalho em equipe que garante entregas de qualidade
                e dentro do prazo.
              </div>
              <button style={{ marginTop: 47 }} className="botaoFooter">
                Comece agora
              </button>
              <img className="celularMaoFooter" src={celularMao} />
            </div>
          </div>
        </div>
      </div>

      {/*FOOTER RESPONSIVO*/}
      {/*FOOTER RESPONSIVO*/}

      <div
        style={{ backgroundColor: "#55FF8E", width: "100%" }}
        className="d-lg-none"
      >
        <div className="px-5 d-flex flex-column align-items-center justify-content-center">
          <div style={{ marginTop: 50 }} className="primeiroTituloMobileFooter">
            Tech como deve ser:
            <br />
            <span className="segundoTituloMobileFooter">
              com qualidade e agilidade
            </span>
          </div>

          <div style={{ marginTop: 32 }} className="textFooterMobile">
            Em uma cultura cada vez mais data driven, coletar dados é apenas o
            primeiro passo. O que nos diferencia é a interpretação e aplicação
            estratégica das informações que os dados mostram, com um fluxo de
            trabalho em equipe que garante entregas de qualidade e dentro do
            prazo.
          </div>

          <button style={{ marginTop: 30 }} className="btnFooterMobile">
            <span className="textBtnFooterMobile">Comece agora</span>
          </button>

          <img style={{ marginTop: 46 }} src={celularMaoMobile} />
        </div>
      </div>
    </>
  );
}
