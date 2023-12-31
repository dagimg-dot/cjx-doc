import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Docs from "./pages/docs";
import NotFound from "./pages/notfound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/docs" element={<Docs />}></Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
