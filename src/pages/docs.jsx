import DocBody from "../component/DocBody";
import { GlobalProvider } from "../store/store";
import Default from "../layout/Default";
import LeftSidebar from "../component/LeftSidebar";

export default function () {
  return (
    <div className="bg-bodyGradient w-screen h-screen">
      <Default>
        <h1 className="text-white">Docs</h1>
        <GlobalProvider>
          <LeftSidebar />
          <DocBody />
        </GlobalProvider>
      </Default>
    </div>
  );
}
