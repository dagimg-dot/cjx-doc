import DocBody from "../component/DocBody";
import NavigationBar from "../component/NavigationBar";
import Menu from "../component/Menu";
import { GlobalContext, GlobalProvider } from "../store/store";
import { useContext } from "react";

export default function () {
  const { parent } = useContext(GlobalContext);

  return (
    <div className="bg-bodyGradient w-screen h-screen">
      <NavigationBar />
      <h1 className="text-white">Docs</h1>
      <GlobalProvider>
        {Object.keys(parent).map((menu_item, index) => (
          <Menu key={menu_item} menu_name={menu_item} />
        ))}
        <DocBody />
      </GlobalProvider>
    </div>
  );
}
