import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/image/cjx-logo.png"
import 'typeface-poppins'
import '../css/NavigationBarHover.css'

export default function NavigationBar() {
 
  return (
    <div className="flex justify-between p-5 pl-8 bg-header-black text-white font-sans">
      <div>
        <li className="list-none ">
          <Link to="/"><img src={logo} className="w-12 h-12" /></Link>
        </li>
      </div>
      <div className="flex py-3">
        <li className="mx-auto list-none px-3">
          <Link to="/docs" className="text-[11px] text-header-white tracking-[1.5px] relative nav-bar ">DOCS<span className=""></span></Link>
        </li>
        <li className="mx-auto list-none px-3">
          <Link to="/contact" className="text-[11px] text-header-white tracking-[1.5px] relative nav-bar">CONTACT<span className=""></span></Link>
        </li>
      </div>
      <div className="flex py-3 px-5 items-center">
        <li className="list-none">
          <a href="https://github.com/dagimg-dot/cjx-cli-tool" target={"_blank"} title={"Github Link"} ><FaGithub className="scale-150"/></a>
        </li>
      </div>
    </div>
  );
}
