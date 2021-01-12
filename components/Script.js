import React, { useEffect } from "react";

export default function Scroll() {
  useEffect(function mount() {
    const scrollToElement = () => {
      let element = document.querySelector(`.WeInPress`);
      let menuEl = document.querySelectorAll(`.toNews`);
      let pageUrl = window.location.href;
      menuEl.forEach(function (item) {
        item.addEventListener("click", function () {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
          });
        });
      });
      if (pageUrl.includes("page=basinda-biz")) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }
    };

    const scrollAnimate = () => {
      let menuEl = document.querySelectorAll(`.animate__animated`);
      menuEl.forEach(function (item) {
        let topPositionItem = item.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;
        if (
          topPositionItem < windowHeight &&
          !item.classList.contains("animate__fadeIn")
        ) {
          item.classList.add("animate__fadeIn");
        }
      });
    };

    const findClick = () => {
      let findEl = document.querySelectorAll(`.find-ico`);
      let findAreaEl = document.querySelector(`.find-area .sub-menu`);
      let closeBtn = document.querySelector(".find-close");
      let classes = findAreaEl ? findAreaEl.classList : "";
      if (findEl) {
        findEl.forEach(function (item) {
          item.addEventListener("click", function () {
            classes.toggle("open");
            classes.toggle("animate__slideInLeft");
          });
        });
      }
      if (closeBtn) {
        closeBtn.addEventListener("click", function () {
          classes.toggle("open");
          classes.toggle("animate__slideInLeft");
        });
      }
    };

    const mobilMenu = () => {
      const hamburgerMenu = document.querySelector(".hamburger-menu");
      const menuEl = document.querySelector(".main-menu-box");
      if (hamburgerMenu) {
        hamburgerMenu.addEventListener("click", function () {
          menuEl.classList.toggle("open");
          document
            .getElementsByTagName("BODY")[0]
            .classList.toggle("no-scroll");
        });
      }
    };

    const mobilMenuItemOpen = () => {
      if (window.innerWidth < 768) {
        const menuEl = document.querySelectorAll(
          ".Header .main-menu .item.sub"
        );
        menuEl.forEach(function (item) {
          item.addEventListener("click", function (e) {
            item.querySelector(".sub-menu").classList.toggle("open");
            item.querySelector(".menu-plus").classList.toggle("open");
          });
        });
      }
    };

    const managementList = () => {
      const managementList = document.querySelectorAll(".grid .grid__item"),
        managementDesc = document.querySelectorAll(".grid .grid__description"),
        managementClose = document.querySelectorAll(".grid .close-btn"),
        managementRight = document.querySelectorAll(".grid .right"),
        managementLeft = document.querySelectorAll(".grid .left");

      managementLeft.forEach(function (item) {
        item.addEventListener("click", function () {
          let tabIndex = item.parentElement.parentElement.dataset.tab;
          tabActive(tabIndex, "prev");
        });
      });

      managementRight.forEach(function (item) {
        item.addEventListener("click", function () {
          let tabIndex = item.parentElement.parentElement.dataset.tab;
          tabActive(tabIndex, "next");
        });
      });

      function tabActive(indexEl, status) {
        closeManagement();
        if (
          status === "next" &&
          indexEl < parseInt(managementList.length) + 1
        ) {
          let i = parseInt(indexEl) + 1;
          managementList.forEach(function (item, index) {
            if (index + 1 === i) {
              item.classList.add("active");
            }
          });
          managementDesc.forEach(function (item, index) {
            if (index + 1 === i) {
              item.classList.add("active");
            }
          });
        }

        if (status === "prev" && indexEl > 1) {
          let i = parseInt(indexEl) - 1;
          managementList.forEach(function (item, index) {
            if (index + 1 === i) {
              item.classList.add("active");
            }
          });
          managementDesc.forEach(function (item, index) {
            if (index + 1 === i) {
              item.classList.add("active");
            }
          });
        }
      }

      managementClose.forEach(function (item) {
        item.addEventListener("click", function () {
          closeManagement();
        });
      });

      managementList.forEach(function (item) {
        item.addEventListener("click", function () {
          closeManagement();

          item.classList.add("active");
          let a = item.nextSibling;
          a.classList.add("active");
        });
      });

      function closeManagement() {
        managementDesc.forEach(function (item) {
          item.classList.remove("active");
        });

        managementList.forEach(function (item) {
          item.classList.remove("active");
        });
      }
    };

    const tabClick = () => {
      const tabEl = document.querySelectorAll(".react-tabs__tab");
      tabEl.forEach(function (item) {
        item.addEventListener("click", function () {
          setTimeout(() => {
            videoLb();
          }, 1000);
        });
      });
    };

    

    const videoLb = () => {
      const images = document.querySelectorAll(".lb-area");
      const lbBg = document.querySelector(".lb-bg");
      const lbBox = document.querySelector(".lb-box");
      const lbBoxImg = document.querySelector(".lb-box img");
      const lbBoxClose = document.querySelector(".lb-box .close");
      const lbBoxVideo = document.querySelector(".lb-box iframe");
    
      images.forEach(function (item) {
        item.addEventListener("click", function () {
          let imageSrc = item.querySelector("img");
          lbBg.style.display = "block";
          lbBox.style.display = "block";
          if (item.dataset.image) {
            lbBoxImg.style.display = "block";
            lbBoxImg.src = imageSrc.dataset.image;
          } else {
            lbBoxVideo.style.display = "block";
            lbBoxVideo.src = imageSrc.dataset.video;
          }
        });
      });
      if (lbBg || lbBoxClose) {
        lbBg.addEventListener("click", function () {
          closeFrame();
        });
        lbBoxClose.addEventListener("click", function () {
          closeFrame();
        });
        function closeFrame() {
          lbBg.style.display = "none";
          lbBox.style.display = "none";
          lbBoxVideo.style.display = "none";
          lbBoxImg.style.display = "none";
    
          lbBoxImg.src = "";
          lbBoxVideo.src = "";
        }
      }
    };

    const homepageVideo = () => {
      let videoArrow = document.querySelector(".down-arrow");
      if (videoArrow) {
        videoArrow.addEventListener("click", function () {
          window.scrollTo(0, window.innerHeight);
        });
      }
    };

    const pauseVideo = () => {
      let playButton = document.querySelectorAll(".playPause")[0];

      if (window.innerWidth > 767 && playButton) {
        let videoEl = document.querySelectorAll(".fullscreen-bg")[0];
        let topPositionItem = videoEl.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;
        if (
          topPositionItem < -windowHeight &&
          !videoEl.classList.contains("disable")
        ) {
          console.log("play");
          videoEl.classList.add("disable");
          playButton.click();
        }
        
        if (
          topPositionItem - 110 > 0 &&
          videoEl.classList.contains("disable")
        ) {
          console.log("play");
          videoEl.classList.remove("disable");
          playButton.click();
        }
      }
    };

    const contactMaps = () => {
      if(document.getElementById('maps')){
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCK5Emc18o2VaHeJzls5hRUWzSZqECrwMI&amp;callback=initMap';
        document.getElementsByTagName('head')[0].appendChild(script);
        
        setTimeout(() => {
          const uluru = { lat:  40.855419451654235, lng: 29.37492682674417 };
          const map = new google.maps.Map(
              document.getElementById('maps'), { zoom: 19, center: uluru });
          const marker = new google.maps.Marker({ position: uluru, map: map });
        }, 1000);
      }
    }

    const otherFlag = () => {
      const buttonFlag = document.querySelectorAll(".other-flag");
      buttonFlag.forEach(function(item){
        item.addEventListener("click", function(el){
          hideItem()
        })
      });

      function hideItem(){
        const itemFlag = document.querySelectorAll(".sellingPoints .item");
        itemFlag.forEach(function(item){
          item.style.display = "block"
        });
      }
    }

    scrollToElement();
    findClick();
    mobilMenu();
    scrollAnimate();
    mobilMenuItemOpen();
    managementList();
    tabClick();
    homepageVideo();
    contactMaps();
    videoLb();
    otherFlag()

    window.addEventListener("scroll", (e) => {
      scrollAnimate();
      pauseVideo();
    });
  });

  return null;
}
