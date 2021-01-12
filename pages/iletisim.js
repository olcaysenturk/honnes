import React from "react";
import { Container } from "reactstrap";
import BackgroundTitle from "../pages/About/BackgroundTitle";
import Layout from "../components/Layout";
import Head from "next/head";

function ContactUs() {
  return (
    <div>
      <Head>
        <title>Honnes - İletişim</title>
      </Head>

      <Layout>
        <section>
          <BackgroundTitle
            Title={"İLETİŞİM"}
            Background={"/static/cdn/images/contact.jpg"}
          ></BackgroundTitle>
        </section>
        <section className={"contact-box"}>
          <Container>
            <div className={"adress-band"}>
              <div className={"text"}>
                Honnes Sağlık Ve Endüstriyel Ürünleri A.Ş <br></br>
                <a href={"mailto:info@honnes.com"}>info@honnes.com</a>
              </div>
            </div>
            <div className={"map-box"}>
              <div className={"item-box"}>
                <div className={"map"} id={"maps"}></div>
                <div className={"adress"}>
                  <div className={"title"}>İSTANBUL</div>
                  <div className={"item"}>
                    <span className={"ico place"}></span>
                    <span className={"text-item"}>
                      Cumhuriyet Mah. Karayel Sok. No:14 41420 <br />
                      Çayırova / KOCAELİ
                    </span>
                  </div>
                  <div className={"item"}>
                    <span className={"ico phone"}></span>
                    <span className={"text-item"}>0 262 658 89 59 </span>
                  </div>
                  <div className={"item"}>
                    <span className={"ico fax"}></span>
                    <span className={"text-item"}>0 262 658 80 40</span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </Layout>
    </div>
  );
}

export default ContactUs;
