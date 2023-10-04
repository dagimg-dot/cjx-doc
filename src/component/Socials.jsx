import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Socials(props) {
  return (
    <div className="flex gap-8">
      <a href={props.gh} target="_blank">
        <FaGithub className="scale-150 text-header-white" />
      </a>
      <a href={props.li} target="_blank">
        <FaLinkedin className="scale-150 text-header-white" />
      </a>
      <a href={props.ig} target="_blank">
        <FaInstagram className="scale-150 text-header-white" />
      </a>
    </div>
  );
}
