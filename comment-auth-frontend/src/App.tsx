import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home" ;
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AboutMe from "./pages/AboutMe"; // <-- Import your About Me page
import Comments from "./pages/Comments";
import Work  from "./pages/Work";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/about" element={<AboutMe />} />
      <Route path="/comments" element={<Comments/>}/>
      <Route path="/work" element={<Work/>}/>
    </Routes>
  );
}

export default App;
