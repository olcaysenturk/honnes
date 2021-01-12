import Header from "./Header";
import Footer from "./Footer";
import Script from "./Script";
import Head from "next/head";

function Layout({ children }) {
  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Honnes Sağlık ve Endüstriyel Ürünler"/>
        <meta name="keywords" content="Bgood,Alpheta,Banduff,Clivex"/>
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
      <Script />
    </div>
  );
}

export default Layout;
