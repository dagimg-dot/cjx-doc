import Hero from "../component/Hero";
import MoreInfo from "../component/MoreInfo";
import Default from "../layout/Default";

export default function () {
  return (
    <div className="bg-bodyGradient">
      <div className="h-screen">
        <Default>
          <Hero />
        </Default>
      </div>
      <div className="h-screen">
        <MoreInfo />
      </div>
    </div>
  );
}
