import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Docs from "./pages/docs";

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/docs" element={<Docs />}></Route>
      </Routes>
  );
}

