import Layout from "../components/Layout";
import HomeSlider from "./HomePage/HomeSlider";
import WhyOur from "./HomePage/WhyOur";
import SellingPoints from "./HomePage/SellingPoints";
import Head from "next/head";
import { Container,Col } from "reactstrap";

function setStorage(brandData) {
  localStorage.setItem("brandItem", JSON.stringify(brandData));
}
const IndexPage = ({ ItemDetail }) => {
  return (
    <div>
      <Head>
        <title>Honnes - Anasayfa</title>
      </Head>
      <Layout>
        <div>
          <section className={"homeslider"}>
            <HomeSlider></HomeSlider>
          </section>
          <section className={"whyour"}>
            <WhyOur></WhyOur>
          </section>
          <section className={"brands animate__animated"}>
            <Container>
              <div className={"title"}>
                <span>MARKALAR</span>
              </div>
              <div className={"slide"}>
                {ItemDetail.map((item) => (
                  <Col
                    className="item"
                    lg={"3"}
                    md={"3"}
                    sm={"12"}
                    xs={"12"}
                    key={item.id}
                    onClick={(e) => {
                      setStorage(item);
                    }}
                  >
                    <a href={"/marka-detay?" + item.url}>
                      <div className={"img-box"}>
                        <img
                          src={item.path}
                          className="sliderimg"
                          alt={item.name}
                        />
                      </div>
                    </a>
                  </Col>
                ))}
              </div>
            </Container>
          </section>
          <section className={"sellingPoints animate__animated"}>
            <SellingPoints></SellingPoints>
          </section>
        </div>
      </Layout>
    </div>
  );
}

IndexPage.getInitialProps = async (context) => {
  const { req, res, link } = context;
  const data = await fetch(`http://localhost:3000/static/cdn/brands.json`);
  const dataEl = await data.json();
  
  let ItemDetail = [];

  if (!data) {
    return {
      notFound: true,
    }
  }else{
    dataEl.brands.map(function(item){
      ItemDetail.push(item);
    });
  }
  
  return { ItemDetail};
}

export default IndexPage;
