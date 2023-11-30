import DocBody from "../component/DocBody";
import { GlobalProvider } from "../store/store";
import Default from "../layout/Default";
import LeftSidebar from "../component/LeftSidebar";
import RightSidebar from "../component/RightSidebar";
import { docPagesList } from "../utils/data";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Docs = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.hash === "") {
      navigate(`#${docPagesList[0]}`, {
        replace: true,
      });
    }
  }, [location]);

  return (
    <div className="bg-bodyGradient">
      <GlobalProvider>
        <Default>
          <div className="grid grid-cols-5 h-full w-full pt-28 px-28 mdsm:pt-0 mdsm:pl-5 maxmd:pl-4 maxmd:pr-0 maxmd:grid-cols-6 mimd:px-14 text-[13px] maxx:px-14">
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
      </GlobalProvider>
    </div>
  );
};

export default Docs;
