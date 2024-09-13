//import 라이브러리
import React, {useState} from 'react';
//import 컴포넌트
//import css

const Ex07 = () => {

    /*---상태관리 변수들(값이 변화면 화면 랜더링)  ----------*/
    const [no, setNo] = useState(0);

    //let sum = plus(3, 5)
    /*---일반 메소드 --------------------------------------------*/
    /*---생명주기 + 이벤트 관련 메소드 ----------------------*/
    const handlePlus = ()=>{
        setNo(function(prevNo){
            return prevNo+1;
        });
    };

    const handleMinus = ()=>{
        setNo((prevNo)=>{
            return prevNo-1;
        });
    };

    const handleInit = ()=>{
        setNo(0);
        //no = 0;
    };

    return (
        <>
            {no}
            <br/>
            <button type="button" onClick={handlePlus} >더하기</button>
            <br/>
            <button type="button" onClick={handleMinus}>빼기</button>
            <br/>
            <button type="button" onClick={handleInit} >초기화</button>
        </>
    );
}

export default Ex07;