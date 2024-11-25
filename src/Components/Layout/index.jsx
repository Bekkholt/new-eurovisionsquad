import { Routes, Route } from "react-router-dom";
import Header from "../Header";
import Home from "../../Pages/Home";

export default function Layout() {
  return (
    <div>
      <Header />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </div>
  );
}