import DocBody from "../component/DocBody";
import Menu from "../component/Menu";
import { GlobalContext, GlobalProvider } from "../store/store";
import { useContext } from "react";
import Default from "../layout/Default";

export default function () {
  const { parent } = useContext(GlobalContext);

  const parents = Object.keys(parent);

  return (
    <div className="bg-bodyGradient w-screen h-screen">
      <Default>
        <h1 className="text-white">Docs</h1>
        <GlobalProvider>
          {parents.map((menu_item) => (
            <Menu key={menu_item} menu_name={menu_item} />
          ))}
          <DocBody />
        </GlobalProvider>
      </Default>
    </div>
  );
}
