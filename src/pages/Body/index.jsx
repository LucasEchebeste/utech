import React from "react";
import "./index.css";

import celular from "../../assets/imagens/celular.png";
import globo from "../../assets/imagens/globo.png";
import megafone from "../../assets/imagens/megafone.png";
import folha from "../../assets/imagens/folha.png";
import grafico from "../../assets/imagens/grafico.png";
import seta from "../../assets/imagens/seta.png";

export default function Body() {
  return (
    <>
      <div className="container d-none d-lg-block" style={{ marginTop: 82 }}>
        <div className="container2">
          <div className="row">
            <div
              className="col-md-6 quadrado"
              style={{ borderRight: "1px solid #55FF8E" }}
            >
              <div className="d-flex" style={{ marginTop: 45, marginLeft: 80 }}>
                <img className="imgQuadrado" src={celular} />
                <div className="tituloQuadrado">
                  Desenvolvimento{" "}
                  <span className="tituloNegrito">de Aplicativos</span>
                </div>
              </div>

              <div
                className="textoQuadrado"
                style={{ marginTop: 28, marginLeft: 78, marginBottom: 50 }}
              >
                Lance aplicativos funcionais, amigáveis e personalizados de
                acordo com os objetivos da sua marca. Nós cuidamos de todo o
                processo, desde o projeto, criação e fase de testes até o
                lançamento.
              </div>
            </div>

            {/*--------------------------------------------*/}

            <div className="col-md-6 quadrado">
              <div>
                <div
                  style={{ marginTop: 45, marginLeft: 80 }}
                  className="d-flex"
                >
                  <img className="imgQuadrado" src={globo} />
                  <div className="tituloQuadrado">
                    Desenvolvimento <span className="tituloNegrito">Sites</span>
                  </div>
                </div>

                <div
                  className="textoQuadrado"
                  style={{ marginTop: 28, marginLeft: 78 }}
                >
                  Posicione sua marca com uma presença digital bem estabelecida.
                  Nosso desenvolvimento Web e Mobile envolve design,
                  codificação, criação de conteúdo e implantação de um site
                  responsivo, amigável ao usuário e alinhado com os objetivos da
                  sua marca.
                </div>
              </div>
            </div>

            <div style={{ borderBottom: "1px solid #55FF8E" }}></div>

            {/*--------------------------------------------*/}
            {/*--------------------------------------------*/}

            <div
              className="col-md-6 quadrado"
              style={{ borderRight: "1px solid #55FF8E" }}
            >
              <div className="d-flex" style={{ marginLeft: 80 }}>
                <div className="d-flex" style={{ marginTop: 45 }}>
                  <img className="imgQuadrado" src={megafone} />
                  <div style={{ marginTop: 9 }} className="tituloQuadrado">
                    <span className="tituloNegrito">MarTech</span>
                  </div>
                </div>
              </div>

              <div
                className="textoQuadrado"
                style={{ marginTop: 28, marginLeft: 78 }}
              >
                Transforme a performance da sua marca com a Tecnologia de
                Marketing. Desde ferramentas de automação, plataformas de dados
                do cliente e sistemas de email marketing, conte com nossas
                soluções tecnológicas para melhorar e automatizar tarefas de
                marketing.
              </div>
            </div>

            {/*--------------------------------------------*/}

            <div className="col-md-6 quadrado">
              <div>
                <div
                  style={{ marginTop: 45, marginLeft: 80 }}
                  className="d-flex"
                >
                  <img className="imgQuadrado" src={folha} />
                  <div className="tituloQuadrado">
                    Business
                    <br />
                    <span className="tituloNegrito">Intelligence</span>
                  </div>
                </div>

                <div
                  className="textoQuadrado"
                  style={{ marginTop: 28, marginLeft: 78, marginBottom: 50 }}
                >
                  Receba insights sobre o comportamento de públicos, desempenho
                  de sites e outras métricas-chave para tomar decisões no seu
                  negócio de forma analítica e bem informada, a partir de
                  ferramentas como Google Analytics (GA) e Google Tag Manager
                  (GTM),
                </div>
              </div>
            </div>

            {/*--------------------------------------------*/}

            <div style={{ borderBottom: "1px solid #55FF8E" }}></div>

            {/*--------------------------------------------*/}
            {/*--------------------------------------------*/}

            <div
              className="col-md-6 quadrado"
              style={{ borderRight: "1px solid #55FF8E" }}
            >
              <div className="d-flex" style={{ marginLeft: 80 }}>
                <div className="d-flex" style={{ marginTop: 45 }}>
                  <img className="imgQuadrado" src={grafico} />
                  <div style={{ marginTop: 9 }} className="tituloQuadrado">
                    <span className="tituloNegrito">SEO</span>
                  </div>
                </div>
              </div>

              <div
                className="textoQuadrado"
                style={{ marginTop: 28, marginLeft: 78, marginBottom: 50 }}
              >
                Otimize a performance e tráfego de seus sites com a utilização
                assertiva de estratégias SEO, desde a pesquisa de
                palavras-chave, otimização on-page, construção de links e demais
                estratégias.
              </div>
            </div>

            {/*--------------------------------------------*/}

            <div className="col-md-6 quadrado">
              <div>
                <div
                  style={{ marginTop: 91, marginLeft: 258 }}
                  className="d-flex"
                >
                  <img className="imgQuadrado" src={seta} />
                  <div style={{ marginLeft: 24 }} className="tituloQuadrado">
                    <span className="tituloNegrito">
                      Fele com nossos especialistas
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ borderBottom: "1px solid transparent" }}></div>
          </div>
        </div>
      </div>

      {/*--BODY RESPONSIVO--*/}
      {/*--BODY RESPONSIVO--*/}
      {/*--BODY RESPONSIVO--*/}

      <div style={{ width: "100%" }} className="d-lg-none">
        <div className="px-5 d-flex flex-column align-items-center justify-content-center">
          <div style={{ marginTop: 41 }} className="tituloBodyMobile">
            Conheça nossas soluções
          </div>

          <div style={{ marginTop: 43 }} className="d-flex">
            <img src={celular} />
            <div
              style={{ marginLeft: 18, marginTop: 5 }}
              className="tituloImgBodyMobile"
            >
              Desenvolvimento
              <br />
              <span className="tituloNegritoImgBodyMobile">de Aplicativos</span>
            </div>
          </div>

          <div
            style={{ marginTop: 24, marginBottom: 49 }}
            className="textBodyMobile"
          >
            Lance aplicativos funcionais, amigáveis e personalizados de acordo
            com os objetivos da sua marca. Nós cuidamos de todo o processo,
            desde o projeto, criação e fase de testes até o lançamento.
          </div>
        </div>
      </div>
    </>
  );
}
