import React from "react";

const Ex17 = () => {

 /*---라우터 관련-------------------------------*/

 /*---상태관리 변수들(값이 변화면 화면 랜더링 )---*/

 /*---일반 변수--------------------------------*/

 /*---일반 메소드 -----------------------------*/

 /*---훅(useEffect)+이벤트(handle)메소드-------*/

 const strArray = ['정우성', '이효리', '유재석'];

 // 배열에 있는 값 찾기
 let result = strArray.includes('이효리');
 console.log(result); // true
 let result2 = strArray.includes('차은우');
 console.log(result2); //false

 // 필터 사용
 let newArray = strArray.filter((name) => {
    return name !== '정우성' // true 새로운 배열에  추가
 });
 console.log(newArray);


//  strArray.map();

  return (
      <>

      
      </>
  );
};

export default Ex17;
