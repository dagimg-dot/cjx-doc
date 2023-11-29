import { useEffect, useState } from "react";
import { docPagesList } from "../utils/data";

const useSearch = () => {
  const [searchToken, setSearchToken] = useState("");
  const [results, setResults] = useState(docPagesList);

  const lowerCase = (str) => {
    return str.toLowerCase();
  };

  useEffect(() => {
    const searchDoc = () => {
      const newResult = [];
      if (searchToken !== "") {
        docPagesList.forEach((page) => {
          if (
            lowerCase(page).includes(lowerCase(searchToken)) 
          ) {
            newResult.push(page);
          }
        });
      }

      setResults(newResult);
    };

    searchDoc();
  }, [searchToken]);

  return [results, searchToken, setSearchToken];
};

export default useSearch;
