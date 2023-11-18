import { useLocation } from "react-router-dom";

const decodeURLHash = (hash) => {
  return hash.split("%20").join(" ");
};

const useHash = () => {
  const location = useLocation();
  const hash = decodeURLHash(location.hash);
  const currentPage = hash.split("#").pop();
  return currentPage;
};

export default useHash;
