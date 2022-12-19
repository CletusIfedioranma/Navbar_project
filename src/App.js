import "./App.css";
import { Route, Routes, Link, Navigate } from "react-router-dom";
// import New from "./New";
// import Header from "../src/components/nav/Header"
// import linked from "./pages/linked";
// import Individuallinked from "./pages/Individuallinked";
import Header from "./nav/Header";
import Link1 from "./pages/Link1";
import Link2 from "./pages/Link2";
import Link3 from "./pages/Link3";
import Link4 from "./pages/Link4";
import Link5 from "./pages/Link5";
import Link6 from "./pages/Link6";



function App() {

  return (
    <div>
      <Routes>
      <Route path="/" element={<><Header/><Link1/></>}></Route>
      <Route path="/linked2" element={<><Header/><Link2/></>}></Route>
      <Route path="/linked3" element={<><Header/><Link3/></>}></Route>
      <Route path="/linked4" element={<><Header/><Link4/></>}></Route>
      <Route path="/linked5" element={<><Header/><Link5/></>}></Route>
      <Route path="/linked6" element={<><Header/><Link6/></>}></Route>
      </Routes>
    </div>
  );
}

export default App;
