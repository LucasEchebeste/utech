import React from "react";
import "./index.css";

import bgHome from "../../assets/imagens/bgHome.png";
import logoHome from "../../assets/imagens/logo.png";
import logoSolucao from "../../assets/imagens/logoSolucao.png";

import bgHomeMobile from "../../assets/imagens/bgHomeMobile.png";

export default function Home() {
  return (
    <>
      <div className="container d-none d-lg-block">
        <div className="imgHome" style={{ backgroundImage: `url(${bgHome})` }}>
          <div className="row">
            <div className="col-md-6">
              <img style={{ marginTop: 78, marginLeft: 140 }} src={logoHome} />
              <div
                style={{ marginTop: 95, marginLeft: 140 }}
                className="textoHome"
              >
                Dominamos a cultura data driven para impulsionar a transformação
                digital.
              </div>

              <button
                style={{ marginTop: 85, marginLeft: 140 }}
                className="btn btn-primary"
              >
                Marque uma conversa
              </button>
            </div>

            <div style={{ marginTop: 78 }} className="col-md-6">
              <span className="itemMenu">QUEM SOMOS</span>
              <span className="itemMenu">SOLUÇÕES</span>
              <span className="itemMenu">DIFERENCIAL</span>
              <span className="itemMenu">CASES</span>
            </div>
          </div>
        </div>

        {/*---ÁREA DE SOLUÇÃO---*/}
        {/*---ÁREA DE SOLUÇÃO---*/}
        {/*---ÁREA DE SOLUÇÃO---*/}

        <div>
          <img style={{ position: "absolute", top: 630 }} src={logoSolucao} />

          <div
            style={{ marginTop: 8, marginLeft: 220 }}
            className="textoSolucao"
          >
            Somos a extensão tecnológica do grupo UNLTD. Com uma equipe
            multidisciplinar, aplicamos metodologias cientificamente comprovadas
            e ferramentas ágeis nas áreas de desenvolvimento Web e Mobile,
            Martech e Business Intelligence.
          </div>

          <div
            style={{ marginTop: 35, marginLeft: 220 }}
            className="textoSolucao2"
          >
            Conheça nossas soluções
          </div>
        </div>
      </div>

      {/*---HOME RESPONSIVA---*/}
      {/*---HOME RESPONSIVA---*/}
      {/*---HOME RESPONSIVA---*/}

      <div style={{ width: "100%" }} className="d-lg-none">
        <div>
          <img width={"100%"} src={bgHomeMobile} />

          <div className="px-5 d-flex flex-column align-items-center justify-content-center">
            <div className="textoHomeMobile ">
              Dominamos a cultura data driven para impulsionar a transformação
              digital.
            </div>
            <button style={{ marginTop: 41 }} className="btnHomeMobile">
              <span className="textbtnHomeMobile">Marque uma conversa</span>
            </button>

            <div style={{ marginTop: 41 }} className="textHeaderMobile">
              Somos a extensão tecnológica do grupo UNLTD. Com uma equipe
              multidisciplinar, aplicamos metodologias cientificamente
              comprovadas e ferramentas ágeis nas áreas de desenvolvimento Web e
              Mobile, Martech e Business Intelligence.
            </div>

            <div
              style={{
                marginTop: 41,
                borderBottom: "1px solid #55FF8E",
                width: "100%",
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}
