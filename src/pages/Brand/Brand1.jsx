import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from './Brand.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/Brand/intro/page1.jpg";

const Brand1 = () => {
    const menuContents = [{ title: "브랜드 소개", url: "/brand/intro" }, { title: "홍보 영상", url: "/brand/video" }];
    const [isScroll, setIsScroll] = useState(false);
    const [isTextVisible, setIsTextVisible] = useState(false); // 텍스트 애니메이션 상태
    const [isImageVisible, setIsImageVisible] = useState(false); // 이미지 애니메이션 상태
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 0);
            // 스크롤 시 이미지와 텍스트 애니메이션을 트리거
            if (window.scrollY > 200) {
                setIsImageVisible(true); // 이미지가 보이도록
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsTextVisible(true); // 메뉴 클릭 시 텍스트가 보이도록
        }, 500); // 딜레이를 두고 텍스트 애니메이션 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
<Helmet>
  <title>도안 우미린 트리쉐이드 임대 - 브랜드 소개</title>
  <meta
    name="description"
    content="우미린 브랜드의 철학과 가치를 소개합니다. 신뢰를 바탕으로 한 품질 기준과 특화 설계, 커뮤니티·서비스를 통해 주거의 가치를 높이는 도안 우미린 트리쉐이드 임대."
  />
  <link rel="canonical" href="https://www.apay.co.kr/Brand/intro" />
  <meta name="robots" content="index,follow" />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="도안 우미린 트리쉐이드 임대" />
  <meta property="og:title" content="도안 우미린 트리쉐이드 임대 - 브랜드 소개" />
  <meta
    property="og:description"
    content="우미린 브랜드 소개: 신뢰를 바탕으로 한 품질, 자연과 조화를 이루는 설계, 프리미엄 주거 가치를 제안하는 도안 우미린 트리쉐이드 임대."
  />
  <meta property="og:url" content="https://www.apay.co.kr/Brand/intro" />
  <meta property="og:image" content="https://www.apay.co.kr/images/og/main.jpg" />
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />

<Bener title="브랜드 소개" />

<MenuBar contents={menuContents} />

{/* SEO 최적화용 h1 */}
<h1 className={styles.screenReaderOnly}>
  도안 우미린 트리쉐이드 임대 - 브랜드 소개
</h1>

<p className={styles.screenReaderOnly}>
  도안 우미린 트리쉐이드 임대는 신뢰와 품질을 바탕으로 한 우미린 브랜드의
  주거 철학을 담았습니다. 자연과 조화를 이루는 설계, 안정적인 임대 시스템,
  세심한 공간 계획을 통해 쾌적하고 안전한 주거 환경을 제공합니다.
  지속적인 품질 관리와 고객 중심 가치로 미래 지향적인 주거 기준을 제시합니다.
</p>

<div className={`${styles.textBox} ${isTextVisible ? styles.active : ''}`}>
  <div>자연과 도시를 잇는 주거의 기준</div>
  <div>도안 우미린 트리쉐이드 임대</div>
</div>


            <img className={`${styles.image} ${isImageVisible ? styles.visible : ''}`} src={page1} alt="도안우미린트리쉐이드임대brand-Image1" />

            <Footer />
        </div>
    );
}

export default Brand1;
