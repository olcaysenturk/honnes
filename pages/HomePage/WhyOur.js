import React, { Component } from "react";
import { Container, Col } from "reactstrap";

export default class WhyOur extends Component {
  render() {
    return (
      <Container>
        <div className={"title"}>
          <span>NEDEN HONNES?</span>
        </div>
        <div className={"item-box"}>
          <Col xs="12" sm="12" md="4" lg="4">
            <div className={"item animate__animated"}>
              <div className={"icon"}>
                GENİŞ ÜRÜN
                <br />
                YELPAZESİ
              </div>
              <div className={"text"}>
                Güncellenen ve ihtiyaç doğrultusunda 20.000 den fazla ürün
                stoğuyla hizmetinizdeyiz.
              </div>
            </div>
          </Col>
          <Col xs="12" sm="12" md="4" lg="4">
            <div className={"item animate__animated"}>
              <div className={"icon"}>
                HIZLI
                <br />
                TESLİMAT
              </div>
              <div className={"text"}>
                İstanbul içi aynı gün teslimat, Türkiye çapında 2 günde
                teslimatla hizmetinizdeyiz.
              </div>
            </div>
          </Col>
          <Col xs="12" sm="12" md="4" lg="4">
            <div className={"item animate__animated"}>
              <div className={"icon"}>
                KALİTELİ
                <br />
                ÜRÜN
              </div>
              <div className={"text"}>
                Sağlığın önemi, insan yaşamı önceliğimiz. Sağlığın gerektirdiği
                kalitede ürün tedariğiyle hizmetinizdeyiz.
              </div>
            </div>
          </Col>
        </div>
      </Container>
    );
  }
}
