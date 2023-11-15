import { useState } from "react";
import Search from "./Search";

export default function SearchField() {
  const [searchToken, setSearchToken] = useState("");

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

  window.addEventListener("click", unfocusSearchField);

  return (
    <div className="flex flex-col">
      <div className="search-field flex items-center gap-2 text-white text-sm font-normal py-1 px-2 border-2 border-lime-500 from-amber-800 to-yellow-500 rounded-lg">
        <Search />
        <input
          type="text"
          className="bg-transparent focus:outline-none focus:border-red-400"
          onChange={handleInputChange}
        />
      </div>
      {searchToken !== "" ? (
        <div className="mt-12  bg-slate-900/60 rounded-lg list-none p-4 absolute w-[219px]">
          <li>{searchToken}</li>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
