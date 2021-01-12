import React, { Component } from "react";
import { Container, Media } from "reactstrap";
import HamburgerMenu from "react-hamburger-menu";
import Link from 'next/link'

export default class Header extends Component {
  handleClick() {
    this.setState({
      open: !this.state.open,
    });
  }
  componentWillMount() {
    this.setState({ open: false });
  }
  render() {
    return (
      <div>
        <div className="Header">
          <Container>
            <div className={"logo"}>
              <a href="/">
                <Media
                  object
                  src={"/static/cdn/images/logo.png"}
                  width={160}
                  alt="Logo"
                />
              </a>
            </div>
            <div className={"main-menu-box"}>
              <ul className={"main-menu"}>
                <li className="item">
                <Link href="/">
                  <a>Anasayfa</a>
                  </Link>
                </li>
                <li className="item sub no-bg">
                  Kurumsal <span className="menu-plus"></span>
                  <div className={"sub-menu"}>
                    <div className={"sub-menu-item-box"}>
                      <div className={"sub-menu-item"}>
                        <a href="/hakkimizda">Hakkımızda</a>
                      </div>

                      <div className={"sub-menu-item"}>
                        <a href="/yonetim-kadrosu">Yönetim Kadrosu</a>
                      </div>
                      <div className={"sub-menu-item"}>
                        <a href="/belgelerimiz">Belgelerimiz</a>
                      </div>
                      <div className={"sub-menu-item"}>
                        <a href="/haberler-videolar">Haberler ve Videolar</a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="item">
                  <a href="/markalar">Markalar</a>
                </li>
                <li className="item">
                  <a href="/marka-detay">Ürünler</a>
                </li>
                <li className="item">
                  <a href="/kariyer">Kariyer</a>
                </li>
                <li className="item">
                  <a href="/satis-noktalari">Satış Noktaları</a>
                </li>
                <li className="item">
                  <a href="/iletisim">İletişim</a>
                </li>
                <li className="item find-area">
                  <span className={"find-ico"}>Arama</span>
                  <div className={"sub-menu item animate__animated"}>
                    <div className={"sub-menu-item-box"}>
                      <Container>
                        <input
                          type={"text"}
                          placeholder={"Arama yapacağınız kelimeyi yazınız"}
                        />
                        <span className={"find-ico"}></span>
                        <span className={"find-close"}>X</span>
                      </Container>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <HamburgerMenu
              className={"hamburger-menu"}
              isOpen={this.state.open}
              menuClicked={this.handleClick.bind(this)}
              width={30}
              height={20}
              strokeWidth={2}
              rotate={0}
              color="black"
              borderRadius={0}
              animationDuration={0.8}
            ></HamburgerMenu>
          </Container>
        </div>
      </div>
    );
  }
}
