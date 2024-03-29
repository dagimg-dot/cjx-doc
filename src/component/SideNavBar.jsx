import { Link, useLocation } from "react-router-dom";
import { PAGES } from "../utils/types";
import logo from "../assets/image/cjx-logo.png";
import LeftSidebar from "./LeftSidebar";
import { FaGithub } from "react-icons/fa";
import { useEffect } from "react";

const SideNavBar = ({ onClick, isOpen }) => {
  const { pathname } = useLocation();
  const isDocPage = pathname.split("/")[1] === PAGES.DOCS;

  useEffect(() => {
    const handleSubMenuClick = (event) => {
      if (event.target.nodeName === "A") {
        onClick();
      }
    };

    document.addEventListener("click", handleSubMenuClick);
    return () => document.removeEventListener("click", handleSubMenuClick);
  }, []);

  return (
    <div className="hidden mdsm:flex mdsm:flex-col">
      {isOpen && (
        <div className="flex h-[100dvh] w-full justify-between fixed left-0 top-0 z-20">
          <div className="flex flex-col bg-bodyGradient w-2/3 px-5 pt-5 overflow-y-auto">
            <div className="flex-grow">
              <div>
                <li className="list-none">
                  <Link to="/">
                    <img src={logo} className="w-12 h-12" />
                  </Link>
                </li>
              </div>
              <div className="flex flex-col mt-14 gap-4 text-header-white tracking-[1.5px]">
                <li className="list-none">
                  <Link
                    to="/docs/Getting-Started/Prerequisites"
                    className="relative nav-bar"
                  >
                    DOCS
                  </Link>
                </li>
                <li className="list-none">
                  <Link to="/contact" className="relative nav-bar">
                    CONTACT
                  </Link>
                </li>
              </div>
              <div className="border-b mt-4"></div>
              {isDocPage && <LeftSidebar />}
            </div>
            <div className="flex gap-4 items-center pl-4 py-4 border-2 rounded-lg mb-6 border-custom-pink text-custom-pink">
              <a
                href="https://github.com/dagimg-dot/cjx-cli-tool"
                target={"_blank"}
                title={"Github Link"}
              >
                <FaGithub className="scale-[2] " />
              </a>
              <div>9 Stars ⭐</div>
            </div>
          </div>
          <div className="w-1/3 bg-white/30" onClick={onClick}></div>
        </div>
      )}
    </div>
  );
};

export default SideNavBar;
