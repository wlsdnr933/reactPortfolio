import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TimerComponent from './timer';
/* className css를 넣기위한 클래스다 */
function App() {

  // var [a,b] =  [10, 100];

 let [title, title변경] = useState(['남자 코트 추천','강남 우동 맛집','파이썬 독학']);
 let [글제목2, 글제목변경2] = useState(['남자 코트 추천2', '강남 우동 맛집']);
  
 let [따봉, 따봉변경] = useState(0);
 let posts = '강남 고기 맛집';
  function 함수(){
    return 100
  }
  function title바꾸기(){
    var newArray = [...title]; //복사 < [...제목] , 제목 > 값공유
    newArray[0] = '여자코트 추천';
    title변경( newArray );
  }

  return (
    <div className="App">
      <div className="black-nav"> 
        <div className={ posts }>개발 Blog</div>
        <div style={ { color : 'blue', fontsize : '30px' } }>개발 Blog</div>
      </div>
      <img src ={ logo } />
      <h4>{  함수() }</h4>
      <div className='list'>
        <h3>{posts}</h3>
         <h3>{ 글제목2[0] }</h3>
         <h3>{ 글제목2 }</h3>
        <p>2월 17일 발행</p>
        <hr/>
        <div className='title'>
          <button onClick={ title바꾸기 }>버튼</button>
          <h3>{ title[0] }<span onClick={ () => { 따봉변경(따봉+1) }}>♥</span> { 따봉 }</h3>
          <p>날짜</p>
          <hr/>
          <h3>{ title[1] }</h3>
          <p>날짜</p>
          <hr/>
          <h3>{ title[2] }</h3>
          <p>날짜</p>
          <hr/>
          <TimerComponent />
        </div>
        
        <Modal />
        
      </div>
    </div>
    );
  }
      function Modal() {
        return(
          <div className='modal'>
          <h2>제목</h2>
          <p>날짜</p>
          <p>상세내용</p>
        </div>
        )
      }
  

export default App;
