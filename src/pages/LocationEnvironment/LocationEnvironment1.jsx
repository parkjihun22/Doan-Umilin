import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import LocationSectionBox from "../../components/LocationSectionBox/LocationSectionBox";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import section2Image1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import section2Image2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import section2Image3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import section2Image4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import section2Image5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import section2Image6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";

const LocationSection = [
  {
    img: section2Image1,
    titleText: "도안신도시 중심 개발 프리미엄<br />완성형 미래가치 입지",
    contentText:
      "도안신도시 핵심 생활권·주거·상업 인프라 집약<br />대전 서남부 신흥 주거 중심지로의 성장 가치",
  },
  {
    img: section2Image2,
    titleText: "의료 인프라 프리미엄<br />안심 건강케어 생활권",
    contentText:
      "건양대병원 등 주요 의료시설 인접<br />유성·둔산 생활권과 연계된 우수한 의료 접근성",
  },
  {
    img: section2Image3,
    titleText: "광역 교통망 & 트램 호재<br />대전 전역 접근성 강화",
    contentText:
      "도안대로·유성대로로 도심 이동 편리<br />도시철도 2호선 트램(예정)으로 미래 교통 가치",
  },
  {
    img: section2Image4,
    titleText: "생활 인프라 접근성<br />원스톱 도심 생활권",
    contentText:
      "대형마트·상업시설·행정 인프라 인접<br />교육·쇼핑·문화가 가까운 편리한 생활 환경",
  },
  {
    img: section2Image5,
    titleText: "대규모 브랜드 단지<br />총 1,754세대 우미린",
    contentText:
      "지하 4층~지상 38층, 11개동 규모 대단지<br />피트니스·골프·라운지 등 커뮤니티 특화 설계",
  },
  {
    img: section2Image6,
    titleText: "자연·휴식 인프라<br />도심 속 힐링 라이프",
    contentText:
      "근린공원·수변공간 등 쾌적한 자연 환경<br />산책과 여유를 누리는 도안신도시 라이프",
  },
];





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
  {/* 페이지별 메타: title/description/og/canonical 만 관리 */}
  <title>도안 우미린 트리쉐이드 임대 - 입지환경</title>
  <meta
    name="description"
    content="도안신도시 중심 입지, 도안 우미린 트리쉐이드 임대의 입지환경을 확인하세요. 도안대로·유성대로 등 교통망과 도시철도 2호선 트램(예정) 호재, 대형마트·상업시설·의료 인프라, 공원·수변공간 등 쾌적한 자연환경까지."
  />
  <meta name="robots" content="index,follow" />
  <link rel="canonical" href="https://www.apay.co.kr/LocationEnvironment/intro" />

  {/* Open Graph */}
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="도안 우미린 트리쉐이드 임대" />
  <meta property="og:title" content="도안 우미린 트리쉐이드 임대 - 입지환경" />
  <meta
    property="og:description"
    content="도안신도시 중심 입지: 도안대로·유성대로 등 교통망과 도시철도 2호선 트램(예정), 생활·의료 인프라, 공원·수변공간까지 누리는 도안 우미린 트리쉐이드 임대."
  />
  <meta property="og:url" content="https://www.apay.co.kr/LocationEnvironment/intro" />
  <meta property="og:image" content="https://www.apay.co.kr/img/og/location.jpg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="도안 우미린 트리쉐이드 임대 - 입지환경" />
  <meta
    name="twitter:description"
    content="도안대로·유성대로 교통망과 도시철도 2호선 트램(예정)으로 확장되는 접근성, 생활·의료 인프라와 공원·수변공간까지 갖춘 도안신도시 중심 입지."
  />
  <meta name="twitter:image" content="https://www.apay.co.kr/img/og/location.jpg" />
  <meta name="twitter:url" content="https://www.apay.co.kr/LocationEnvironment/intro" />

  {/* JSON-LD (대표 이미지/브레드크럼 포함) */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "도안 우미린 트리쉐이드 임대 - 입지환경",
      "url": "https://www.apay.co.kr/LocationEnvironment/intro",
      "description":
        "도안신도시 중심 입지, 도안대로·유성대로 등 교통망과 도시철도 2호선 트램(예정) 호재, 생활·의료 인프라, 공원·수변공간 등 자연환경을 갖춘 도안 우미린 트리쉐이드 임대의 입지환경.",
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "contentUrl": "https://www.apay.co.kr/img/og/location.jpg",
        "width": 1200,
        "height": 630
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://www.apay.co.kr/" },
          { "@type": "ListItem", "position": 2, "name": "입지환경", "item": "https://www.apay.co.kr/LocationEnvironment/intro" }
        ]
      }
    })}
  </script>
</Helmet>

<Header isChanged={isScroll} />
<FixIcon />

<Bener title="입지환경" />

<MenuBar contents={menuContents} />

{/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
<h1 className={styles.screenReaderOnly}>
  도안 우미린 트리쉐이드 임대 - 입지안내
</h1>
<p className={styles.screenReaderOnly}>
  도안 우미린 트리쉐이드 임대의 입지 정보를 확인하세요.
  도안대로·유성대로 등 주요 도로망과 도시철도 2호선 트램(예정) 호재로 확장되는 교통 접근성,
  대형마트·상업시설·의료 인프라 등 편리한 생활환경,
  공원·수변공간을 가까이 누리는 쾌적한 주거 입지를 갖추고 있습니다.
</p>

<div className={styles.textBox}>
  <div>갈수록 편리해질 도안신도시</div>
  <div>살수록 높아질 우미린의 가치</div>
  <div>도시를 압도할 자부심, 도안 우미린 트리쉐이드 임대</div>
</div>


      <img
        src={page1}
        className={styles.image2}
        alt="도안우미린트리쉐이드임대입지환경-image1"
      />

      <div className={styles.section2}>
        {LocationSection.map((value, idx) => (
          <LocationSectionBox
            image={value.img}
            title={value.titleText}
            text={value.contentText}
          />
        ))}
      </div>

      <div className={styles.commonBox}>
        <div className={styles.notice}>
          ※본 홍보물의 내용과 지역도는 소비자의 이해를 돕기 위한 것으로, 개발 예정•계획 및 교통, 학교 계획 등에 관한 사항은 해당 기관의 아래 자료를 토대로 제작되었습니다. 사업계획 및 일정은 개발계획별 사업주체에 의해 변경될 수 있으며, 도안우미린트리쉐이드임대사업주체 및 시공사와 무관합니다.
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LocationEnvironment1;
