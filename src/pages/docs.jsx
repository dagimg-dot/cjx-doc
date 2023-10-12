import DocBody from "../component/DocBody";
import { GlobalProvider } from "../store/store";
import Default from "../layout/Default";
import LeftSidebar from "../component/LeftSidebar";

export default function () {
  return (
    <div className="bg-bodyGradient w-screen h-screen">
      <Default>
        <GlobalProvider>
          <div className="grid grid-cols-4 ">
            <div className="flex flex-col border-r border-custom-white items-center">
              <LeftSidebar />
            </div>
            <div className="flex flex-col border-r border-custom-white col-span-2">
              <DocBody />
            </div>
            <div className="text-white flex flex-col items-center">scroll over </div>
          </div>
        </GlobalProvider>
      </Default>
    </div>
  );
}
