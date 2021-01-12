import React, { Component } from "react";
import { Container, Col, Media } from "reactstrap";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <Container>
            <div className={"item-box"}>

           
          <Col xs={"12"} sm={"12"} md={"12"} lg={"3"}>
            <div className={"logo"}>
              <Media object src={"/static/cdn/images/logo.png"} width={160} alt="Logo" />
            </div>
          </Col>
          <Col xs={"12"} sm={"12"} md={"12"} lg={"3"}>
            <ul className={"footer-menu"}>
              <li className="item">
                <a href="/">Anasayfa</a>
              </li>
              <li className="item">
                <a href="/hakkimizda">Kurumsal</a>
              </li>
              <li className="item">
                <a href="/markalar">Markalar</a>
              </li>
              <li className="item">
                <a href="/kariyer">Kariyer</a>
              </li>
              <li className="item">
                <a href="/iletisim">İletişim</a>
              </li>
            </ul>
          </Col>
          <Col className={"adress"} xs={"12"} sm={"12"} md={"12"} lg={"3"}>
          Yassıören Mah. Ağaçkakan Sok. No:15/A<br></br>
          Arnavutköy / İstanbul / Türkiye<br></br>
          </Col>
          <Col className={"footerSocial"} xs={"12"} sm={"12"} md={"12"} lg={"3"}>
            <a className={"numberMail"} href={"tel:02626588959"}>0262 658 89 59 </a>
            <a className={"numberMail"} href={"tel:02626588040"}>0262 658 80 40</a>
            <a className={"numberMail"} href={"mailto:info@honnes.com"}>info@honnes.com</a>
            <ul>
                <li>
                    <a href={"https://www.facebook.com/Honnessaglik-263248774083229/"} className={"fb"}>&nbsp;</a>
                </li>
                <li>
                    <a href={"https://twitter.com/honnessaglik"} className={"tw"}>&nbsp;</a>
                </li>
                <li>
                    <a href={"https://www.instagram.com/honnessaglik/"} className={"ins"}>&nbsp;</a>
                </li>
            </ul>
          </Col>
          </div>
        </Container>
      </footer>
      
    );
  }
}
