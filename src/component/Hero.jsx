import "typeface-poppins";
import Slogan from "./Slogan";

const Hero = () => {
  return (
    <div className="flex flex-col text-center justify-center text-custom-pink -mt-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute w-full ">
      <p className="blur-xl text-[400px] font-sans md:text-2xl maxsm:text-[300px]">cjx</p>
      <Slogan />
    </div>
  );
};

export default Hero;
