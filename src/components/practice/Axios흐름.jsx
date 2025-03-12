import axios from "axios";
import React, { useEffect, useState } from "react";

const Axios흐름 = () => {
  //ex1)게시글 번호를 서버에서 받은 후,
  //받은 게시글 번호에 해당하는 댓글 목록 조회

  const [num, setNum] = useState(0);

  useEffect(() => {
    //num값이 바뀌었을때, 마운트 될때
    ////ex1-2) 받은 게시글 번호에 달린 댓글 목록 조회

    if (num != 0) {
      axios
        .get(`/api/replies/${num}`) //위axios가 실행만된거라 0나옴
        .then()
        .catch();
    }
  }, [num]);

  useEffect(() => {
    console.log("통신 전");

    //비동기 방식으로 진행
    axios //비동기로 진행되는 코드 ("얘 실행해!" 해놓고 다음코드 진행)
      .get("/api/test/1") //자바가서 실체
      .then((res) => {
        //"서버통신했으면~" 의미
        console.log("통신 성공");
        //서버에서 받은 게시글 번호를 num에 저장
        setNum(res.data); //ex1-1
      })
      .catch();

    // console.log('통신 후'); //비동기 다음에 있는 코드들 주의해야함
    // //통신하기전에 실행해버림 -> 통신한것을 보고싶을때 then에서 해야함
  }, []);

  return (
    <>
      <div>Axios흐름</div>
    </>
  );
};

export default Axios흐름;
