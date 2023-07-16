import { FaGithub } from "react-icons/fa";
import logo from "../assets/image/cjx-logo.png"
import 'typeface-poppins'
import '../css/NavigationBarHover.css'

export default function NavigationBar() {
 
  return (
    <div className="flex justify-between px-5 py-3 pl-8 bg-header-black text-white font-sans">
      <div>
        <li className="list-none ">
          <img src={logo} className="w-10 h-10" />
        </li>
      </div>
      <div className="flex py-3">
        <li className="mx-auto list-none px-3">
          <a href="#" className="text-[11px] text-header-white tracking-[1.5px] relative nav-bar ">DOCS<span className=""></span></a>
        </li>
        <li className="mx-auto list-none px-3">
          <a href="#" className="text-[11px] text-header-white tracking-[1.5px] relative nav-bar">CONTACT<span className=""></span></a>
        </li>
      </div>
      <div className="flex py-3 items-center">
        <li className="list-none pr-3">
          <a href="https://github.com/dagimg-dot/cjx-cli-tool" target={"_blank"} title={"Github Link"} ><FaGithub className="scale-140 "/></a>
        </li>
      </div>
    </div>
  );
}
