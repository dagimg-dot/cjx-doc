import { GlobalContext } from "../store/store";
import { useContext } from "react";
import DocPages from "../utils/docPages";

const DocBody = () => {
  const { selectedSubMenu } = useContext(GlobalContext);
  const currentDoc = DocPages[selectedSubMenu.name];

  return <div className="leading-6">{currentDoc}</div>;
};

export default DocBody;
