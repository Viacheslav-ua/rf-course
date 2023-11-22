import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import { MainPage } from "./pages/MainPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} >
          <Route path="/about" element={<About />} />
          <Route path="/posts" element={<Posts />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App;
