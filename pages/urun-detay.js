import React, { Component } from "react";
import Layout from "../components/Layout";
import { Container, Col, Row } from "reactstrap";
import ReactImageMagnify from "react-image-magnify";
import BackgroundTitle from "./About/BackgroundTitle";
import unfetch from "isomorphic-unfetch";
import Head from "next/head";

const ProductDetailPage = ({ ItemDetail, ItemDetailList }) => {
  return (
    <div>
      <Head>
        <title>Honnes - {ItemDetailList.type}</title>
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
            <div className={"brands-info"}>
              <div className={"img-info"}>
                <img src={ItemDetail.path} alt={""} />
                <span>{ItemDetail.name}</span>
              </div>
              <div className={"text-info"}>{ItemDetail.info}</div>
            </div>
            <div className={"brands-item-box-detail"}>
              <h2>ÜRÜNLER</h2>
              <Row>
                <Col lg={"6"} md={"6"} sm={"12"} xs={"12"}>
                  <div className={"brands-item"}>
                    <div className={"brands-img"}>
                      <ReactImageMagnify
                        {...{
                          smallImage: {
                            alt: "Çapa Medikal",
                            isFluidWidth: true,
                            src: `${ItemDetailList.urlPath}`,
                          },
                          largeImage: {
                            width: 800,
                            src: `${ItemDetailList.urlPath}`,
                            height: 600,
                          },
                        }}
                      />
                      <span>{ItemDetailList.code}</span>
                    </div>

                    <div className={"brands-text"}>
                      {ItemDetailList.name} <br></br>
                      {ItemDetailList.area}
                    </div>
                  </div>
                </Col>

                <Col lg={"6"} md={"6"} sm={"12"} xs={"12"}>
                  <div className={"product-detail-info"}>
                    <div className={"text"}>
                      <span>Genel Kullanım Alanı : </span> {ItemDetailList.area}
                    </div>
                    <div className={"text"}>
                      <span>Ürün Sınıfı : </span> {ItemDetailList.class}
                    </div>
                    <div className={"text"}>
                      <span>Ürün Tipi : </span> {ItemDetailList.type}
                    </div>
                    <div className={"text"}>
                      <span>Marka : </span> {ItemDetailList.brand}
                    </div>
                    <div className={"text"}>
                      <span>Alt Marka : </span> {ItemDetailList.bottomBrand}
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </section>
      </Layout>
    </div>
  );
};

ProductDetailPage.getInitialProps = async (context) => {
  const { req, res, link } = context;
  const data = await fetch(`http://localhost:3000/static/cdn/brands.json`);
  const dataEl = await data.json();
  
  let productId = req.url.replace("/urun-detay/?", "");
  let ItemDetail = "";
  let ItemDetailList = "";

  if (!data) {
    return {
      notFound: true,
    };
  } else {
    dataEl.brands.map(function (item) {
      item.items.map(function (product) {
        if (product.code == productId) {
          ItemDetail = item;
          ItemDetailList = product;
        }
      });
    });
  }

  return { ItemDetail, ItemDetailList };
};
export default ProductDetailPage;
