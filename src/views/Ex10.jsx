import React, { useState } from "react";

const Ex10 = () => {
  // const isLogin = true;
  const [login, setLogin] = useState(true);

  const handleLoginChange = (e) => {
    setLogin((prevState) => !prevState);
  };

  return (
    <>
    <button type="button" value={login} onClick={handleLoginChange}>로그인 상태 변화</button>

    <br/>
    <br/>
    {(login === true) ? ("로그인된 화면") : ("로그인 안된 화면")}
    <br/>
    <br/>
    <br/>
    {
         (login === true) ? (
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

export default Ex10;
