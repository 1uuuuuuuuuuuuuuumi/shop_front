import React, { useEffect, useState } from "react";
import styles from "./UserHeader.module.css";
import { Link, useNavigate } from "react-router-dom";

const UserHeader = () => {
  const nav = useNavigate();

  //로그인 정보를 저장할 state변수
  const [loginInfo, setLoginInfo] = useState(null);

  useEffect(() => {
    //sessionStorage에 있는 loginInfo 데이터 가져오기
    //loginInfo 데이터가 없다면 로그인 안한 것. -> null
    //이렇게 가져온 데이터는 json 형태이다.
    const strLoginInfo = sessionStorage.getItem("loginInfo");

    //sessionStorage에 로그인 정보가 있으면 ↴
    if (strLoginInfo != null) {
      //sessionStorage에서 받은 json 데이터를 객체로 변환한다.
      //변환된 loginInfo 객체에는 로그인한 회원의 아이디, 이름, 권한 정보가 들어있다.
      setLoginInfo(JSON.parse(strLoginInfo));
    }
  }, []);

  return (
    <div className={styles.header_container}>
      <div className={styles.login_div}>
        {loginInfo == null ? (
          <>
            <span>
              <Link to={"/login"}>LOGIN</Link>
            </span>
            <span>
              <Link to={"/join"}>JOIN</Link>
            </span>
          </>
        ) : (
          <>
            <span>{JSON.parse(sessionStorage.getItem('loginInfo')).userId}님 반갑습니다. (˵ •̀ ᴗ - ˵ ) ✧</span>
            <span onClick={e => {
              sessionStorage.removeItem('loginInfo');
              nav("/");
              window.location.reload();
            }}>LOGOUT</span>
          </>
          
        )}
      </div>
      <div className={styles.banner_div}>
        <img src="/book_banner.PNG" />
        <p>BOOK BOOK BOOK 방구 BOOK</p>
      </div>
      <div className={styles.menu_div}>
        <ul className={styles.menu_ul}>
          <li>전체</li>
          <li>IT/인터넷</li>
          <li>소설</li>
          <li>자기계발</li>
        </ul>
      </div>
    </div>
  );
};

export default UserHeader;
