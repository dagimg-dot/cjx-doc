import DocPages from "../utils/docPages";
import useHash from "../hooks/useHash";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { docPagesList } from "../utils/data";
import { useEffect, useState } from "react";
import Button from "./Button";

const DocBody = () => {
  const [currentPage] = useHash();
  const navigate = useNavigate();
  const [page, setPage] = useState(currentPage);
  const [isPrevBtnDisabled, setPrevBtnDisabled] = useState(false);
  const [isNextBtnDisabled, setNextBtnDisabled] = useState(false);

  const [firstCategory, firstPages] = Object.entries(DocPages)[0];
  const [firstPageTitle] = Object.entries(firstPages)[0];

  useEffect(() => {
    setPage(currentPage);
    setPrevBtnDisabled(getIndex(currentPage) === 0);
    setNextBtnDisabled(getIndex(currentPage) === docPagesList.length - 1);
  }, [currentPage]);

  const currentDoc = DocPages[page];

  const getIndex = (_page = page) => docPagesList.indexOf(_page);

  const handlePrev = () => {
    const prevPage = docPagesList[getIndex() - 1];
    navigate(`#${prevPage}`);
  };

  const handleNext = () => {
    const nextPage = docPagesList[getIndex() + 1];
    navigate(`#${nextPage}`);
  };

  return (
    <div className="leading-6 flex flex-col justify-between h-full">
      <div>
        <Routes>
          {Object.entries(DocPages).map(([category, pages]) =>
            Object.entries(pages).map(([title, component]) => (
              <Route
                key={title}
                path={`/${category.replace(/\s+/g, "-")}/${title.replace(
                  /\s+/g,
                  "-"
                )}`}
                element={component}
              />
            ))
          )}
        </Routes>
      </div>
      <div className="flex justify-between mr-8 pb-8">
        <Button onClick={handlePrev} disabled={isPrevBtnDisabled}>
          &larr; Prev
        </Button>
        <Button onClick={handleNext} disabled={isNextBtnDisabled}>
          Next &rarr;
        </Button>
      </div>
    </div>
  );
};

export default DocBody;
