//import 라이브러리
import React, {useState} from 'react';
//import 컴포넌트
//import css



const Ex06 = () => {

    //let no = 0;

    /*---상태관리 변수들(값이 변화면 화면 랜더링)  ----------*/
    let [no, setNo] = useState(0);
    let [name, setName] = useState('박명수');
    
    //let sum = plus(3, 5)

    /*---일반 메소드 --------------------------------------------*/
    /*---생명주기 + 이벤트 관련 메소드 ----------------------*/
    const handlePlus = ()=>{
        /*
        //값은 변경되지만 화면에는 반영안됨
        no = no + 1;
        console.log(no);
        */
        //
        //setNo(no+1);  // no값이 이전값이 아닐수도 있다
        setNo( (preNo)=>{
            return preNo + 1
        });

    };

    const handleNamePrint = ()=>{
        console.log('정우성-콘솔');
        setName('정우성-화면');
    };


    return (
        <>
            {no}
            <br/>
            <button type="button" onClick={handlePlus}>숫자증가</button>
            <br/>
            <br/>
            {name}<br/>
            <button type="button" onClick={handleNamePrint}>이름출력</button>

        </>
    );
}

export default Ex06;