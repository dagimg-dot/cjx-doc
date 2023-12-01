import { FaGithub } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/image/cjx-logo.png";
import "typeface-poppins";
import "../css/NavigationBarHover.css";
import { PAGES } from "../utils/types";
import SearchField from "./SearchField";
import SideNavBar from "./SideNavBar";
import Hamburger from "./Hamburger";
import { useState } from "react";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { pathname } = useLocation();
  const isDocPage = pathname.split("/").pop() === PAGES.DOCS;

  const onClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="flex justify-between px-28 minmd:px-8 mdsm:px-5 py-4 bg-header-black text-white font-sans z-50 absolute w-full font-bold text-sm">
        <Hamburger onClick={onClick} />
        {isOpen && <SideNavBar onClick={onClick} isOpen={isOpen} />}
        <div className="mdsm:hidden">
          <li className="list-none ">
            <Link to="/">
              <img src={logo} className="w-12 h-12" />
            </Link>
          </li>
        </div>
        <div className={`flex py-3 items-center justify-center mdsm:hidden`}>
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
        <div className="flex py-3 px-5 items-center gap-5 mdsm:justify-end">
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
      )
    </div>
  );
};

export default NavigationBar;
