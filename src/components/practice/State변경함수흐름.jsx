import React, { useEffect, useState } from "react";

/*
 * 동기 방식과 비동기 방식의 차이
 * 동기 방식 : 코드의 결과를 기다린 후 다음 코드를 진행
 * 비동기 방식 : 코드의 결과를 기다리지 않고 다음 코드를 진행
 * 비동기 방식으로 동작되는 대표들 : ★ state 변경함수, axios ★
 *
 * ★ state 변경 함수는 모든 코드 해석 후 마지막에 일괄 처리한다 ★
 * ★ 때문에 state 변경함수가 여러 줄 실행되도 한번만 재렌더링 한다. ★
 *
 */
const State변경함수흐름 = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  // 1번
  // useEffect(() => {
  //   console.log(num1);
  //   //비동기 방식으로 진행
  //   setNum1(num1 + 1); //1-1.진행만시킴
  //   console.log(num1); //1-2. 위코드결과 기다리지않고 진행 후 결과
  // }, []);

  // 2번
  useEffect(() => {
    //2-1. 진행이되면 ↴
    console.log(1);
    setNum1(num1 + 1); //2-2. 이 코드가 실행되고 진행되면 ↴
    console.log(2);
    setNum1(num1 + 1); //2-3. 이 코드는 실행안됨
    console.log(3);
  }, []);

  console.log("리렌더!");

  return (
    <>
      <div>State변경함수흐름</div>
      <h3>{num1}</h3>
      <h3>{num2}</h3>
    </>
  );
};

export default State변경함수흐름;

/*
 나머지코드(동기방식)들은 평소대로해도되지만 state, axios는 주의해야함
 코드의 흐름을 알고 결과가 나온이유를 항상 습관적으로 생각해야함
 */
