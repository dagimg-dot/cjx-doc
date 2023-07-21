import NavigationBar from "../component/NavigationBar";
import jeremi from "../assets/image/Jeremi.jpg";
import jd from "../assets/image/jd.jpg";
import Socials from "../component/Socials";

export default function () {
  const emri_socials = {
    gh: "https://github.com/jeremi-code",
    li: "https://linkedin.com/in/ermias-sintayehu-03955224b/",
    ig: "https://instagram.com/jeremiah_ii",
  };

  const dagim_socials = {
    gh: "https://github.com/dagimg-dot",
    li: "https://linkedin.com/in/dagim-astatkie-1743a1239",
    ig: "https://instagram.com/jdaggi",
  };
  return (
    <div className="bg-bodyGradient">
      <NavigationBar />
      <div className="text-header-white grid grid-rows-2">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold">Intro</h1>
          <p className="m-3 text-center">
            We are 4th year SWE students and developers from BiT - Bahir Dar
            Inistitue of Technology, who are enthusiast about the tech world.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 max-lg:gap-10 px-16 py-6">
          <div className="flex flex-col justify-center items-center gap-4">
            <img src={jeremi} className="rounded-[100%] w-64 h-64" />
            <h1>Ermias S. Deresse</h1>
          </div>
          <div className="flex flex-col items-center justify-center text-header-white gap-3">
            <Socials {...emri_socials} />
            <h2>Software Developer</h2>
            <h2>Student at BiT</h2>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-1 max-lg:gap-10 px-16 py-6">
          <div className="flex flex-col items-center justify-center text-header-white gap-3 max-lg:order-last">
            <Socials {...dagim_socials} />
            <h2>Software Developer</h2>
            <h2>Student at BiT</h2>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <img src={jd} className="rounded-[100%] w-64 h-64" />
            <h1>Dagim G. Astatkie</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
