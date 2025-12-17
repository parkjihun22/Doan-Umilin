import React, { useEffect, useState } from "react";
import styles from "./Bener.module.scss";
import img from "../../assets/Bener/bener.jpg";

const Bener = ({ title }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    // 이미지가 로드된 후 애니메이션 시작
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true); // 이미지 로딩 후 애니메이션을 시작
        }, 100); // 0.1초 후에 애니메이션을 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
            {/* 배너 이미지 */}
            <img
                className={`${styles.benerImage} ${isLoaded ? styles.showImage : ''}`}
                src={img}
                alt="도안우미린트리쉐이드임대-benerimage"
            />
            <div className={styles.overlay}></div>
            <div
                className={`${styles.contents} ${isLoaded ? styles.showContents : ''}`}
            >
                <div
                    className={`${styles.title} ${isLoaded ? styles.showTitle : ''}`}
                >
                    {title}
                </div>
                {contents(title, isLoaded)}
            </div>
        </div>
    );
};

export default Bener;

const contents = (text, isLoaded) => {
  if (
    text === '두산위브' ||
    text === '홍보영상' ||
    text === '체크포인트' ||
    text === '당첨자서류안내' ||
    text === '도안우미린트리쉐이드임대'
  ) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          일상의 깊이를 더하는 숲속 프리미엄 라이프.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          도안신도시 중심, 트램 예정·광역 교통망으로 완성되는 생활 접근성.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          우미린 브랜드가 선보이는 도안 우미린 트리쉐이드 임대.
        </div>
      </>
    );
  } else if (
    text === '사업개요' ||
    text === '세대안내' ||
    text === '인테리어' ||
    text === '청약안내' ||
    text === '모집공고안내' ||
    text === '인지세납부안내'
  ) {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          도안신도시의 새로운 기준, 우미린 트리쉐이드 임대.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          도안대로·도시철도 2호선(예정)으로 연결되는 대전 핵심 생활권.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          우미린 브랜드가 제안하는 안정적인 프리미엄 임대 주거.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          도안 우미린 트리쉐이드 임대
        </div>
      </>
    );
  } else if (text === '입지환경' || text === '프리미엄') {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          교통·교육·자연을 모두 품은 도안신도시 중심 입지.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          트램 예정, 학군·공원·생활 인프라까지 한 번에 누리는 도안 우미린 트리쉐이드 임대.
        </div>
      </>
    );
  } else if (text === '단지안내') {
    return (
      <>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          자연과 조화를 이루는 우미린만의 단지 설계.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          지상 차 없는 공원형 단지, 여유로운 동선과 쾌적한 주거 환경.
        </div>
        <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
          도안신도시 중심에서 만나는 우미린 트리쉐이드 임대.
        </div>
      </>
    );
  }
};

  
