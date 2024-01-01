import {
  useNavigate,
  useLocation,
  Outlet,
} from "react-router-dom";
import { docPagesList } from "../utils/data";
import { useEffect, useState } from "react";
import Button from "./Button";
import linkConstructor from "../utils/linkConstructor";
import cleanStr from "../utils/cleanStr";

const DocBody = () => {
  const { pathname } = useLocation();
  const currentPage = cleanStr(pathname.split("/").pop());
  const navigate = useNavigate();
  const [page, setPage] = useState(currentPage);
  const [isPrevBtnDisabled, setPrevBtnDisabled] = useState(false);
  const [isNextBtnDisabled, setNextBtnDisabled] = useState(false);

  useEffect(() => {
    setPage(currentPage);
    setPrevBtnDisabled(getIndex(currentPage) === 0);
    setNextBtnDisabled(getIndex(currentPage) === docPagesList.length - 1);
    document.querySelector("h1").scrollIntoView({ behavior: "smooth" });
  }, [currentPage]);

  const getIndex = (_page = page) => docPagesList.indexOf(_page);

  const handlePrev = () => {
    const prevPage = docPagesList[getIndex() - 1];
    navigate(linkConstructor(prevPage));
  };

  const handleNext = () => {
    const nextPage = docPagesList[getIndex() + 1];
    navigate(linkConstructor(nextPage));
  };

  return (
    <div className="leading-6 flex flex-col justify-between h-full">
      <div>
        <Outlet />
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
