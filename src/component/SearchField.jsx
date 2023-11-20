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
            value={searchToken} ref={inputRef}
          />
        </div>
        {isShown && results.length > 0 && (
          <div className="mt-4  bg-slate-800/90 rounded-lg list-none p-4 absolute w-[219px]">
            {results.map((result) => (
              <li
                key={result}
                className="hover:bg-slate-400 cursor-pointer p-2 rounded-md"
                onClick={() => handlerResultClick(result)}
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
