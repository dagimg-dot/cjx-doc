import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Socials({gh, li, ig}) {
  return (
    <div className="flex gap-8">
      <a href={gh} target="_blank">
        <FaGithub className="scale-150 text-header-white" />
      </a>
      <a href={li} target="_blank">
        <FaLinkedin className="scale-150 text-header-white" />
      </a>
      <a href={ig} target="_blank">
        <FaInstagram className="scale-150 text-header-white" />
      </a>
    </div>
  ); 
}
