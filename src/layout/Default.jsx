import NavigationBar from "../component/NavigationBar";

const Default = ({ children }) => {
  return (
    <>
      <NavigationBar />
      {children}
    </>
  );
};

export default Default;
