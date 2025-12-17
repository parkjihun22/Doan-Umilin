import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import Ready from "../../components/Ready/Ready";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";
import { Helmet } from "react-helmet-async";
import page1 from "../../assets/LocationEnvironment/LocationEnvironment2/page1.jpg";


const LocationEnvironment1 = () => {
  const menuContents = [
    // { title: "입지 안내영상", url: "/FloorPlan/videos" },
    { title: "입지안내", url: "/LocationEnvironment/intro" },
    { title: "프리미엄", url: "/LocationEnvironment/primium" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation(); // 현재 경로를 가져옴

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
  }, [pathname]); // pathname이 변경될 때마다 실행

  // 화면 스크롤이 탑이 아니면 isScroll 값 true로 변환
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
<Helmet>
  <title>도안 우미린 트리쉐이드 임대- 프리미엄</title>
  <meta
    name="description"
    content="도안 우미린 트리쉐이드 임대 프리미엄을 확인하세요. 총 1,754세대 대규모 브랜드 단지, 지상 차 없는 공원형 설계, 도안대로·유성대로 교통망과 도시철도 2호선 트램(예정) 호재, 커뮤니티 특화, 공원·수변공간 등 쾌적한 자연환경의 핵심 가치를 안내합니다."
  />
  <link rel="canonical" href="https://www.apay.co.kr/LocationEnvironment/primium" />
  <meta name="robots" content="index,follow" />
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />

<Bener title="프리미엄" />

<MenuBar contents={menuContents} />
{/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
<h1 className={styles.screenReaderOnly}>
  도안 우미린 트리쉐이드 임대- 프리미엄
</h1>
<p className={styles.screenReaderOnly}>
  도안 우미린 트리쉐이드 임대만의 프리미엄을 만나보세요. 공원형 단지 설계와
  브랜드 커뮤니티, 도안대로·유성대로 등 교통망과 도시철도 2호선 트램(예정)으로
  확장되는 접근성, 공원·수변공간 등 쾌적한 자연환경을 더해 일상의 품격을 높입니다.
</p>

<div className={styles.textBox}>
  <div>도안신도시 중심에서 누리는 프리미엄</div>
  <div>도안 우미린 트리쉐이드 임대의 프리미엄을 누리세요.</div>
</div>


      <img
        src={page1}
        className={styles.image3}
        alt="도안우미린트리쉐이드임대-image1"
      />

      <Footer />
    </div>
  );
};

export default LocationEnvironment1;
