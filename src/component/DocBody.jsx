import DocPages from "../utils/docPages";
import useHash from "../hooks/useHash";

const DocBody = () => {
  const currentHash = useHash();

  const currentDoc = DocPages[currentHash];

  return <div className="leading-6">{currentDoc}</div>;
};

export default DocBody;
