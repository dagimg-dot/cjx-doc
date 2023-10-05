import NavigationBar from "../component/NavigationBar";

export default function Default({ children }) {
  return (
    <>
      <NavigationBar />
      {children}
    </>
  );
}
