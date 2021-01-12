import React from "react";
import { Container,Row } from "reactstrap";
import BackgroundTitle from "./About/BackgroundTitle";
import Layout from "../components/Layout";
import Head from "next/head";
import SellingPoints from "./HomePage/SellingPoints";



function Selling( ) {

  return (
    <div>
      <Head>
        <title>Honnes - Satış Noktaları</title>
      </Head>
    
    <Layout>
      <section>
        <BackgroundTitle
          Title={"SATIŞ NOKTALARI"}
          Background={"/static/cdn/images/career.jpg"}
        ></BackgroundTitle>
      </section>
      <section className={"sellingPoints sub"}>
        <SellingPoints></SellingPoints>
      </section>
    </Layout>
    </div>
  );
}


export default Selling