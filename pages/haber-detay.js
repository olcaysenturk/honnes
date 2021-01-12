import React, { Component } from "react";
import Layout from "../components/Layout";
import { Container} from "reactstrap";
import BackgroundTitle from "./About/BackgroundTitle";
import Head from "next/head";




function NewsDetail({newsDetail}) {
  return (
    <div>
      <Head>
        <title>Honnes - {newsDetail.title}</title>
      </Head>
    
    <Layout>
      <section>
        <BackgroundTitle
          Title={"HABERLER"}
          Background={"/static/cdn/images/brands-1.jpg"}
        ></BackgroundTitle>
      </section>
      <section className={"news-detail-box"}>
      <Container>
      
      <div className={"news-img"}>
        <img src={newsDetail.image} alt={""} />
      </div>
      <h2>{newsDetail.title}</h2>
      <div
        className={"news-text"}
        dangerouslySetInnerHTML={{ __html: newsDetail.text }}
      ></div>
    </Container>
      </section>
    </Layout>
    </div>
  );
  
}

NewsDetail.getInitialProps = async (context) => {
  const data = await fetch("http://codeadd.net/static/cdn/news.json");
  const dataEl = await data.json();
  const { req, res, link } = context;
  let newsId = req.url.replace("/haber-detay/?","");
  let newsDetail = [];
  
  if (!data) {
    return {
      notFound: true,
    }
  }else{
    dataEl.news.map(function(item){
        if(item.url == newsId){
          newsDetail = item;
        }
    });
  }
  
  return { newsDetail};
}
export default NewsDetail;