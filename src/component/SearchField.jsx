import Search from "./Search";
import { GlobalContext } from "../store/store";
import { useContext, useState } from "react";
import useSearch from "../hooks/useSearch";
import findParent from "../utils/findParent";
import useOutsideClick from "../hooks/useOutSideClick";
import useKeyboard from "../hooks/useKeyboard";
import { Link } from "react-router-dom";

const SearchField = () => {
  const { parent, handleParentClick } = useContext(GlobalContext);
  const [results, searchToken, setSearchToken] = useSearch();
  const [isShown, setIsShown] = useState(true);
  // const [index, setIndex] = useState(-1);
  const ref = useOutsideClick(() => {
    setIsShown(false);
  });
  const inputRef = useKeyboard();

  const handlerResultClick = (result) => {
    setSearchToken("");
    const { parentName, isSelected } = findParent(parent, result);
    if (!isSelected) {
      handleParentClick(parentName);
    }
  };
  const handleMouseOver = (event) => {
    console.log(index)
    if (event.nodeName == "LI") {
      event.style.backgroundColor = "rgb(148,163,184)";

    }
  };
  const handleMouseOut = (event) => {
    console.log(event);
    event.style.backgroundColor = "";
  };
  let index = -1
  const handleKeyDown = (event) => {
    if (event.code == "ArrowDown") {
        if ( index == results.length-1) {
          return 
        } else if (index == -1) {
          index = 0
          const listElement = document.getElementById("res").children[0];
          handleMouseOver(listElement);
        } else {
          index = index + 1
          const prevListElement =
          document.getElementById("res").children[index - 1];
          const listElement = document.getElementById("res").children[index];
          prevListElement.style.backgroundColor = "";
          handleMouseOver(listElement);
        }
    } 
    }
  
  return (
    <div className="flex flex-col">
      <div ref={ref}>
        <div className="search-field flex items-center gap-2 text-white text-sm font-normal py-1 px-2 border-2 border-lime-500 from-amber-800 to-yellow-500 rounded-lg">
          <Search />
          <input
            type="text"
            className="bg-transparent focus:outline-none"
            onChange={(event) => setSearchToken(event.target.value)}
            onFocus={() => setIsShown(true)}
            value={searchToken}
            ref={inputRef}
            onKeyDown={(event) => handleKeyDown(event)}
          />
        </div>
        {isShown && results.length > 0 && (
          <div
            className="mt-4  bg-slate-800/90 rounded-lg list-none p-4 absolute w-[219px]"
            id="res"
          >
            {results.map((result) => (
              <li
                key={result}
                className="hover:bg-slate-400 cursor-pointer p-2 rounded-md"
                onClick={() => handlerResultClick(result)}
                onMouseOut={(event) => handleMouseOut(event.target)}
                onMouseOver={(event) => handleMouseOver(event.target)}
              >
                <Link to={"#" + result}>{result}</Link>
              </li>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchField;
