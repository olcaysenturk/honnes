import React, { Component } from "react";
import { Container, Col, Row } from "reactstrap";
import Layout from "../components/Layout";
import BackgroundTitle from "./About/BackgroundTitle";
import unfetch from "isomorphic-unfetch";
import Head from "next/head";

function setStorage(brandItem) {
  localStorage.setItem("brandItem", JSON.stringify(brandItem));
  window.location.href = "/marka-detay?" + brandItem.url;
}

const BrandPage = ({ ItemDetail }) => {
  return (
    <div>
       <Head>
        <title>Honnes - Markalar</title>
      </Head>
      <Layout>
        <section>
          <BackgroundTitle
            Title={"MARKALAR"}
            Background={"/static/cdn/images/brands-1.jpg"}
          ></BackgroundTitle>
        </section>
        <section className={"brands-box"}>
          <Container>
            <p>
              HONNES, sağlık sektöründe üretim, lojistik ve satış-pazarlama
              alanlarında 20 yılı aşkın deneyimin verdiği güç ve güven ile
              ülkemizin ve yakın coğrafyasının alanında lider kuruluşu olmak
              üzere, yola çıkmıştır. HONNES ismi HONest (dürüst) ve NESt (yuva)
              kelimelerinden gelmektedir. HONNES olarak temel değerlerimizden
              biri olan bütün paydaşlarımıza dürüst yaklaşım ile onlar için
              güvenilir bir yuva olma felsefemiz kuruluşumuzun adında
              cisimleşmiştir.
              <br />
              <br />
              HONNES Sağlık ve Endüstriyel Ürünleri A.Ş. tıbbi alanda kullanılan
              yapışkanlı sabitleme bantları ve hazır pansuman örtüleri ile
              elastik bandajlar, sargı bezleri, gazlı bezler gibi özellikle akut
              ve kronik yara bakımında ihtiyaç duyulan ürünleri üretmektedir.
            </p>
            <div className={"brands-item-box"}>
              <Row>
                {ItemDetail.map((brand) => (
                  <Col
                    className={"animate__animated"}
                    lg={"3"}
                    md={"6"}
                    sm={"6"}
                    xs={"12"}
                    key={brand.id}
                  >
                    <div
                      className={"brands-item banner"}
                      onClick={(e) => {
                        setStorage(brand);
                      }}
                    >
                      <div className={"brands-img"}>
                        <img src={brand.banner} alt={""} />
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Container>
        </section>
      </Layout>
    </div>
  );
};

BrandPage.getInitialProps = async (context) => {
  const { req, res, link } = context;
  const data = await fetch(`http://localhost:3000/static/cdn/brands.json`);
  const dataEl = await data.json();
  
  let ItemDetail = [];

  if (!data) {
    return {
      notFound: true,
    };
  } else {
    dataEl.brands.map(function (item) {
      ItemDetail.push(item);
    });
  }

  return { ItemDetail };
};

export default BrandPage;
