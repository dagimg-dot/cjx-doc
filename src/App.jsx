import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Docs from "./pages/docs";
import NotFound from "./pages/notfound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/docs/*" element={<Docs />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
