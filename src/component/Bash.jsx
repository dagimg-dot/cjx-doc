import useAnimation from "../hooks/useAnimation";
import Terminal from "../layout/Terminal";

const Bash = () => {
  const bashCommands = [
    "cjx init",
    "cjx setup <JavaFX SDK directory>",
    "cjx create simple <Project Name>",
    "cjx create jfxml <Project Name>",
    "cjx clone <Project url>",
    "cjx doctor",
  ];

  const displayedCommand = useAnimation(bashCommands);

  return (
    <Terminal style={"w-full h-[350px] xsm:h-[300px] "}>
      <p className="text-sm tracking-[1.5px] mt-[1.5px] mism:tracking-[1px]">{`${displayedCommand}`}</p>
    </Terminal>
  );
};

export default Bash;
