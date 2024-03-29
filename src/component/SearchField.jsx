import Search from "./Search";
import { useState } from "react";
import useSearch from "../hooks/useSearch";
import useOutsideClick from "../hooks/useOutSideClick";
import useKeyboard from "../hooks/useKeyboard";
import { useNavigate } from "react-router-dom";
import linkConstructor from "../utils/linkConstructor";

const SearchField = () => {
  const [results, searchToken, setSearchToken] = useSearch();
  const [isShown, setIsShown] = useState(true);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const ref = useOutsideClick(() => {
    setIsShown(false);
  });
  const navigate = useNavigate();
  const inputRef = useKeyboard();
  let index = -1;

  const handleResultClick = (result) => {
    setSearchToken("");
    navigate(linkConstructor(result));
  };

  const handleKeyboardOver = (target) => {
    target.style.backgroundColor = "rgb(148,163,184)";
  };
  const handleKeyboardOut = (target) => {
    target.style.backgroundColor = "";
  };

  const handleMouseOver = (target) => {
    if (target.nodeName !== "LI") {
      if (index !== -1) {
        const prevListElement =
          document.getElementById("resultList").children[index];
        handleKeyboardOut(prevListElement);
        index = -1;
      }
      target = target.parentNode;
    }
    setIsMouseOver(true);
    target.style.backgroundColor = "rgb(148,163,184)";
  };

  const handleMouseOut = (target) => {
    setIsMouseOver(false);
    if (target.nodeName !== "LI") {
      target = target.parentNode;
      target.style.backgroundColor = "";
    }
    target.style.backgroundColor = "";
  };

  const handleKeyDown = (event) => {
    if (event.code == "ArrowDown" && isMouseOver !== true) {
      if (index == results.length - 1) {
        return;
      } else {
        const listElement =
          document.getElementById("resultList").children[index + 1];
        const prevListElement =
          document.getElementById("resultList").children[index];
        if (index == -1) {
          handleKeyboardOver(listElement);
        } else {
          handleKeyboardOut(prevListElement);
          handleKeyboardOver(listElement);
        }
      }
      index = index + 1;
    } else if (event.code == "ArrowUp" && isMouseOver !== true) {
      if (index == -1) {
        return;
      } else {
        const listElement =
          document.getElementById("resultList").children[index - 1];
        const prevListElement =
          document.getElementById("resultList").children[index];
        if (index == 0) {
          handleKeyboardOut(prevListElement);
        } else {
          handleKeyboardOut(prevListElement);
          handleKeyboardOver(listElement);
        }
        index = index - 1;
      }
    } else if (event.keyCode == 13) {
      if (index == -1) {
        return;
      }
      handleResultClick(results[index]);
    }
  };

  return (
    <div className="flex flex-col">
      <div ref={ref}>
        <div className="flex items-center gap-2 text-white text-sm font-normal py-1 px-2 border-2 border-lime-500 from-amber-800 to-yellow-500 rounded-lg sms:w-[140px]">
          <Search />
          <input
            type="text"
            placeholder="Ctrl + k"
            className="bg-transparent focus:outline-none placeholder:opacity-50 placeholder:text-slate-500 w-full"
            onChange={(event) => setSearchToken(event.target.value)}
            onFocus={() => setIsShown(true)}
            value={searchToken}
            ref={inputRef}
            onKeyDown={(event) => handleKeyDown(event)}
          />
        </div>
        {isShown && results.length > 0 ? (
          <div
            className="mt-4  bg-slate-800/90 rounded-lg list-none p-4 absolute w-[219px] sms:w-[140px]"
            id="resultList"
          >
            {results.map((result) => (
              <li
                key={result}
                className=" cursor-pointer p-2 rounded-md"
                onClick={() => handleResultClick(result)}
                onMouseOver={(event) => handleMouseOver(event.target)}
                onMouseOut={(event) => handleMouseOut(event.target)}
              >
                {result}
              </li>
            ))}
          </div>
        ) : (
          searchToken &&
          isShown && (
            <li className="rounded-lg list-none p-4 absolute bg-slate-800/90 w-[219px] sms:w-[140px] mt-4">
              No result found
            </li>
          )
        )}
      </div>
    </div>
  );
};

export default SearchField;
