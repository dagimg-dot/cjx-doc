import Search from "./Search";
import { GlobalContext } from "../store/store";
import { useContext } from "react";
import useSearch from "../hooks/useSearch";
import findParent from "../utils/findParent";

const SearchField = () => {
  const { parent, handleChildClick, handleParentClick } =
    useContext(GlobalContext);
  const [results, searchToken, setSearchToken] = useSearch();

  const handlerResultClick = (result) => {
    setSearchToken("");
    handleChildClick(result);
    const { parentName, isSelected } = findParent(parent, result);
    if (!isSelected) {
      handleParentClick(parentName);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="search-field flex items-center gap-2 text-white text-sm font-normal py-1 px-2 border-2 border-lime-500 from-amber-800 to-yellow-500 rounded-lg">
        <Search />
        <input
          type="text"
          className="bg-transparent focus:outline-none"
          onChange={(event) => setSearchToken(event.target.value)}
          value={searchToken}
        />
      </div>
      {searchToken !== "" && results.length > 0 && (
        <div className="mt-12  bg-slate-800/90 rounded-lg list-none p-4 absolute w-[219px]">
          {results.map((result) => (
            <li
              key={result}
              className="hover:bg-slate-400 cursor-pointer p-2 rounded-md"
              onClick={() => handlerResultClick(result)}
            >
              {result}
            </li>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchField;
