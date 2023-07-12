import { FaGithub } from "react-icons/fa";
import logo from "../assets/image/cjx-logo.png"
import 'typeface-poppins'
export default function NavigationBar() {
  return (
    <div className="flex justify-between px-5 bg-black text-white font-sans">
      <div>
        <li className="list-none ">
          <img src={logo} className="w-10 h-10" />
        </li>
      </div>
      <div className="flex py-3">
        <li className="mx-auto list-none px-3">
          <a href="#">Docs</a>
        </li>
        <li className="mx-auto list-none px-3">
          <a href="#">Contact</a>
        </li>
      </div>
      <div className="flex py-3 items-center">
        <li className="list-none">
          <a href="https://github.com/dagimg-dot/cjx-cli-tool" target={"_blank"} title={"Github Link"} ><FaGithub className="scale-125"/></a>
        </li>
      </div>
    </div>
  );
}
