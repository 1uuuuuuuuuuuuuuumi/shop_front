import axios from "axios";
import React, { useState } from "react";

const UploadTest = () => {
  //1. 첨부파일 input 태그에서 선택한 파일을 저장할 변수
  //3. 첨부파일을 들고있음
  const [firstFile, setFirstFile] = useState(null);

  //첨부파일 input 태그에서 선택한 여러 파일을 저장할 변수
  const [secondFiles, setSecondFiles] = useState(null);

  //axios.post()안에 너무길어서 변수로 만들어 줬음

  //자바로 데이터를 전달할 때 문자뿐만 아니라
  // 파일 데이터도 가져간다는 것을 설정
  const fileConfig = { header: { "Content-Type": "multipart/form-data" } };

  //2.firstFile은 null이고 ㅇ아래는아직실행X
  //4.sendFile안에 객체를 만들어서 넣음 (->자바의 testController작업)
  const sendFile = () => {
    //첨부파일 데이터를 자바로 전달하기 위해서는 FormData() 객체를 사용해야 함
    //form 데이터 객체 생성 ↴
    // ↳ 첨부파일, input 태그 등의 모든 데이터를 자바로 가져갈 수 있는 객체
    const form = new FormData();
    form.append("bookName", "hong");
    form.append("bookPrice", 20);
    form.append("firstFile", firstFile);

    // console.log(form);
    //post() 메서드의 세번째 매개변수로 fileConfig를 전달
    //(이거해야 파일 첨부 됨)
    axios.post("/api/test/upload1", form, fileConfig)
      .then().catch();
  };

  return (
    <div>
      {/* file이 들어감 */}
      <input
        // multiple //이 속성을 사용하면 한 번에 여러 파일 선택 가능
        type="file"
        onChange={(e) => {
          //e.target.files : 선택한 파일들의 정보
          console.log(e.target.files);
          console.log(e.target.files[0]); //내가 선택한 파일 하나.

          //파일을 선택할때마다 선택한 파일을 firstFile에 저장한다.
          setFirstFile(e.target.files[0]);
        }}
      />
      <button
        type="button"
        onClick={() => {
          sendFile();
        }}
      >
        파일전송1
      </button>
      <br />
      <input type="file" multiple
        onChange={(e) => {
          setSecondFiles(e.target.files);
        }}/>
      <button
        type="button"
        onClick={() => {
          //던질데이터를 저장할 form 데이터
          const form2 = new FormData();

          //파일 첨부를 했을때만.
          if(secondFiles != null){
            //첨부한 파일 갯수만큼 formData에 저장
            for(const eachFile of secondFiles){
              form2.append('files', eachFile)
            }
          }

          axios.post('/api/test/upload2', form2, fileConfig)
          .then().catch();
        }}
      >
        다중 파일 전송
      </button>
    </div>
  );
};

export default UploadTest;
