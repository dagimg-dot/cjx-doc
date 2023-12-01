import { Link } from "react-router-dom";
import logo from "../assets/image/cjx-logo.png";
import { FaGithub } from "react-icons/fa";

const SideNavBar = ({ onClick, isOpen }) => {
  return (
    <div className="flex flex-col">
      {isOpen && (
        <div className="flex h-screen w-full justify-between fixed left-0 top-0 z-20">
          <div className="flex flex-col bg-bodyGradient w-1/2 px-5 pt-5">
            <div className="flex-grow">
              <div className="">
                <li className="list-none">
                  <Link to="/">
                    <img src={logo} className="w-12 h-12" />
                  </Link>
                </li>
              </div>
              <div className="flex flex-col mt-14 gap-4 text-header-white tracking-[1.5px]">
                <li className="list-none">
                  <Link to="/docs" className="relative nav-bar ">
                    DOCS
                  </Link>
                </li>
                <li className="list-none">
                  <Link to="/contact" className="relative nav-bar">
                    CONTACT
                  </Link>
                </li>
              </div>
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
          <div className="w-1/2 bg-white/30" onClick={onClick}></div>
        </div>
      )}
    </div>
  );
};

export default SideNavBar;
