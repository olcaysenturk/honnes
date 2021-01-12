import React, { Component } from "react";
import { Container, Col, Row } from "reactstrap";

function SellingPoints() {
  return (
    <div>
      <Container>
        <div className={"title"}>
          <span>SATIŞ NOKTALARI</span>
        </div>
        <Row>
            <Col className={"item"} lg={2} md={4} sm={6} xs={6}>
              <img src={"/static/cdn/images/flag/1.png"} />
              <h3>ALMANYA</h3>
            </Col>
            <Col className={"item"} lg={2} md={4} sm={6} xs={6}>
              <img src={"/static/cdn/images/flag/2.png"} />
              <h3>NORVEÇ</h3>
            </Col>
            <Col className={"item"} lg={2} md={4} sm={6} xs={6}>
              <img src={"/static/cdn/images/flag/3.png"} />
              <h3>HIRVATİSTAN</h3>
            </Col>
            <Col className={"item"} lg={2} md={4} sm={6} xs={6}>
              <img src={"/static/cdn/images/flag/4.png"} />
              <h3>GANA</h3>
            </Col>
            <Col className={"item"} lg={2} md={4} sm={6} xs={6}>
              <img src={"/static/cdn/images/flag/5.png"} />
              <h3>NİJERYA</h3>
            </Col>
            <Col className={"item"} lg={2} md={4} sm={6} xs={6}>
              <img src={"/static/cdn/images/flag/6.png"} />
              <h3>IRAK</h3>
            </Col>
            <Col className={"item hidden"} lg={2} md={4} sm={6} xs={6}>
              <img src={"/static/cdn/images/flag/7.png"} />
              <h3>ÜRDÜN</h3>
            </Col>
            <Col className={"item hidden"} lg={2} md={4} sm={6} xs={6}>
              <img src={"/static/cdn/images/flag/8.png"} />
              <h3>BAE</h3>
            </Col>
            <Col className={"item hidden"} lg={2} md={4} sm={6} xs={6}>
              <img src={"/static/cdn/images/flag/9.png"} />
              <h3>VİETNAM</h3>
            </Col>
            <Col className={"item hidden"} lg={2} md={4} sm={6} xs={6}>
              <img src={"/static/cdn/images/flag/10.png"} />
              <h3>YEMEN</h3>
            </Col>
            <Col className={"item hidden"} lg={2} md={4} sm={6} xs={6}>
              <img src={"/static/cdn/images/flag/11.png"} />
              <h3>AZERBEYCAN</h3>
            </Col>
            <Col className={"item hidden"} lg={2} md={4} sm={6} xs={6}>
              <img src={"/static/cdn/images/flag/12.png"} />
              <h3>K.K.T.C</h3>
            </Col>
            <Col className={"item hidden"} lg={2} md={4} sm={6} xs={6}>
              <img src={"/static/cdn/images/flag/13.png"} />
              <h3>KUVEYT</h3>
            </Col>
            <Col className={"item hidden"} lg={2} md={4} sm={6} xs={6}>
              <img src={"/static/cdn/images/flag/14.png"} />
              <h3>ARNAVUTLUK</h3>
            </Col>
            <Col className={"item hidden"} lg={2} md={4} sm={6} xs={6}>
              <img src={"/static/cdn/images/flag/15.png"} />
              <h3>LÜBNAN</h3>
            </Col>
            <Col className={"item hidden"} lg={2} md={4} sm={6} xs={6}>
              <img src={"/static/cdn/images/flag/16.png"} />
              <h3>KOSOVA</h3>
            </Col>
            <div className={"other-flag"}>
              <span>DAHA FAZLASI</span>
              <img src={"/static/cdn/images/arrow-black.png"} className={"animate__animated"} width={"25"} />
            </div>
        </Row>
      </Container>
    </div>
  );
}

export default SellingPoints;
