import React, { Component } from "react";
import Layout from "../components/Layout";
import { Container } from "reactstrap";
import BackgroundTitle from "./About/BackgroundTitle";
import Head from "next/head";

export default class Hakkimizda extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>Honnes - Hakkımızda</title>
        </Head>

        <Layout>
          <div>
            <section>
              <BackgroundTitle
                Title={"HAKKIMIZDA"}
                Background={"/static/cdn/images/about-1.jpg"}
              ></BackgroundTitle>
            </section>
            <section className={"about-us-text"}>
              <Container>
                <h2>HAKKIMIZDA</h2>
                <p>
                  HONNES, sağlık sektöründe üretim, lojistik ve satış-pazarlama
                  alanlarında 20 yılı aşkın deneyimin verdiği güç ve güven ile
                  ülkemizin ve yakın coğrafyasının alanında lider kuruluşu olmak
                  üzere, yola çıkmıştır. HONNES ismi HONest (dürüst) ve NESt
                  (yuva) kelimelerinden gelmektedir. HONNES olarak temel
                  değerlerimizden biri olan bütün paydaşlarımıza dürüst yaklaşım
                  ile onlar için güvenilir bir yuva olma felsefemiz
                  kuruluşumuzun adında cisimleşmiştir.
                </p>
                <p>
                  HONNES Sağlık ve Endüstriyel Ürünleri A.Ş. tıbbi alanda
                  kullanılan yapışkanlı sabitleme bantları ve hazır pansuman
                  örtüleri ile elastik bandajlar, sargı bezleri, gazlı bezler
                  gibi özellikle akut ve kronik yara bakımında ihtiyaç duyulan
                  ürünleri üretmektedir.
                </p>
                <p>
                  Uluslararası geçerliliğe sahip sertifikalar ile belgelenmiş
                  üretim, depo, laboratuvar ve idari departmanların yer aldığı
                  5800 m² kapalı alana sahip modern tesisinde verimli kaynak
                  kullanımı prensibi esas alınmıştır. Çevre dostu üretim
                  teknolojileri, üst düzey hijyen koşulları, yüksek iş sağlığı
                  ve işçi güvenliği ile sürdürülebilir üretim politikasına
                  sahiptir. HONNES Sağlık ve Endüstriyel Ürünleri A.Ş. ileri
                  teknolojik alt yapısı ve yüksek üretim kapasitesiyle faaliyet
                  gösterdiği medikal yapışkanlı bant üretimi alanında ülkemizin
                  en güçlü üreticileri arasında yer almaktadır. Çevreyolu ve
                  havalimanına yakın bir konumda bulunan tesisimiz aynı zamanda
                  uluslararası lojistik limanlarına da yakındır.
                </p>
                <p>
                  Ulusal ve global pazarlara hizmet veren HONNES; hastane,
                  eczane ve perakende kanallarında satışa sunulan Alpheta,
                  Clivex, B-good, Banduff markalarının çatısını oluşturan,
                  yüksek kaliteli üretim anlayışını ilke edinmiş bir kuruluştur.
                  Yurtiçinde gerçekleştirdiği satış ve pazarlama faaliyetleriyle
                  ulaştığı hastane, eczane, medikal ve perakende noktalarına her
                  geçen gün yenilerini ekleyen HONNES, Başta Ortadoğu ve Avrupa
                  olmak üzere, 4 kıtada birçok ülkeye ihracat yapmaktadır.
                </p>
                <p>
                  Üretimini üstlendiği ürün grubunu ve faaliyet gösterdiği
                  sektörü çok iyi tanıyan tecrübeli yönetim kadrosu ve alanında
                  uzman ekibiyle 100’ün üzerinde kişiye istihdam sağlayan HONNES
                  ailesi paydaşlarının teveccühü ve desteğiyle her geçen gün
                  büyümekte ve güçlenmektedir.
                </p>
                <h2>VİZYON MİSYON</h2>
                <p>
                  <strong>Vizyon</strong>
                </p>
                <p>
                  Türkiye’de ve yakın coğrafyada sağlık sektörü için arz ve
                  lojistikte lider, global bir şirket olmak.
                </p>
                <p>
                  <strong>Misyon</strong>
                </p>
                <p>
                  Sağlık sektörünün önde gelen tedarik zinciri yönetimi şirketi
                  olarak, yüksek kalite standartlarından ödün vermeden, üst
                  düzey memnuniyet sağlamak.
                </p>
                <p>
                  <strong>Değerlerimiz</strong>
                </p>
                <p>
                  Kalite, çalışanlara değer verme, iş etiği, müşteri odaklılığı,
                  saygınlık ve hız.
                </p>

                <div className={"history-area"}>
                  <h3>Kilometre Taşları</h3>
                  <div className={"item-box"}>
                    <span className={"elipse"}>1987</span>
                    <span className={"text"}>
                      Çapa Medikal’in temelleri atıldı.
                    </span>
                  </div>
                  <div></div>
                  <div className={"item-box odd"}>
                    <span className={"elipse"}>1992</span>
                    <span className={"text"}>
                      İstanbul /Çapa’da açılan ofisle medikal sarf <br></br>
                      malzemeleri sektörünün geleceğini <br></br>etkileyecek
                      rota çizildi.
                    </span>
                  </div>
                  <div></div>
                  <div className={"item-box"}>
                    <span className={"elipse"}>1995</span>
                    <span className={"text"}>
                      İlk özel hastaneyle çalışılmaya başlandı.
                    </span>
                  </div>
                  <div></div>
                  <div className={"item-box odd"}>
                    <span className={"elipse"}>2002</span>
                    <span className={"text"}>
                      Hizmet verilen A+ özel hastane sayısı 20’ye ulaştı.
                      <br></br>
                      Aynı yıl üniversite hastaneleri ile özel sektördeki
                      <br></br>
                      çeşitli kurumlara da ürün sunulur hale gelindi.
                    </span>
                  </div>
                  <div></div>
                  <div className={"item-box"}>
                    <span className={"elipse"}>2009</span>
                    <span className={"text"}>
                      Sektörün ihtiyaç duyduğu uzman personel<br></br>
                      talebini karşılamak üzere tüm yılı kapsayan<br></br>
                      geniş bir eğitim seferberliği başlatıldı.
                    </span>
                  </div>
                  <div></div>
                  <div className={"item-box odd"}>
                    <span className={"elipse"}>2010</span>
                    <span className={"text"}>
                      Portföydeki ürün sayısı 7000’e ulaştı.
                    </span>
                  </div>
                  <div></div>
                  <div className={"item-box"}>
                    <span className={"elipse"}>2013</span>
                    <span className={"text"}>
                      Nextech markası oluşturularak yerli medikal<br></br>
                      sarf malzemesi üretimine başlandı.
                    </span>
                  </div>
                  <div></div>
                  <div className={"item-box odd"}>
                    <span className={"elipse"}>2014</span>
                    <span className={"text"}>
                      1000 metrekarelik yeni ve modern merkez binası<br></br>
                      devreye alındı. Yine aynı yıl portföyde <br></br> bulunan
                      ürünler 10 bin metrekare kullanım alanlı <br></br> iki
                      depo ile dağıtılmaya başlandı.
                    </span>
                  </div>
                  <div></div>
                  <div className={"item-box"}>
                    <span className={"elipse"}>2015</span>
                    <span className={"text"}>
                      Kocaeli lokasyonunda 3500 m2 ‘lik üretim tesisi kuruldu .
                    </span>
                  </div>
                  <div></div>
                  <div></div>
                  <div className={"item-box odd"}>
                    <span className={"elipse"}>2020</span>
                    <span className={"text"}>
                      7500 m2 ve 10.540 palet kapasiteli yeni <br></br>merkezine
                      taşındı.
                    </span>
                  </div>
                  <div></div>
                </div>
              </Container>
            </section>
          </div>
        </Layout>
      </div>
    );
  }
}
