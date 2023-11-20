import DocPages from "../utils/docPages";
import useHash from "../hooks/useHash";

const DocBody = () => {
  const [currentPage] = useHash();

  const currentDoc = DocPages[currentPage];

  return <div className="leading-6">{currentDoc}</div>;
};

export default DocBody;
