//import 라이브러리
import React, {useEffect} from 'react';

const Ex14 = () => {
    
    /*---상태관리 변수들(값이 변화면 화면 랜더링 )-----*/

    /*---일반변수-----------------------------------*/
     
    /*---일반 메소드 -------------------------------*/
    
    /*---생명주기 + 이벤트 관련 메소드(handle메소드)--*/
    useEffect(()=>{
        console.log("마운트될때");
    }, []);  //[]마운트될때  

    return (   
        <>
            <button type="button" >버튼</button>
        </>
    );
}

export default Ex14;