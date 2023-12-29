import Button from "./Button";

const Slogan = () => {
  const scrollToMoreInfo = () => {
    const element = document.getElementById("cjx-heading");
    element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="flex flex-col justify-center items-center  text-center absolute left-1/2  top-1/2 -translate-x-1/2 -translate-y-1/2 text-custom-pink">
      <p className="text-[60px] tracking-[-6.42px] leading-[60px] font-bold maxmd:text-[55px] minmd:text-[50px] smd:text-[47px] maxsm:text-[42px]  maxmd:tracking-[-5.6px] smd:tracking-[-5.3px] maxsm:tracking-[-5px]  ">
        Effortless JavaFX Environment Setup in VS Code
      </p>
      <p className="text-[20px] pb-5 pt-3">Get Coding in Minutes!</p>
      <div className="flex gap-4">
        <Button style="transition duration-500 ease-in-out bg-gradient-to-r from-amber-800 to-yellow-500 py-2 px-8 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-amber-800">
          Download
        </Button>
        <a
          onClick={scrollToMoreInfo}
          className="border-2 border-lime-500 from-amber-800 to-yellow-500 py-2 px-8 text-white rounded-md cursor-pointer"
        >
          Explore
        </a>
      </div>
    </div>
  );
};

export default Slogan;
