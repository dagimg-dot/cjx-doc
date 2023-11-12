import useAnimation from "../hooks/useAnimation";
import Terminal from "../layout/Terminal";

export default function Bash() {
  const bashCommands = [
    "cjx init",
    "cjx setup",
    "cjx create simple <Project Name>",
    "cjx clone <Project url>",
    "cjx doctor",
  ];

  const displayedCommand = useAnimation(bashCommands);

  return (
    <Terminal>
      <p className="text-[12px] mt-1 tracking-[1.5px] ml-4">{`$ ${displayedCommand}`}</p>
    </Terminal>
  );
}
