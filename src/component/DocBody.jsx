import { GlobalContext } from "../store/store";
import { useContext } from "react";
import DocPages from "../utils/docPages";

const DocBody = () => {
  const { selectedSubMenu } = useContext(GlobalContext);

  return DocPages[selectedSubMenu.name];
};

export default DocBody;
