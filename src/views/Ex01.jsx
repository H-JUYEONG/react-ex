//import 라이브러리
import React from 'react';
import { Link } from 'react-router-dom';


import '../css/ex01.css';
//주석
/*
주석
*/

//자바스크립트 객체
let cssex = {
    width: '20px'
}

let name ="황일영";


let cssex2 = {fontSize: '40px', fontWeight: 'bold'}

const Ex01 = () => {

    return (
        <>
            {/*주석*/}
            <h1 className="title">정우성 홈페이지</h1>
            <h1 style={ {fontSize: '40px', fontWeight: 'bold'} } >{name} 홈페이지</h1>

            <img src="./images/jws.jpg" alt="정우성사진" />
            <br/>
            <a href="http://localhost:3001/ex00">정우성 위키백과 바로가기</a>
            <br/>
            <Link to="http://localhost:3001/ex00" rel="noreferrer noopener">정우성의 위키백과 바로가기2</Link>
            <table border="1">
                <colgroup>
                    <col style={ {width: '100px'} } />
                    <col style={ {width: '100px'} } />
                    <col style={ {width: '100px'} } />
                    <col style={ cssex2 } />
                </colgroup>

                <tbody>
                    <tr>
                        <td>1,1</td>
                        <td>1,2</td>
                        <td>1,3</td>
                        <td>1,4</td>
                    </tr>
                    <tr>
                        <td rowSpan="2">2,1</td>
                        <td colSpan="2">2.2</td>
                        <td>2.4</td>
                    </tr>
                    <tr>
                        
                        <td>3,2</td>
                        <td>3,3</td>
                        <td>3,4</td>
                    </tr>
                </tbody>
            </table>
            <br/>
            <br/>

            <div>
                <label htmlFor="txt-name">이름</label>
                <input id="txt-name" type="text" name=""  value=""/>     
            </div>
            <div>
                <label htmlFor="rdo-dog">강아지</label>
                <input id="rdo-dog" type="radio" name="pet"/>
                <br/>
                <label htmlFor="rdo-cat">고양이</label>
                <input id="rdo-cat" type="radio" name="pet"/>
            </div>



            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </>
    );
}

export default Ex01;