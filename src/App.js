import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Setting from "./pages/settings/Setting";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { useContext } from "react";
import { Context } from "./context/Context";

function App() {
  const {user} = useContext(Context);
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/register" element={user ? <Home/> : <Register/>}></Route>
        <Route exact path="/login" element={user ? <Home/> : <Login/>}></Route>
        <Route exact path="/write" element={user ? <Write/> : <Register/>}></Route>
        <Route exact path="/settings" element={user ? <Setting/> : <Register/>}></Route>
        <Route exact path="/post/:postId" element={user ? <Single/> : <Register/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
