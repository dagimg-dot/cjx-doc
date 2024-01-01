import Hero from "../component/Hero";
import MoreInfo from "../component/MoreInfo";
import Default from "../layout/Default";

const Home = () => {
  return (
    <div className="bg-bodyGradient">
      <div className="h-[100dvh]">
        <Default>
          <Hero />
        </Default>
      </div>
      <div className="pb-48">
        <MoreInfo />
      </div>
    </div>
  );
};

export default Home;
