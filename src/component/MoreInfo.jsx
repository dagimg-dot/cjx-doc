import Bash from "./Bash";
import Features from "./Features";

const MoreInfo = () => {
  return (
    <div className="grid grid-cols-2 gap-24  text-custom-pink pt-10  mimd:grid-cols-1 mimd:place-items-center xsm:place-items-start">
      <div className="px-20 xsm:px-10">
        <p
          className="font-sans text-[52px] font-bold tracking-[-3px] py-5"
          id="cjx-heading"
        >
          cjx cli
        </p>
        <div className="flex flex-col ">
          <p className="font-consolas leading-6 text-[18px]">
            cjx is a command line tool that lets you setup your javaFX
            development environment in visual studio code. With this tool in
            your toolkit JavaFX development becomes a breeze. Try and witness it
            yourself. These are the features it provides:
          </p>
          <Features />
        </div>
      </div>
      <div className="px-10 mimd:w-3/4 midsm:px-5 mism:px-0 xsm:w-full xsm:px-5 xxsm:px-2">
        <Bash />
      </div>
    </div>
  );
};

export default MoreInfo;
