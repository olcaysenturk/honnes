import React, { Component, useEffect } from "react";
import { Container, Col, Row } from "reactstrap";
import Layout from "../components/Layout";
import unfetch from "isomorphic-unfetch";
import BackgroundTitle from "../pages/About/BackgroundTitle";
import PaginationList from "react-pagination-list";
import Head from "next/head";

function setStorage(brand) {
  let productUrl = brand.code;
  localStorage.setItem("brandItemDetail", JSON.stringify(brand));
  window.location.href = "/urun-detay?" + productUrl;
}

const BrandDetailPage = ({ ItemDetail, ItemDetailList, infoArea }) => {
  return (
    <div>
      <Head>
        <title>Honnes - {ItemDetail.name}</title>
      </Head>
      <Layout>
        <section>
          <BackgroundTitle
            Title={"ÜRÜNLER"}
            Background={"/static/cdn/images/brands-1.jpg"}
          ></BackgroundTitle>
        </section>
        <section className={"brands-box"}>
          <Container>
            <Row className={"flex-row"}>
              <div className={`brands-info ${infoArea ? "hide" : "show"}`}>
                <div className={"img-info"}>
                  <img src={ItemDetail.path} alt={""} />
                  <span>{ItemDetail.name}</span>
                </div>
                <div className={"text-info"}>{ItemDetail.info}</div>
              </div>
              <Col lg={"3"} className={"productFilterArea"}>
                <div className="item-box">
                  <span>Ürün Kategorisi</span>

                  <p>
                    Yukarıda ürün filtreleme bölümünden ürün grubu filtreleyerek
                    detaylarına ulaşabilirsiniz.
                  </p>
                </div>
              </Col>
              <Col lg={"9"} className={"brands-item-box-detail"}>
                <Row>
                  <PaginationList
                    data={ItemDetailList}
                    pageSize={8}
                    renderItem={(item, key) => (
                      <Col
                        className={"animate__animated"}
                        lg={"4"}
                        md={"4"}
                        sm={"6"}
                        xs={"6"}
                        key={key}
                        onClick={(e) => {
                          setStorage(item);
                        }}
                      >
                        <div className={"brands-item"}>
                          <div className={"brands-img"}>
                            <img src={item.urlPath} alt={""} />
                            <span>{item.code}</span>
                          </div>

                          <div className={"brands-text"}>
                            {item.name} <br></br>
                            {item.area}
                          </div>
                        </div>
                      </Col>
                    )}
                  ></PaginationList>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
      </Layout>
    </div>
  );
};

BrandDetailPage.getInitialProps = async (context) => {
  const { req, res, link } = context;
  const data = await fetch(`http://localhost:3000/static/cdn/brands.json`);
  const dataEl = await data.json();
  
  let productPage = "/marka-detay/";
  let productId = "";
  let infoArea = "";
  if (req.url == productPage) {
    productId = "";
  } else {
    productId = req.url.replace("/marka-detay/?", "");
  }
  let ItemDetail = [];
  let ItemDetailList = [];

  if (!data) {
    return {
      notFound: true,
    };
  } else {
    dataEl.brands.map(function (item) {
      if (item.name.toLowerCase() == productId) {
        infoArea = false;
        ItemDetail = item;
        item.items.map(function (product) {
          ItemDetailList.push(product);
        });
      } else if (productId == "") {
        infoArea = true;
        item.items.map(function (product) {
          ItemDetailList.push(product);
        });
      }
    });
  }
  return { ItemDetail, ItemDetailList, infoArea };
};
export default BrandDetailPage;
