import React from "react";

const Ex12 = () => {

  const totalCnt = 5;

  const personList= [
    {no: 1, name: '정우성', hp: '010-1111-1111'},
    {no: 2, name: '이효리', hp: '010-2222-2222'},
    {no: 3, name: '유재석', hp: '010-3333-3333'},
    {no: 4, name: '강호동', hp: '010-4444-4444'},
    {no: 5, name: '서장훈', hp: '010-5555-5555'}
  ];

  return (
      <>
      <table border="1">
        <thead>
          <tr>
            <td>번호</td>
            <td>pk</td>
            <td>이름</td>
            <td>핸드폰</td>
          </tr>
        </thead>
        <tbody>
          {
            personList.map((personVo, index) => {
              console.log("aaa");
              console.log(index);
              return (
                <tr>
                  <td>{totalCnt - index}</td>
                  <td>{personVo.no}</td>
                  <td>{personVo.name}</td>
                  <td>{personVo.hp}</td>
                </tr>
              )
            })
          }
          
        </tbody>
      </table>
      
      
      
      </>
  );
};

export default Ex12;
