import React, { Component } from "react";
import Layout from "../components/Layout";
import { Container, Col } from "reactstrap";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import BackgroundTitle from "./About/BackgroundTitle";
import news from "../assets/js/news.json";
import Head from "next/head";



export default class NewsOur extends Component {
  setStorage(item) {
    localStorage.setItem("news", JSON.stringify(item));
    window.location.href = "/haber-detay?" + item.url;
  }

  state = {
    news: news.news
  };

  getNews = () => {
    fetch(json,
    {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }

    })
      .then((response) => response.json())
      .then((data) => this.setState({ news: data }));
  };

  renderNews() {
    return this.state.news.map((item, index) => (
      <Col
        className={"newsVideo-item"}
        key={index}
        lg={"4"}
        md={"4"}
        sm={"12"}
        xs={"12"}
        onClick={(e) => {
          this.setStorage(item);
        }}
      >
        <div className={"item"}>
          <img src={`${item.logo}`} alt={""} />
          <h2>{item.title}</h2>
        </div>
      </Col>
    ));
  }
  render() {
    return (
      <div>
      <Head>
        <title>Honnes - Haberler Videolar</title>
      </Head>
      <Layout>
        <section>
          <BackgroundTitle
            Title={"HABERLER VİDEOLAR"}
            Background={"/static/cdn/images/haberler.jpg"}
          ></BackgroundTitle>
        </section>

        <Container>
          <Tabs id={"uncontrolled-tab-example"}>
            <TabList>
              <Tab>
                <span>HABERLER</span>
              </Tab>
              <Tab>
                <span>VİDEOLAR</span>
              </Tab>
            </TabList>

            <TabPanel>
              <section className={"newsVideo-section"}>
                <div className={"newsVideo-box"}>{this.renderNews()}</div>
              </section>
            </TabPanel>
            <TabPanel>
              <section className={"newsVideo-section"}>
                <div className={"newsVideo-box"}>
                  <Col
                    className={"newsVideo-item"}
                    lg={"4"}
                    md={"4"}
                    sm={"12"}
                    xs={"12"}
                  >
                    <div className={"item lb-area"}>
                      <img
                        src={"/static/cdn/images/video-1.png"}
                        alt={" "}
                        data-video={"https://www.youtube.com/embed/L3Us_5t32KE"}
                      />
                      <h2>Honnes tanıtım filmi</h2>
                    </div>
                  </Col>
                  
                   </div>
              </section>
            </TabPanel>
          </Tabs>
        </Container>
        <div className={"lb-bg"}></div>
        <div className={"lb-box"}>
          <img src="" alt="" />
          <iframe width="500" height="350" src={""} title={" "}></iframe>
        </div>
      </Layout>
      </div>
    );
  }
}
