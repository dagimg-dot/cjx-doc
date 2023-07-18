import NavigationBar from "./component/NavigationBar"
import CjxBody from "./component/cjxBody"
import MoreInfo from "./component/MoreInfo";

function App() {
  return (
    <div className="bg-bodyGradient">
      <div className="w-screen h-screen">
        <NavigationBar/>
        <CjxBody/>
      </div>
      <div className="w-screen h-screen"><MoreInfo/></div>
    </div>
  );
}

export default App;
