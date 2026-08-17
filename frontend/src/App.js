import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Login from "./Login";
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import Generator from "./Generator";
import Meter from "./Meter";
import PrivateRoute from "./PrivateRoute";

export default function App() {
  const isLogged = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Default route */}
        <Route path="/" element={isLogged ? <Dashboard /> : <Login />} />

        {/* Auth routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected routes */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        <Route
          path="/generator"
          element={
            <PrivateRoute>
              <Generator />
            </PrivateRoute>
          }
        />

        <Route
          path="/meter"
          element={
            <PrivateRoute>
              <Meter />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}