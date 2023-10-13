import CjxBody from "../component/cjxBody";
import MoreInfo from "../component/MoreInfo";
import Default from "../layout/Default";

export default function () {
  return (
    <div className="bg-bodyGradient">
      <div className="h-screen">
        <Default>
          <CjxBody />
        </Default>
      </div>
      <div className="h-screen">
        <MoreInfo />
      </div>
    </div>
  );
}
