import { FaGithub } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/image/cjx-logo.png";
import "typeface-poppins";
import "../css/NavigationBarHover.css";
import { PAGES } from "../utils/types";
import SearchField from "./SearchField";

const NavigationBar = () => {
  const { pathname } = useLocation();
  const isDocPage = pathname.split("/").pop() === PAGES.DOCS;
  const paddingLeft = isDocPage ? "pl-56" : "";

  return (
    <div className="flex justify-between px-28 py-4 bg-header-black text-white font-sans z-50 absolute w-full font-bold text-sm">
      <div>
        <li className="list-none ">
          <Link to="/">
            <img src={logo} className="w-12 h-12" />
          </Link>
        </li>
      </div>
      <div className={`flex py-3 items-center ${paddingLeft}`}>
        <li className="mx-auto list-none px-3">
          <Link
            to="/docs"
            className="text-header-white tracking-[1.5px] relative nav-bar "
          >
            DOCS<span className=""></span>
          </Link>
        </li>
        <li className="mx-auto list-none px-3">
          <Link
            to="/contact"
            className="text-header-white tracking-[1.5px] relative nav-bar"
          >
            CONTACT<span className=""></span>
          </Link>
        </li>
      </div>
      <div className="flex py-3 px-5 items-center gap-5">
        {isDocPage && <SearchField />}
        <li className="list-none">
          <a
            href="https://github.com/dagimg-dot/cjx-cli-tool"
            target={"_blank"}
            title={"Github Link"}
          >
            <FaGithub className="scale-[2]" />
          </a>
        </li>
      </div>
    </div>
  );
};

export default NavigationBar;
