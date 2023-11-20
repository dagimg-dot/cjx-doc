const Slogan = () => {
  const scrollToMoreInfo = () => {
    const element = document.getElementById("cjx-heading");
    element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="flex flex-col justify-center items-center  text-center absolute left-1/2 -translate-x-1/2 maxsm:top-1/3 text-custom-pink">
      <p className="text-[60px] tracking-[-6.42px] leading-[60px] font-bold maxmd:text-[55px] minmd:text-[50px] smd:text-[47px] maxsm:text-[42px]  maxmd:tracking-[-5.6px] smd:tracking-[-5.3px] maxsm:tracking-[-5px]  ">
        Effortless JavaFX Environment Setup in VS Code
      </p>
      <p className="text-[20px] pb-5 pt-3">Get Coding in Minutes!</p>
      <div className="flex gap-4">
        <button className="bg-gradient-to-r from-amber-800 to-yellow-500 py-2 px-8 text-white rounded-md cursor-default">
          Download
        </button>
        <a
          onClick={scrollToMoreInfo}
          className="border-2 border-lime-500 from-amber-800 to-yellow-500 py-2 px-8 text-white rounded-md cursor-default"
        >
          Explore
        </a>
      </div>
    </div>
  );
};

export default Slogan;
