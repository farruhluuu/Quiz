import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./admin/admin";
import Auth from "./test/auth";
import Test from "./test/test";
import Adminboard from "./admin/adminboard";

const Question = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Auth />}/>
        <Route path="/test" element={<Test />}/>
        <Route path="/admin" element={<Admin />}/>
        <Route path="/admin/adminBoard" element={<Adminboard />}/>
        <Route path="*" element={(<div>Error 404</div>)}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Question;
