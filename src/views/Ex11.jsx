import React from "react";
import { useSearchParams } from "react-router-dom";

const Ex11 = () => {

  // 상태관리 변수들(값이 변하면 화면 렌더링)
  const [searchParams] = useSearchParams();

  // 일반변수
  const strNo = searchParams.get("no");
  const intNo = Number(strNo);

  console.log(intNo);

  // 일반 메소드
  const getImgTag = (no) => {
    if (no === 1) {
      console.log("1번그림");
      return <img src="./images/01.png" alt="숫자1" />;

    } else if (no === 2) {
      console.log("2번그림");
      return <img src="./images/02.png" alt="숫자2" />;

    } else if (no === 3) {
      console.log("3번그림");
      return <img src="./images/03.png" alt="숫자3" />;

    } else if (no === 4) {
      console.log("4번그림");
      return <img src="./images/04.png" alt="숫자4" />;

    } else {
      console.log("그림 없음");
      return <p>그림 없음</p>;
    }
  };

  return <>
  {getImgTag(intNo)}
  </>;
};

export default Ex11;
