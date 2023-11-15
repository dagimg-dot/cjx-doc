import { useEffect, useState } from "react";
import { docPagesList } from "../utils/data";

const useSearch = () => {
  const [searchToken, setSearchToken] = useState("");
  const [results, setResults] = useState(docPagesList);
  const [isFocused, setIsFocused] = useState(false);

  const unfocusSearchField = (event) => {
    if (event.target.nodeName !== "INPUT") {
      setIsFocused(false);
      setResults([]);
    } else {
      setIsFocused(true);
    }
  };

  const lowerCase = (str) => {
    return str.toLowerCase();
  };

  useEffect(() => {
    const searchDoc = () => {
      const newResult = [];
      if (searchToken !== "") {
        docPagesList.forEach((page) => {
          if (
            lowerCase(page).includes(lowerCase(searchToken)) &&
            !newResult.includes(page)
          ) {
            newResult.push(page);
          }
        });
      }

      setResults(newResult);
    };

    searchDoc();
  }, [searchToken, isFocused]);

  window.addEventListener("click", unfocusSearchField);

  return [results, searchToken, setSearchToken];
};

export default useSearch;
