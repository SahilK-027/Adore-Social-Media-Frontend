import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandinPage/LandingPage";
import LoginPage from "./pages/LoginPage/LoginPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
