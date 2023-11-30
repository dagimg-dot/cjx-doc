import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Hamburger from "./Hamburger";
import { PAGES } from "../utils/types";
import logo from "../assets/image/cjx-logo.png";
import { FaGithub } from "react-icons/fa";

const SideNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col">
      <Hamburger onClick={onClick} />
      {isOpen && (
        <div className="flex h-screen w-full justify-between fixed left-0 top-0 z-20">
          <div className="bg-bodyGradient w-1/2 px-5">
            <div className="mb-20 mt-10">
              <li className="list-none ">
                <Link to="/">
                  <img src={logo} className="w-12 h-12" />
                </Link>
              </li>
            </div>
            <div className={`flex flex-col pb-64 `}>
              <li className=" list-none pb-5 px-3">
                <Link
                  to="/docs"
                  className="text-header-white tracking-[1.5px] relative nav-bar "
                >
                  DOCS<span className=""></span>
                </Link>
              </li>
              <li className=" list-none px-3">
                <Link
                  to="/contact"
                  className="text-header-white tracking-[1.5px] relative nav-bar"
                >
                  CONTACT<span className=""></span>
                </Link>
              </li>
            </div>
            <div className="flex pb-16 px-5  gap-5">
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
          <div className="w-1/2 bg-white/30" onClick={onClick}></div>
        </div>
      )}
    </div>
  );
};

export default SideNavBar;
