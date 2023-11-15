import { useEffect, useState } from "react";
import { docPagesList } from "../utils/data";

const useSearch = () => {
  const [searchToken, setSearchToken] = useState("");
  const [results, setResults] = useState([]);

  const handleInputChange = (event) => {
    setSearchToken(event.target.value);
  };

  const unfocusSearchField = (event) => {
    if (event.target.nodeName !== "INPUT") {
      setSearchToken("");
    } else {
      handleInputChange(event);
    }
  };

  const lowerCase = (str) => {
    return str.toLowerCase();
  };

  const searchDoc = () => {
    if (searchToken === "") {
      return;
    }

    setResults([]);

    docPagesList.forEach((page) => {
      if (
        lowerCase(page).includes(lowerCase(searchToken)) &&
        !results.includes(page)
      ) {
        setResults([...results, page]);
      }
    });
  };

  useEffect(() => {
    searchDoc();
  }, [searchToken]);

  window.addEventListener("click", unfocusSearchField);

  return [results, searchToken, handleInputChange];
};

export default useSearch;
