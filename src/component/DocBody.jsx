import DocPages from "../utils/docPages";
import useHash from "../hooks/useHash";
import { useNavigate } from "react-router-dom";
import { docPagesList } from "../utils/data";

const DocBody = () => {
  const [currentPage] = useHash();
  const navigate = useNavigate();

  const currentDoc = DocPages[currentPage];

  const handlePrev = () => {
    if (docPagesList.indexOf(currentPage) == 0) return;
    navigate(`#${docPagesList[docPagesList.indexOf(currentPage) - 1]}`);
  };

  const handleNext = () => {
    if (docPagesList.indexOf(currentPage) == docPagesList.length - 1) return;
    navigate(`#${docPagesList[docPagesList.indexOf(currentPage) + 1]}`);
  };

  return (
    <div className="leading-6 flex flex-col justify-between h-full">
      <div className="flex-grow">{currentDoc}</div>
      <div className="flex justify-between mr-8 pb-12">
        <button
          className="bg-gradient-to-r from-amber-800 to-yellow-500 py-1 px-6 text-white rounded-md cursor-pointer"
          onClick={handlePrev}
        >
          &larr; Prev
        </button>
        <button
          className="bg-gradient-to-r from-amber-800 to-yellow-500 py-1 px-6 text-white rounded-md cursor-pointer"
          onClick={handleNext}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
};

export default DocBody;
