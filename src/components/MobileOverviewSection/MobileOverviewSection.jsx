// src/components/MobileOverviewSection/MobileOverviewSection.jsx

import React, { useState, useEffect } from "react";
import styles from "./MobileOverviewSection.module.scss";

// 1) 모바일 메인 히어로 이미지
import heroImage from "../../assets/Main/heroImage.jpg";
// 2) 입지환경 지도
import mobileMap from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import mobileMap2 from "../../assets/LocationEnvironment/LocationEnvironment2/page2.jpg";
// 3) 프리미엄 슬라이드 이미지들
import slide1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import slide2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import slide3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import slide4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import slide5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import slide6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";

const items = [
  {
    key: "overview",
    label: "사업개요",
    content: (
      <ul className={styles.detailList}>
        <li>
          <strong>사업명</strong>
          <span>도안 우미린 트리쉐이드 임대</span>
        </li>
        <li>
          <strong>대지위치</strong>
          <span>대전광역시 유성구 도안신도시 일원</span>
        </li>
        <li>
          <strong>건축규모</strong>
          <span>지하 4층 ~ 지상 38층, 총 11개동</span>
        </li>
        <li>
          <strong>주택형</strong>
          <span>전용 84㎡ 중심 (중대형 위주)</span>
        </li>
        <li>
          <strong>세대수</strong>
          <span>총 1,754세대 (민간임대 379세대 포함)</span>
        </li>
      </ul>
    ),
  },
  
  
  {
    key: "location",
    label: "입지환경",
    content: (
      <div className={styles.mapGrid}>
        <img
          src={mobileMap}
          className={styles.mapImage}
          alt="입지환경 지도 1"
        />
        <img
          src={mobileMap2}
          className={styles.mapImage}
          alt="입지환경 지도 2"
        />
      </div>
    ),
  },
  {
    key: "premium",
    label: "프리미엄",
    content: (
      <>
        {/* 프리미엄 섹션 상단 문단 */}
        <div className={styles.premiumIntro}>
          <h3 className={styles.premiumTitle}>GREAT PREMIUM</h3>
          <p className={styles.premiumSubtitle}>
            도안신도시 생활중심과 학세권을 누리는<br />
            도안우미린트리쉐이드임대프리미엄 라이프
          </p>
        </div>
        {/* 슬라이더 */}
        <PremiumSlider />
      </>
    ),
  },
];

function PremiumSlider() {
  const slides = [
    {
      img: slide1,
      title: "도안신도시 중심 개발 프리미엄",
      desc:
        "도안신도시 핵심 입지, 완성형 생활 인프라<br/>주거·상업·공공시설이 어우러진 계획도시<br/>대전 서남부 신흥 주거 중심지 가치",
    },
    {
      img: slide2,
      title: "의료·생활 인프라 접근성",
      desc:
        "건양대병원 등 주요 의료시설 인접<br/>유성·둔산 생활권과 가까운 의료 환경<br/>안심하고 누리는 안정적인 생활권",
    },
    {
      img: slide3,
      title: "광역 교통망과 트램 호재",
      desc:
        "도안대로·유성대로로 대전 전역 이동 편리<br/>도시철도 2호선 트램(예정)으로 접근성 강화<br/>광역 교통망 확장에 따른 미래 가치",
    },
    {
      img: slide4,
      title: "교육·생활 인프라 집약",
      desc:
        "단지 인근 학교 예정, 안심 통학 환경<br/>대형마트·상업시설·행정 인프라 인접<br/>교육과 생활을 모두 만족시키는 입지",
    },
    {
      img: slide5,
      title: "총 1,754세대 대규모 브랜드 단지",
      desc:
        "지하 4층~지상 38층, 총 11개동 규모<br/>전용 84㎡ 중심의 선호도 높은 구성",
    },
    {
      img: slide6,
      title: "우미린 브랜드 프리미엄",
      desc:
        "지상 차 없는 공원형 단지 설계<br/>우미건설 시공, 도안 우미린 트리쉐이드 임대",
    },
  ];
  

  const [current, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  const nextSlide = () =>
    setCurrent((c) => (c + 1 + slides.length) % slides.length);
  const prevSlide = () =>
    setCurrent((c) => (c - 1 + slides.length) % slides.length);

  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const handleTouchMove = (e) => setTouchEndX(e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStartX == null || touchEndX == null) return;
    const dist = touchStartX - touchEndX;
    if (dist > 50) nextSlide();
    else if (dist < -50) prevSlide();
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div
      className={styles.premiumSlider}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.slide}>
        <img src={slides[current].img} alt="" />
        <div className={styles.caption}>
          <h4
            dangerouslySetInnerHTML={{ __html: slides[current].title.replace(/\n/g, "<br/>") }}
          />
          <p
            dangerouslySetInnerHTML={{ __html: slides[current].desc }}
          />
        </div>
      </div>
      <div className={styles.dots}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={idx === current ? styles.dotActive : styles.dot}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default function MobileOverviewSection() {
  const [openKey, setOpenKey] = useState(null);
  const toggle = (key) => setOpenKey(openKey === key ? null : key);

  return (
    <section className={styles.overviewSection}>
      {/* ─── 헤더 영역 ─── */}
      <header className={styles.overviewHeader}>
        <div className={styles.preTitle}>BUSINESS</div>
        <div className={styles.line} />
        <h2 className={styles.mainTitle}>사업안내</h2>
      </header>

      {/* ─── 히어로 이미지 ─── */}
      <img src={heroImage} className={styles.heroImage} alt="단지 전경" />

      {/* ─── 아코디언 항목 ─── */}
      {items.map(({ key, label, content }) => (
        <div key={key} className={styles.accordionItem}>
          <button
            className={`${styles.accordionHeader} ${openKey === key ? styles.active : ""}`}
            onClick={() => toggle(key)}
          >
            <span className={styles.label}>{label}</span>
            <span className={`${styles.arrow} ${openKey === key ? styles.up : styles.down}`} />
          </button>
          {openKey === key && <div className={styles.accordionContent}>{content}</div>}
        </div>
      ))}
    </section>
  );
}
