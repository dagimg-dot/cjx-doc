import Bash from "./Bash";
import Features from "./Features";

export default function MoreInfo() {
  return (
    <div className="flex px-20 text-custom-pink items-center pt-10">
      <div className="flex flex-col">
        <p
          className="font-sans text-[52px] font-bold tracking-[-3px] py-5"
          id="cjx-heading"
        >
          cjx cli
        </p>
        <div className="flex justify-between">
          <div className="flex flex-col w-1/2">
            <p className="font-consolas leading-6 text-[18px]">
              cjx is a command line tool that lets you setup your javaFX
              development environment in visual studio code.
            </p>
            <Features />
          </div>
        </div>
      </div>
      <Bash />
    </div>
  );
}
