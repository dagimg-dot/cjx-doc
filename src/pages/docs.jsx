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
    <div className="bg-bodyGradient h-screen">
      <GlobalProvider>
        <Default>
          <div className="grid grid-cols-5 h-full w-full pt-28 px-28 text-[13px]">
            <div className="flex flex-col border-r border-custom-white overflow-y-auto">
              <LeftSidebar />
            </div>
            <div className="flex flex-col border-r border-custom-white col-span-3 mx-8 text-white text-[14px] overflow-y-auto">
              <DocBody />
            </div>
            <div className="text-white flex flex-col overflow-y-auto">
              <RightSidebar />
            </div>
          </div>
        </Default>
      </GlobalProvider>
    </div>
  );
};

export default Docs;
