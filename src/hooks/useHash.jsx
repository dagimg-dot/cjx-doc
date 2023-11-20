import { useLocation } from "react-router-dom";
import findParent from "../utils/findParent";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../store/store";

const decodeURLHash = (hash) => {
  return hash.split("%20").join(" ").split("#").pop();
};

const useHash = () => {
  const { parent, handleParentClick } = useContext(GlobalContext);
  const location = useLocation();
  const currentPage = location.hash
    ? decodeURLHash(location.hash)
    : "Prerequisites";
  const { parentName, isSelected } = findParent(parent, currentPage);

  useEffect(() => {
    if (!isSelected) {
      handleParentClick(parentName);
    }
  }, [currentPage, location, location.hash]);

  return [currentPage, parent[parentName]];
};

export default useHash;
