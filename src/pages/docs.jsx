import DocBody from "../component/DocBody";
import Default from "../layout/Default";
import LeftSidebar from "../component/LeftSidebar";
import RightSidebar from "../component/RightSidebar";

const Docs = () => {
  return (
    <div className="bg-bodyGradient h-[100dvh]">
        <Default>
          <div className="grid grid-cols-5 h-full w-full pt-28 px-28 text-white mdsm:pl-5 maxmd:pl-4 maxmd:pr-0 maxmd:grid-cols-6 mimd:px-14 text-[13px] maxx:px-14">
            <div className="flex flex-col border-r border-custom-white overflow-y-auto mdsm:hidden maxmd:col-span-2">
              <LeftSidebar />
            </div>
            <div className="flex flex-col border-r mdsm:border-r-0 border-custom-white col-span-3 mdsm:col-span-6 maxmd:col-span-4 mx-8 maxmd:mr-0 maxmd:border-r-0 maxmd:ml-4 text-white text-[14px] overflow-y-auto mdsm:mx-0">
              <DocBody />
            </div>
            <div className="text-white flex flex-col overflow-y-auto mdsm:hidden maxmd:hidden">
              <RightSidebar />
            </div>
          </div>
        </Default>
    </div>
  );
};

export default Docs;
