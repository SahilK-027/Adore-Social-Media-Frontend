// App.tsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandinPage/LandingPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import HomePage from "./pages/HomePage/HomePage";
import MyLikes from "./pages/MyLikesPage/MyLikes";
import MyBookMarks from "./pages/MyBookMarksPage/MyBookMarks";
import MyProfile from "./pages/MyProfilePage/MyProfile";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/my-likes" element={<MyLikes />} />
        <Route path="/my-bookmarks" element={<MyBookMarks />} />
        <Route path="/my-profile" element={<MyProfile />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
