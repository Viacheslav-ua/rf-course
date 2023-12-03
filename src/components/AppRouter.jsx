import { Routes, Route, Navigate } from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import { MainPage } from "../pages/MainPage";
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";
import SinglePage from "../pages/SinglePage";
import PostNewPage from "../pages/PostNew";
import PostIdPage from "../pages/PostIdPage";
import LoginPage from "../pages/LoginPage";

import Private from "../hoc/Private";
import { AuthProvider } from "../hoc/AuthProvider";
import HooksPage from "../pages/HooksPage";

const AppRouter = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<MainPage />} >
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/about-us" element={<Navigate to='/about' replace/>} />

          <Route path="/hooks" element={<HooksPage />} />
          <Route path="/posts" element={<Private><Posts /></Private>} />
          <Route path="/posts/:id" element={<PostIdPage />} />
          <Route path="/posts/:id/:title" element={<SinglePage />} />
          <Route path="/posts/new" element={<PostNewPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AuthProvider>
  )
}

export default AppRouter