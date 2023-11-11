import { GlobalContext } from "../store/store";
import { useContext } from "react";
import DocPages from "../utils/docPages";

export default function DocBody() {
  const { selectedSubMenu } = useContext(GlobalContext);

  return DocPages[selectedSubMenu.name];
}
