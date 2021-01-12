import React, { Component } from "react";
import Layout from "../components/Layout";
import { Container } from "reactstrap";
import BackgroundTitle from "./About/BackgroundTitle";
import Head from "next/head";

export default class ManagementTeam extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>Honnes - Yönetim Kadrosu</title>
        </Head>

        <Layout>
          <section>
            <BackgroundTitle
              Title={"YÖNETİM KADROSU"}
              Background={"/static/cdn/images/about-1.jpg"}
            ></BackgroundTitle>
          </section>
          <section className={"management-team"}>
            <Container>
              <div className="grid">
                <div className="grid__item" tabIndex="1">
                  <img src={"/static/cdn/images/management/y1.jpg"} alt={""} />
                  <div className={"text-area"}>
                    <b>RECEP AVŞAR</b> YÖNETİM KURULU BAŞKANI
                  </div>
                </div>
                <div className="grid__description" data-tab="1">
                  <div className={"text-box"}>
                    <span className={"left"}></span>
                    <span className={"right"}></span>
                    <span className={"close-btn"}></span>
                    <h3>
                      <b>RECEP AVŞAR</b> YÖNETİM KURULU BAŞKANI
                    </h3>
                    <p>
                      1987 yılında Çapa Medikal firmasının kurucusu olarak
                      sektöre giren Recep Avşar, Yönetim Kurulu Başkanı görevini
                      sürdürmektedir.
                    </p>
                  </div>
                </div>
                <div className="grid__item" tabIndex="2">
                  <img src={"/static/cdn/images/management/y2.jpg"} alt={""} />
                  <div className={"text-area"}>
                    <b>ZEKERİYA AVŞAR</b> YÖNETİM KURULU ÜYESİ
                  </div>
                </div>
                <div className="grid__description" data-tab="2">
                  <div className={"text-box"}>
                    <span className={"left"}></span>
                    <span className={"right"}></span>
                    <span className={"close-btn"}></span>
                    <h3>
                      <b>ZEKERİYA AVŞAR</b> YÖNETİM KURULU ÜYESİ
                    </h3>
                    <p>
                      Çapa Medikal firmasının kurucularından biri olan Zekeriya
                      Avşar, halen Yönetim Kurulu Üyesi ve Genel Müdür olarak
                      ailede yer almaktadır.
                    </p>
                  </div>
                </div>
                <div className="grid__item" tabIndex="3">
                  <img src={"/static/cdn/images/management/y3.jpg"} alt={""} />
                  <div className={"text-area"}>
                    <b>SEVİM ÖZTAŞKIN</b> GENEL MÜDÜR YARDIMCISI
                  </div>
                </div>
                <div className="grid__description" data-tab="3">
                  <div className={"text-box"}>
                    <span className={"left"}></span>
                    <span className={"right"}></span>
                    <span className={"close-btn"}></span>
                    <h3>
                      <b>SEVİM ÖZTAŞKIN</b> GENEL MÜDÜR YARDIMCISI
                    </h3>
                    <p>
                      Yönetim Kurulu Üyesi ve Genel Müdür Yardımcısı görevlerini
                      yürütmektedir.
                    </p>
                  </div>
                </div>
                <div className="grid__item" tabIndex="4">
                  <img src={"/static/cdn/images/management/y4.jpg"} alt={""} />
                  <div className={"text-area"}>
                    <b>RECAİ ÖZTAŞKIN</b> YÖNETİM KURULU ÜYESİ
                  </div>
                </div>
                <div className="grid__description" data-tab="4">
                  <div className={"text-box"}>
                    <span className={"left"}></span>
                    <span className={"right"}></span>
                    <span className={"close-btn"}></span>
                    <h3>
                      <b>RECAİ ÖZTAŞKIN</b> YÖNETİM KURULU ÜYESİ
                    </h3>
                    <p>Yönetim Kurulu Üyesi olarak ailede yer almaktadır.</p>
                  </div>
                </div>
              </div>

              <div className="grid">
                <div className="grid__item" tabIndex="5">
                  <img src={"/static/cdn/images/management/y5.jpg"} alt={""} />
                  <div className={"text-area"}>
                    <b>RAMİ KAAN ÖZTAŞKIN</b> GENEL MÜDÜR YARDIMCISI
                  </div>
                </div>
                <div className="grid__description" data-tab="5">
                  <div className={"text-box"}>
                    <span className={"left"}></span>
                    <span className={"right"}></span>
                    <span className={"close-btn"}></span>
                    <h3>
                      <b>RAMİ KAAN ÖZTAŞKIN</b> GENEL MÜDÜR YARDIMCISI
                    </h3>
                    <p>
                      Koç Üniversitesi Elektrik Elektronik Mühendisliği
                      eğitiminden sonra 2013 yılında Çapa Medikal bünyesinde
                      çalışmaya başlamıştır. Öztaşkın halen Yönetim Kurulu üyesi
                      ve Genel Müdür Yardımcısı olarak görevlerini
                      yürütmektedir.
                    </p>
                  </div>
                </div>
                <div className="grid__item" tabIndex="6">
                  <img src={"/static/cdn/images/management/y6.jpg"} alt={""} />
                  <div className={"text-area"}>
                    <b>DUYGU ÖZTAŞKIN ERSOY</b> YÖNETİM KURULU ÜYESİ
                  </div>
                </div>
                <div className="grid__description" data-tab="6">
                  <div className={"text-box"}>
                    <span className={"left"}></span>
                    <span className={"right"}></span>
                    <span className={"close-btn"}></span>
                    <h3>
                      <b>DUYGU ÖZTAŞKIN ERSOY</b> YÖNETİM KURULU ÜYESİ
                    </h3>
                    <p>
                      İstanbul Teknik Üniversitesi Ekonomi eğitiminden sonra
                      Brighton Üniversitesi İşletme Yönetimi yüksek lisansını
                      tamamlamış olan Duygu Öztaşkın Ersoy, 2010 yılında Çapa
                      Medikal bünyesinde çalışmaya başlamıştır ve şu an Yönetim
                      Kurulu Üyesi olarak görev yapmaktadır.
                    </p>
                  </div>
                </div>
                <div className="grid__item" tabIndex="7">
                  <img src={"/static/cdn/images/management/y7.jpg"} alt={""} />
                  <div className={"text-area"}>
                    <b>SERDAR AĞALAR</b> SATIŞ PAZARLAMA DİREKTÖRÜ
                  </div>
                </div>
                <div className="grid__description" data-tab="7">
                  <div className={"text-box"}>
                    <span className={"left"}></span>
                    <span className={"right"}></span>
                    <span className={"close-btn"}></span>
                    <h3>
                      <b>SERDAR AĞALAR</b> SATIŞ PAZARLAMA DİREKTÖRÜ
                    </h3>
                    <p>
                      İstanbul Teknik Üniversitesi Kimya Mühendisliği
                      eğitiminden sonra Brighton Üniversitesi İşletme Yönetimi
                      yüksek lisansını tamamlamış olan Serdar Ağalar, 2013
                      yılında Çapa Medikal bünyesinde çalışmaya başlamıştır ve
                      şu an Satış Pazarlama Direktörü olarak görevine devam
                      etmektedir.
                    </p>
                  </div>
                </div>
                <div className="grid__item" tabIndex="8">
                  <img src={"/static/cdn/images/management/y8.jpg"} alt={""} />
                  <div className={"text-area"}>
                    <b>SELÇUK AĞALAR</b> TEDARİK ZİNCİRİ YÖNETİCİSİ
                  </div>
                </div>
                <div className="grid__description" data-tab="8">
                  <div className={"text-box"}>
                    <span className={"left"}></span>
                    <span className={"right"}></span>
                    <span className={"close-btn"}></span>
                    <h3>
                      <b>SELÇUK AĞALAR</b> TEDARİK ZİNCİRİ YÖNETİCİSİ
                    </h3>
                    <p>
                      1997 yılından bu yana Çapa Medikal bünyesinde çalışan
                      Şelçuk Ağalar, İstanbul Aydın Üniversitesi’nde Lojistik
                      bölümü eğitimini tamamlamıştır. Ağalar, halen Çapa
                      Medikal’de Tedarik Zinciri Yöneticisi olarak görev
                      yapmaktadır.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid">
                <div className="grid__item" tabIndex="9">
                  <img src={"/static/cdn/images/management/y9.jpg"} alt={""} />
                  <div className={"text-area"}>
                    <b>SERHAT GÜVEN</b> BİLGİ TEKNOLOJİLERİ YÖNETİCİSİ
                  </div>
                </div>
                <div className="grid__description" data-tab="9">
                  <div className={"text-box"}>
                    <span className={"left"}></span>
                    <span className={"right"}></span>
                    <span className={"close-btn"}></span>
                    <h3>
                      <b>SERHAT GÜVEN</b> BİLGİ TEKNOLOJİLERİ YÖNETİCİSİ
                    </h3>
                    <p>
                      Marmara Üniversitesi Halkla ilişkiler Tanıtım ve
                      Reklamcılık bölümünde eğitimini tamamlayan Serhat Güven
                      2005 yılında Çapa Medikal bünyesinde çalışmaya başlamıştır
                      ve şu an Bilgi Teknolojileri Yöneticisi olarak görevine
                      devam etmektedir.
                    </p>
                  </div>
                </div>
                <div className="grid__item" tabIndex="10">
                  <img src={"/static/cdn/images/management/y10.jpg"} alt={""} />
                  <div className={"text-area"}>
                    <b>HASAN ÖZTÜRK</b> SATIŞ YÖNETİCİSİ
                  </div>
                </div>
                <div className="grid__description" data-tab="10">
                  <div className={"text-box"}>
                    <span className={"left"}></span>
                    <span className={"right"}></span>
                    <span className={"close-btn"}></span>
                    <h3>
                      <b>HASAN ÖZTÜRK</b> SATIŞ YÖNETİCİSİ
                    </h3>
                    <p>
                      1999 yılında Çapa Medikal bünyesinde çalışmaya başlayan
                      Hasan Öztürk, Yıldız Teknik Üniversitesi Kimya Bölümü’nden
                      2006 yılında mezun olmuştur. Öztürk şu an Satış Yöneticisi
                      olarak görevine devam etmektedir.
                    </p>
                  </div>
                </div>
                <div className="grid__item" tabIndex="11">
                  <img src={"/static/cdn/images/management/y11.jpg"} alt={""} />
                  <div className={"text-area"}>
                    <b>TÜLAY ÖZTÜRK</b> SATIŞ DESTEK YÖNETİCİSİ
                  </div>
                </div>
                <div className="grid__description" data-tab="11">
                  <div className={"text-box"}>
                    <span className={"left"}></span>
                    <span className={"right"}></span>
                    <span className={"close-btn"}></span>
                    <h3>
                      <b>TÜLAY ÖZTÜRK</b> SATIŞ DESTEK YÖNETİCİSİ
                    </h3>
                    <p>
                      2000 yılında Çapa Medikal bünyesinde çalışmaya başlayan
                      Tülay Öztürk, Anadolu Üniversitesi İşletme Fakültesi
                      mezunudur. Öztürk halen Satış Destek Yöneticisi olarak
                      görevine devam etmektedir.
                    </p>
                  </div>
                </div>
                <div className="grid__item" tabIndex="12">
                  <img src={"/static/cdn/images/management/y12.jpg"} alt={""} />
                  <div className={"text-area"}>
                    <b>ZEHRA SARMAZ</b> İNSAN KAYNAKLARI ve İDARİ İŞLER
                    YÖNETİCİSİ
                  </div>
                </div>
                <div className="grid__description" data-tab="12">
                  <div className={"text-box"}>
                    <span className={"left"}></span>
                    <span className={"right"}></span>
                    <span className={"close-btn"}></span>
                    <h3>
                      <b>ZEHRA SARMAZ</b> İNSAN KAYNAKLARI ve İDARİ İŞLER
                      YÖNETİCİSİ
                    </h3>
                    <p>
                      Karadeniz Teknik Üniversitesi ve Anadolu Üniversitesi’nde
                      İşletme Yönetimi ve İşletme eğitimi alarak, uzun yıllar
                      farklı sektörlerde görev yapmış olan Zehra Sarmaz, 2015
                      yılından bu yana Çapa Medikal bünyesinde İnsan Kaynakları
                      ve İdari İşler Yöneticiliği görevini yürütmektedir.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid"></div>

              <div className="grid">
                <div className="grid__item" tabIndex="13">
                  <img src={"/static/cdn/images/management/y13.jpg"} alt={""} />
                  <div className={"text-area"}>
                    <b>BATU KILIÇ</b> FİNANSMAN , BÜTÇE VE RAPORLAMA YÖNETİCİSİ
                  </div>
                </div>
                <div className="grid__description" data-tab="13">
                  <div className={"text-box"}>
                    <span className={"left"}></span>
                    <span className={"right"}></span>
                    <span className={"close-btn"}></span>
                    <h3>
                      <b>BATU KILIÇ</b> FİNANSMAN , BÜTÇE VE RAPORLAMA
                      YÖNETİCİSİ
                    </h3>
                    <p>
                      İstanbul Üniversitesi İktisat ve Maliyet eğitimlerini
                      aldıktan sonra uzun yıllar farklı sektörlerde görev alan
                      Batu Kılıç , 2018 yılından bu yana Çapa Medikal bünyesinde
                      Finansman, Bütçe ve Raporlama Yöneticiliği görevini
                      yürütmektedir.
                    </p>
                  </div>
                </div>
                <div className="grid__item" tabIndex="14">
                  <img src={"/static/cdn/images/management/y14.jpg"} alt={""} />
                  <div className={"text-area"}>
                    <b>HARUN KIRÇAK</b> MALİ İŞLER YÖNETİCİSİ
                  </div>
                </div>
                <div className="grid__description">
                  <div className={"text-box"}>
                    <span className={"left"}></span>
                    <span className={"right"}></span>
                    <span className={"close-btn"}></span>
                    <h3>
                      <b>HARUN KIRÇAK</b>MALİ İŞLER YÖNETİCİSİ
                    </h3>
                    <p>
                      Anadolu Üniversitesi İşletme bölümü mezunu olan Harun
                      Kırçak , uzun yıllar sağlık sektöründe Mali işler alanında
                      görev almış olup , 2019 yılı itibari ile Çapa Medikal
                      bünyesinde Mali İşler Yöneticisi olarak görev almaktadır.
                    </p>
                  </div>
                </div>
                <div className="grid__item" tabIndex="15">
                  <img src={"/static/cdn/images/management/y15.jpg"} alt={""} />
                  <div className={"text-area"}>
                    <b>ERDEM ŞENGÜL</b> İŞ GELİŞTİRME YÖNETİCİSİ
                  </div>
                </div>
                <div className="grid__description">
                  <div className={"text-box"}>
                    <span className={"left"}></span>
                    <span className={"right"}></span>
                    <span className={"close-btn"}></span>
                    <h3>
                      <b>ERDEM ŞENGÜL</b> İŞ GELİŞTİRME YÖNETİCİSİ
                    </h3>
                    <p>
                      Koç Üniversitesi Elektrik Elektronik Mühendisliği
                      eğitimini 2013 yılında tamamladıktan sonra hem kurumsal,
                      hem aile hem de girişim şirketlerinde çeşitli rollerde
                      görev alan Erdem Şengül, şuan Çapa Medikkal bünyesinde İş
                      Geliştirme Yöneticisi görevini yürütmektedir.
                    </p>
                  </div>
                </div>
              </div>
            </Container>
          </section>
        </Layout>
      </div>
    );
  }
}
