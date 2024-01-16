import React from "react";
import "./index.css";

import pgRoxa from "../../assets/imagens/pgroxa.png";
import pgVerde from "../../assets/imagens/pgverde.png";
import pgVermelho from "../../assets/imagens/pgVermelho.png";
import pgAzul from "../../assets/imagens/pgazul.png";

import logoFooter from "../../assets/imagens/logo2.png";
import iconeFace from "../../assets/imagens/facebookicone.png";
import iconeInsta from "../../assets/imagens/instaicone.png";
import iconeEmail from "../../assets/imagens/emailicone.png";

import pgRoxaMobile from "../../assets/imagens/pgroxamobile.png";

export default function SegundaPag() {
  return (
    <>
      <div
        className="container d-none d-lg-block"
        style={{ marginTop: 73, height: 300 }}
      >
        <div className="row">
          <div className="d-flex">
            <div
              className="col-md-3 imgPag2"
              style={{ marginLeft: 140, backgroundImage: `url(${pgRoxa})` }}
            ></div>

            <div
              className="col-md-9 quadradoPag2"
              style={{ background: "#BE9BFE", marginLeft: 16 }}
            >
              <div
                style={{ marginTop: 46, marginLeft: 126 }}
                className="tituloNegritoPag2"
              >
                Páginas roxas:
                <br />{" "}
                <span className="tituloNormalPag2">
                  business intelligence e desenvolvimento de site
                </span>
                <div className="textoPag2" style={{ marginTop: 16 }}>
                  No Dia do Cliente no Brasil, o Nubank apresentou aos seus
                  clientes PJ com contas empresariais uma proposta de
                  desburocratização do acesso ao sistema financeiro, lançando a
                  iniciativa Páginas Roxas para pequenos empreendedores. A UNLTD
                  fez parte desse projeto desenvolvendo a página e trabalhando
                  com business intellibienagence para apresentar de forma clara
                  e fácil os relatórios de acessos da jornada dos usuários
                  dentro da plataforma.
                </div>
              </div>
            </div>
          </div>

          {/*-----------------------------------------------------*/}
          {/*-----------------------------------------------------*/}

          <div style={{ marginTop: 16 }} className="d-flex">
            <div
              className="col-md-9 quadradoPag2"
              style={{ background: "#07AF94", marginLeft: 140 }}
            >
              <div
                style={{ marginTop: 46, marginLeft: 126 }}
                className="tituloNegritoPag2"
              >
                Soluções de Seguro
                <br />{" "}
                <span className="tituloNormalPag2">para plataforma Modal:</span>
                <div className="textoPag2" style={{ marginTop: 16 }}>
                  A UNLTD levou sua expertise para o Banco Modal, uma das
                  maiores instituições de investimento do país, através da
                  criação, do desenvolvimento e da sustentação de diversos
                  produtos financeiros dentro de uma plataforma BaaS whitelabel
                  (Bank as a Service). As premissas envolvem modelagem de
                  produtos, melhores práticas em usabilidade, além de fluxos
                  sintetizados que tem por objetivo melhorar a contratação de
                  serviços.
                </div>
              </div>
            </div>

            <div
              className="col-md-3 imgPag2"
              style={{ marginLeft: 16, backgroundImage: `url(${pgVerde})` }}
            ></div>
          </div>

          {/*-----------------------------------------------------*/}
          {/*-----------------------------------------------------*/}

          <div style={{ marginTop: 16 }} className="d-flex">
            <div
              className="col-md-3 imgPag2"
              style={{ marginLeft: 140, backgroundImage: `url(${pgVermelho})` }}
            ></div>

            <div
              className="col-md-9 quadradoPag2"
              style={{ background: "#FF6671", marginLeft: 16 }}
            >
              <div
                style={{ marginTop: 46, marginLeft: 126 }}
                className="tituloNegritoPag2"
              >
                Alia:
                <br />{" "}
                <span className="tituloNormalPag2">
                  tecnologia de dados como
                  <br />
                  aliados da acessibilidade
                </span>
                <div className="textoPag2" style={{ marginTop: 16 }}>
                  Para tornar as compras de mercados mais acessíveis para
                  pessoas com deficiência visual, a Alia lançou o aplicativo
                  Alia Inclui. Ao acessar o aplicativo e apontar a câmera para o
                  produto, o app identifica e autodescreve o produto e suas
                  características, usando recursos de acessibilidade do celular.
                  A UNLTD desenvolveu o aplicativo e software de gerenciamento
                  que serviu para criar a base de dados que facilita a
                  identificação de produtos em lojas e mercados.
                </div>
              </div>
            </div>
          </div>

          {/*------------------------------------------------------*/}
          {/*------------------------------------------------------*/}

          <div style={{ marginTop: 16 }} className="d-flex">
            <div
              className="col-md-9 quadradoPag2"
              style={{ background: "#4879FF", marginLeft: 140 }}
            >
              <div
                style={{ marginTop: 46, marginLeft: 126 }}
                className="tituloNegritoPag2"
              >
                Desenvolvimento,
                <br />
                tecnologia e criatividade
                <br />
                <span className="tituloNormalPag2">
                  para a campanha Doe Gols
                </span>
                <div className="textoPag2" style={{ marginTop: 16 }}>
                  Desenvolvemos o novo site de Doe Gols, projeto do sportv que,
                  desde 2019, transforma os gols do Brasileirão feminino e
                  masculino em doações de pares de tênis. Além do site,
                  participamos do processo criativo que deu origem à nova
                  comunicação e identidade visual da campanha.
                </div>
              </div>
            </div>

            <div
              className="col-md-3 imgPag2"
              style={{ marginLeft: 16, backgroundImage: `url(${pgAzul})` }}
            ></div>
          </div>
        </div>

        <div
          style={{ marginLeft: 466, marginTop: 89 }}
          className="d-flex rodape"
        >
          <img style={{ marginBottom: 100 }} src={logoFooter} />

          <div style={{ marginTop: 10 }} className="icones">
            <img src={iconeFace} />
            <img style={{ marginLeft: 30 }} src={iconeInsta} />
            <img style={{ marginLeft: 40 }} src={iconeEmail} />
          </div>
        </div>
      </div>

      {/*PÁGINA DOIS RESPONSIVA*/}
      {/*PÁGINA DOIS RESPONSIVA*/}

      <div style={{ width: "100%" }} className="d-lg-none">
        <div className="px-5 d-flex flex-column align-items-center justify-content-center">
          <div
            style={{ marginTop: 160, backgroundColor: "#BE9BFE" }}
            className="retanguloMobile"
          ></div>
          <img
            style={{ position: "absolute", marginBottom: 320 }}
            src={pgRoxaMobile}
          />

          <div
            style={{ position: "absolute", marginTop: 30 }}
            className="tituloPagDoisMobile"
          >
            Páginas roxas:
            <br />
            <span className="tituloPagDoisMobileSpan">
              business intelligence e desenvolvimento de site
            </span>
          </div>

          <div
            style={{ position: "absolute", marginTop: 340 }}
            className="textPagDoisMobile"
          >
            No Dia do Cliente no Brasil, o Nubank apresentou aos seus clientes
            PJ com contas empresariais uma proposta de desburocratização do
            acesso ao sistema financeiro, lançando a iniciativa Páginas Roxas
            para pequenos empreendedores. A UNLTD fez parte desse projeto
            desenvolvendo a página e trabalhando com business intellibienagence
            para apresentar de forma clara e fácil os relatórios de acessos da
            jornada dos usuários dentro da plataforma.
          </div>
        </div>

        <div
          style={{ marginTop: 52, marginBottom: 70 }}
          className="d-flex align-items-center justify-content-center"
        >
          <img className="logoSolucaoMobile" src={logoFooter} />

          <div style={{ marginLeft: 48 }}>
            <img className="iconeMobile" src={iconeFace} />
            <img
              style={{ marginLeft: 16 }}
              className="iconeMobile"
              src={iconeInsta}
            />
            <img
              style={{ marginLeft: 16 }}
              className="iconeMobile"
              src={iconeEmail}
            />
          </div>
        </div>
      </div>
    </>
  );
}
