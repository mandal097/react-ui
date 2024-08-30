/* eslint-disable @typescript-eslint/no-explicit-any */
import Home from "./pages/Home";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import CourseDetails from "./pages/CourseDetails";
import Dashboard from "./pages/Dashboard";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useSelector } from "react-redux";

const App = () => {
  const { currentUser } = useSelector((state: any) => state.user);

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="c-details" element={<CourseDetails />} />
        <Route
          path="dashboard"
          element={currentUser ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route
          path="login"
          element={currentUser ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="register"
          element={currentUser ? <Navigate to="/" /> : <Register />}
        />
      </Routes>
      <div className="flex justify-center items-center p-6 gap-2">
        Made by{" "}
        <a
          href="https://mandal097-portfolio.netlify.app/"
          target="_blank"
          className="text-lg text-blue">
          Amarnath kumar mandal
        </a>
      </div>
    </Router>
  );
};

export default App;
