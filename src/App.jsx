import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Docs from "./pages/docs";
import NotFound from "./pages/notfound";
import DocPages from "./utils/docPages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/docs" element={<Docs />}>
        {Object.entries(DocPages).map(([category, pages]) =>
          Object.entries(pages).map(([title, component]) => (
            <Route
              key={title}
              path={`/docs/${category.replace(/\s+/g, "-")}/${title.replace(
                /\s+/g,
                "-"
              )}`}
              element={component}
            />
          ))
        )}
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
