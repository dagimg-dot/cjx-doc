import Hero from "../component/Hero";
import MoreInfo from "../component/MoreInfo";
import Default from "../layout/Default";

const Home = () => {
  return (
    <div className="bg-bodyGradient">
      <div className="h-screen">
        <Default>
          <Hero />
        </Default>
      </div>
      <div>
        <MoreInfo />
      </div>
    </div>
  );
};

export default Home;
