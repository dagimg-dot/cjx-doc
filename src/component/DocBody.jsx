import { GlobalContext } from "../store/store";
import { useContext } from "react";
import DocPages from "../utils/docPages";

export default function DocBody() {
  const { selectedSubMenu } = useContext(GlobalContext);
  const currentDoc = DocPages[selectedSubMenu.name];

  return currentDoc;
}
