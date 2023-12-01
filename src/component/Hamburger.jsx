import { FaBars } from "react-icons/fa";
const Hamburger = ({ onClick }) => {
  return (
    <div className="hidden mdsm:flex">
      <FaBars
        className="text-2xl text-lime-500 mx-5 my-4 mdsm:mx-0"
        onClick={onClick}
      />
    </div>
  );
};

export default Hamburger;
