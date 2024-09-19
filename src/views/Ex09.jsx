import React from "react";

const Ex09 = () => {
  const isLogin = true;

  return (
    <>
      {(isLogin === true) ? ("로그인된 화면") : ("로그인 안된 화면")}
      <br /><br />
      {
         (isLogin === true) ? (
          <ul>
            <li>로그인된 화면</li>
            <li>로그아웃 버튼</li>
            <li>회원정보수정 화면이동</li>
          </ul>
          ) : (
          <ul>
            <li>로그인 안된 화면</li>
            <li>로그인 버튼</li>
            <li>회원가입 화면이동</li>
          </ul>
          )
      }
     
    </>
  );
};

export default Ex09;
