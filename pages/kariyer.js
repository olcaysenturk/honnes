import React from "react";
import { Container,Row } from "reactstrap";
import BackgroundTitle from "./About/BackgroundTitle";
import Layout from "../components/Layout";
import Head from "next/head";



function Career( ) {

  return (
    <div>
      <Head>
        <title>Honnes - Kariyer</title>
      </Head>
    
    <Layout>
      <section>
        <BackgroundTitle
          Title={"KARİYER"}
          Background={"/static/cdn/images/career.jpg"}
        ></BackgroundTitle>
      </section>
      <section className={"career-box"}>
        <div className={"career-video newsVideo-item"}>
          <Container>
            <h2 className={"col-lg-12 col-centered"}>
              KARİYER OLANAKLARI{" "}
              <span>Potansiyelini tecrübemizle açığa çıkar</span>
            </h2>
            <Row>
              <div className={"item lb-area col-lg-3 col-md-6 col-sm-12"}>
                <div className={"img-box"}>
                  <img
                    src={"/static/cdn/cemile-dursun.jpg"}
                    alt={" "}
                    data-video={"https://www.youtube.com/embed/NCJWjTRivs4?autoplay=1"}
                  />
                  <span className={"play-ico"}></span>
                </div>

                <h3>
                  CEMİLE DURSUN <br />
                  <b>İNSAN KAYNAKLARI VE İDARİ İŞLER SORUMLUSU</b>
                </h3>
              </div>
              <div className={"item lb-area col-lg-3 col-md-6 col-sm-12"}>
                <div className={"img-box"}>
                  <img
                    src={"/static/cdn/erdem-sengul.jpg"}
                    alt={" "}
                    data-video={"https://www.youtube.com/embed/l53RZwsXBYQ?autoplay=1"}
                  />
                  <span className={"play-ico"}></span>
                </div>
                <h3>
                  ERDEM ŞENGÜL <br />
                  <b>İŞ GELİŞTİRME YÖNETİCİSİ</b>
                </h3>
              </div>
              <div className={"item lb-area col-lg-3 col-md-6 col-sm-12"}>
                <div className={"img-box"}>
                  <img
                    src={"/static/cdn/gonul-guler.jpg"}
                    alt={" "}
                    data-video={"https://www.youtube.com/embed/c6wyOwsLKn0?autoplay=1"}
                  />
                  <span className={"play-ico"}></span>
                </div>
                <h3>
                  GÖNÜL GÜLER <br />
                  <b>SATIŞ DESTEK UZMANI</b>
                </h3>
              </div>
              <div className={"item lb-area col-lg-3 col-md-6 col-sm-12"}>
                <div className={"img-box"}>
                  <img
                    src={"/static/cdn/selcuk-agalar.jpg"}
                    alt={" "}
                    data-video={"https://www.youtube.com/embed/avx6PovdV7M?autoplay=1"}
                  />
                  <span className={"play-ico"}></span>
                </div>
                <h3>
                  SELÇUK AĞALAR <br />
                  <b>TEDARİK ZİNCİRİ YÖNETİCİSİ</b>
                </h3>
              </div>
            </Row>
          </Container>
        </div>
        <Container>
          <h2 className={"col-lg-12 col-centered"}>
            ÇAPA MEDİKALDE YAŞAM{" "}
            <span>
              Çapa Medikal, tüm personelini maddi ve manevi faydalar üreterek
              motive ediyor. <br></br>Evrensel değerleri aşarak farklı iş modellerini
              çalışanları için uyguluyor.
            </span>
          </h2>

          <div className={"slide"}>
            <div className={"item col-lg-4 col-md-12 col-sm-12"}>
              <div className={"img-box"}>
                <img src={"/static/cdn/images/c-1.jpg"} alt={""} />
              </div>
              <div className={"text-box"}>
                <div className={"title"}>DİLEK ÖZTÜRK</div>
                <div className={"title-bottom"}>SATIŞ DESTEK UZMANI</div>
                <div className={"text"}>
                  2006 yılından bu yana Çapa Medikal’de çalışıyorum. Satış
                  Destek Uzmanı olarak gün içerisinde problemleri ve krizleri
                  çözmek durumunda olmama rağmen her günüm ilk günkü gibi
                  heyecanlı ve verimli geçiyor. Bu ailede yer almak benim için
                  büyük bir mutluluk.
                </div>
              </div>
            </div>
            <div className={"item col-lg-4 col-md-12 col-sm-12"}>
              <div className={"img-box"}>
                <img src={"/static/cdn/images/c-2.jpg"} alt={""} />
              </div>
              <div className={"text-box"}>
                <div className={"title"}>ERCAN ÇAKIR</div>
                <div className={"title-bottom"}>TEDARİK ZİNCİRİ</div>
                <div className={"text"}>
                  Çapa Medikal’de 2007 tarihinden bu yana birçok birimde
                  çalıştım ve bana kattıkları ölçülemez. Şu an Tedarik Zinciri
                  Departmanında Sorumlu olarak çalışıyorum. Her an dikkatli ve
                  eksiksiz planlama yapmak bizim için oldukça önemli. Her gün
                  aynı dikkat ve özenle çalışabiliyorsam bu Çapa Medikal‘de
                  öğrendiklerim sayesindedir.
                </div>
              </div>
            </div>
            <div className={"item col-lg-4 col-md-12 col-sm-12"}>
              <div className={"img-box"}>
                <img src={"/static/cdn/images/c-3.jpg"} alt={""} />
              </div>
              <div className={"text-box"}>
                <div className={"title"}>YILDIZ VAROL</div>
                <div className={"title-bottom"}>MUHASEBE UZMANI</div>
                <div className={"text"}>
                  Çapa Medikal ailesinde 2012 yılından bu yana Muhasebe Uzmanı
                  olarak görev alıyorum. Kişisel gelişim ve kariyer anlamında
                  Çapa Medikal‘in bana kattıkları oldukça kıymetli.
                </div>
              </div>
            </div>
          </div>
        </Container>
        <div className={"form-area"}>
          <Container>
            <div className={"form-box"}>
              <h2 className={"title"}>BAŞVURU FORMU</h2>
              <div className={"form-item-box"}>
                <div className={"form-item"}>
                  <input type={"text"} placeholder={"Adınız"} />
                </div>
                <div className={"form-item"}>
                  <input type={"text"} placeholder={"Soyadınız"} />
                </div>
                <div className={"form-item"}>
                  <input type={"text"} placeholder={"E-Mail Adresiniz"} />
                </div>
              </div>
              <div className={"form-item-box"}>
                <div className={"form-item"}>
                  <textarea placeholder={"Açıklama"}></textarea>
                </div>
                <div className={"form-item"}>
                  <input type={"text"} placeholder={"Özgeçmişiniz"} />
                  <span className={"button"}>Yükle</span>
                </div>
              </div>
            </div>
          </Container>
          <div className={"button-area"}>
            <div className={"form-box"}>
              <a href={"/"} className={"button"}>
                Gönder
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className={"lb-bg"}></div>
      <div className={"lb-box"}>
        <img src="" alt="" />
        <iframe width="500" height="281" src={""} title={" "}></iframe>
        <i className={"close"}>X</i>
      </div>
    </Layout>
    </div>
  );
}


export default Career