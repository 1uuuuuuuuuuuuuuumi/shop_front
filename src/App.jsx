import { Route, Routes } from "react-router-dom";
import "./App.css";
import UserLayout from "./routes/common/UserLayout";
import Join from "./routes/member/Join";
import ItemForm from "./routes/book/ItemForm";
import CateManage from "./routes/book/CateManage";
import Login from "./routes/member/Login";
import AdminLayout from "./routes/common/AdminLayout";
import ItemList from "./routes/book/ItemList";



function App() {

  return (
    <div className="container">
      {/* <StorageTest /> */}
      {/* <UploadTest /> */}
      
      <Routes>
        {/* ★☆★ 유저가 접속하는 페이지 ★☆★ */}

        <Route
          path="/"
          element={
            <UserLayout 
           />
          }
        >
          {/* 상품 목록 페이지 */}
          <Route path="" element={<ItemList />} />

          {/* 상품 상세 페이지 */}
          <Route path="detail" element={<div>상품 상세 페이지</div>} />

          {/* 회원가입 */}
          <Route path="join" element={<Join />} />

          {/* 로그인 */}
          <Route path="login" element={<Login />} />
        </Route>

        {/* ★☆★ 관리자가 접속하는 페이지 ★☆★ */}

        <Route path="/admin" element={<AdminLayout 
          />}>
          {/* 상품등록 */}
          <Route path="reg-item" element={<ItemForm />} />

          {/* 카테고리 관리 */}
          <Route path="cate-manage" element={<CateManage />} />

          {/* 회원관리 */}
          <Route path="user-manage" element={<div>회원관리</div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
