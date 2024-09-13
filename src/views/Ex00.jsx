import React from 'react';



const Ex00 = () => {
    
    let str = '';
    str += '<ul>';
    str += '    <li>사과</>';
    str += '    <li>오렌지</>';
    str += '    <li>바나나</>';
    str += '</ul>';
    console.log(str);

    const element = '<h1>안녕하세요</h1>'
    console.log(element);

    //html을 쉽게 작성할 수 있다
    const element2 = <h1>안녕하세요</h1>
    console.log(element2);                  

    return (
        <>
         <p>안녕하세요</p>
        </>
    );
}

export default Ex00;