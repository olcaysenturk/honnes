import React, { Component } from "react";
import Layout from "../components/Layout";
import { Container, Col } from "reactstrap";
import BackgroundTitle from "./About/BackgroundTitle";
import Head from "next/head";


function qualityTide() {
 
    return (
      <div>
      <Head>
        <title>Honnes - Belgelerimiz</title>
      </Head>
      <Layout>
        <section>
          <BackgroundTitle
            Title={"BELGELERİMİZ"}
            Background={"/static/cdn/images/belgeler.jpg"}
          ></BackgroundTitle>
        </section>

        <Container>
          <section className={"tide-section"}>
            <div className={"tide-box"}>
              <Col
                className={"tide-item"}
                lg={"4"}
                md={"4"}
                sm={"12"}
                xs={"12"}
              >
                <div className={"item"}>
                  <img src={"/static/cdn/images/certificate.jpg"} alt={""} />
                  <h2>CM ISO 9001 2015</h2>
                </div>
              </Col>
              
            </div>
            
          </section>
        </Container>
      </Layout>
      </div>
    );
}
export default qualityTide