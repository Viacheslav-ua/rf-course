import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import { MainPage } from "../pages/MainPage";
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";
import SinglePage from "../pages/SinglePage";
import PostNewPage from "../pages/PostNew";

const AppRouter = () => {
  return(
    <Routes>
      <Route path="/" element={<MainPage />} >
        <Route index element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id/:title" element={<SinglePage />} />
        <Route path="/posts/new" element={<PostNewPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default AppRouter