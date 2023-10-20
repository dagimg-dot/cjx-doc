import { GlobalContext } from "../store/store";
import { useContext } from "react";

const DocBody = () => {
  const { selectedSubMenu } = useContext(GlobalContext);
  return <div className="text-white text-[20px]">{selectedSubMenu.name}</div>;
};

export default DocBody;
