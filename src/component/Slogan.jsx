export default function Slogan() {
  const scrollToMoreInfo = () => {
    const element = document.getElementById("cjx-heading");
    element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="flex flex-col justify-center items-center  text-center absolute top-55 lg:mx-60 xl:mx-80 text-custom-pink">
      <p className="text-[60px] tracking-[-6.42px] leading-[60px] font-bold">
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
}
