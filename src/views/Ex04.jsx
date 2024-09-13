//import 라이브러리
import React from 'react';

const Ex04 = () => {

    let no = 0;

    /*---상태관리 변수들(값이 변화면 화면 랜더링)  ----------*/

    /*---일반 메소드 --------------------------------------------*/

    /*---생명주기 + 이벤트 관련 메소드 ----------------------*/
   
    /*
    //기명함수 
    function handleNamePrint(){
        console.log("정우성");
    }
    */
    /*
    //익명함수 --> 변수에 담아서 사용
    const handleNamePrint = function(){
        console.log("정우성");
    }
    */
    const handleNamePrint = ()=>{
        console.log("정우성");
    }

    const handlePlus = ()=>{
        no=no+1;  
        console.log(no);
    };


    return (
        <>
            <button type="button" onClick={handleNamePrint}>이름 출력</button>
            <br/>
            <button type="bttton" onClick={handlePlus}>숫자증가</button>
        </>
    );
}

export default Ex04;