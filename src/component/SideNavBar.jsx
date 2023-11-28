import { useState } from 'react'
import { Link, useLocation } from "react-router-dom";
import Hamburger from './Hamburger'
import { PAGES } from "../utils/types";
import SearchField from "./SearchField";
import logo from "../assets/image/cjx-logo.png";
import { FaGithub } from "react-icons/fa";

const SideNavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { pathname } = useLocation();
  const isDocPage = pathname.split("/").pop() === PAGES.DOCS;
  const paddingLeft = isDocPage ? "pl-56" : "";
  const onClick = () => {
    setIsOpen(!isOpen)
  }  
  return (
    <div className='flex flex-col '>
        {!isOpen ?
        <Hamburger onClick={onClick}/> :
        <div className='flex flex-col h-screen w-1/2 justify-between fixed left-0 top-0 bg-bodyGradient z-20 px-5'>
          <div className='mb-20 mt-10'>
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
        }
    </div>

  )
}

export default SideNavBar