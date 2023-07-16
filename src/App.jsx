import NavigationBar from "./component/NavigationBar"
import CjxBody from "./component/cjxBody"
import MoreInfo from "./component/MoreInfo";

function App() {
  return (
    <div className="bg-bodyGradient">
      <NavigationBar/>
      <CjxBody/>
      <MoreInfo/>
    </div>
  );
}

export default App;
