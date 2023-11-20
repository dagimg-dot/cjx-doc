import Bash from "./Bash";
import Features from "./Features";

const MoreInfo = () => {
  return (
    <div className="grid grid-cols-2 gap-24 px-20 text-custom-pink pt-10  mimd:grid-cols-1 mimd:place-items-center">
      <div>
        <p
          className="font-sans text-[52px] font-bold tracking-[-3px] py-5"
          id="cjx-heading"
        >
          cjx cli
        </p>
        <div className="flex flex-col ">
          <p className="font-consolas leading-6 text-[18px]">
            cjx is a command line tool that lets you setup your javaFX
            development environment in visual studio code Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Nobis ex esse quae harum
            veritatis. Non numquam repellat quaerat consequatur! Quasi facere
          </p>
          <Features />
        </div>
      </div>
      <Bash />
    </div>
  );
};

export default MoreInfo;
