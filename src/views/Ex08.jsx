import React, {useState} from "react";

const Ex08 = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  // 이메일 입력할때
  const handleEmailChange = (e) => {
    console.log(e.target.value, "현재 text 창의 value 값을 setEamil(화면반영)을 통해서 변수에 반영");
    console.log("email 변수의 값을 읽어서 value에 반영");
    setEmail(e.target.value );
  };

  // 패스워드 입력할때
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // 로그인할때
  const handleLogin = (e) => {

    // 이벤트 잡는다
    console.log("전송버튼 클릭");
    e.preventDefault();
    console.log("e.preventDefault() 기본기능 못하게함");
    console.log(e.target);

    // 데이터 수집 객체로 묶기
    console.log(email, password);
    const forValue = {
      email: email,
      password: password
    };
    console.log(forValue);

    // 전송
  };



  return (
    <>
      <form action="/ex01" method="get" onSubmit={handleLogin}>
        <div>
        <label htmlFor="txt-email">이메일</label>
        <input id="txt-email" type="text" name="" value={email} onChange={handleEmailChange} />
        </div>
        <div>
        <label htmlFor="txt-password">패스워드</label>
        <input id="txt-password" type="text" name="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit">로그인</button>
      </form>
    </>
  );
};

export default Ex08;
