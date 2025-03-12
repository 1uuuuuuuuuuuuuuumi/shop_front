import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCategoryList, insertBook } from "../apis/bookApi";
import ShopInput from "../common_component/ShopInput";
import ShopButton from "../common_component/ShopButton";

// 상품 등록 컴포넌트
// 도서명 input
// 가격 input
// 출판사 input
// 책 소개 textarea
// 카테고리코드 select
const ItemForm = () => {
  // 1. 카테고리 목록을 저장할 변수
  const [cateList, setCateList] = useState([]);

  // 4. input 태그들에 입력한 데이터를 저장하는 변수
  const [bookData, setBookData] = useState({
    cateCode: 1, // 디비에 등록된 cateCode 번호 !
    bookName: "",
    bookPrice: 0,
    publisher: "",
    bookInfo: "",
  });

  // 2. 카테고리 목록 조회
  useEffect(() => {
    getCategoryList()
      .then((res) => {
        console.log(res.data);
        setCateList(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  // 5. 값 입력 시 반복 실행되는 함수
  const changeBookData = (e) => {
    setBookData({
      ...bookData,
      [e.target.name]: e.target.value,
    });
  };

  // 7. input태그에 입력된거 확인하기
  // console.log(bookData);

  //9. 등록 버튼 클릭 시 도서 등록 실행
  const regBook = () => {
    insertBook(bookData)
      .then((res) => {
        alert("성공");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="item-form-container">
      <div>도서 등록</div>
      <div>
        <div>
          <p>카테고리</p>
          {/* 6. 모든 input태그에 name, value, value 넣기 */}
          <select
            name="cateCode"
            value={bookData.cateCode}
            onChange={(e) => changeBookData(e)}
          >
            {/* 3. 데이터 */}
            {cateList.map((cate, i) => {
              return (
                <option key={i} value={cate.cateCode}>
                  {cate.cateName}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <p>도서명</p>
          {/* <input
            type="text"
            name="bookName"
            value={bookData.bookName}
            onChange={(e) => changeBookData(e)}/> */}

          <ShopInput
            name="bookName"
            value={bookData.bookName}
            onChange={(e) => changeBookData(e)}
          />
        </div>
        <div>
          <p>출판사</p>
          {/* <input
            type="text"
            name="publisher"
            value={bookData.publisher}
            onChange={(e) => changeBookData(e)}
          /> */}

          <ShopInput
            name="publisher"
            value={bookData.publisher}
            onChange={(e) => changeBookData(e)}
          />
        </div>
        <div>
          <p>도서 가격</p>
          {/* <input
            type="text"
            name="bookPrice"
            value={bookData.bookPrice}
            onChange={(e) => changeBookData(e)}
          /> */}

          <ShopInput
            name="bookPrice"
            value={bookData.bookPrice}
            onChange={(e) => changeBookData(e)}
          />
        </div>
        <div>
          <p>책 소개</p>
          <textarea
            name="bookInfo"
            value={bookData.bookInfo}
            onChange={(e) => changeBookData(e)}
          ></textarea>
        </div>
      </div>
      <div>
        {/* 8. 등록누르면 서버로 */}
        {/* <button type="button" onClick={(e) => regBook()}>
          ★등 록★
        </button> */}
        <ShopButton title="★등록★" size="small" click={(e) => regBook()} />
      </div>
    </div>
  );
};

export default ItemForm;
