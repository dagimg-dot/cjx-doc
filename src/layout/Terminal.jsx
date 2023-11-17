import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const Terminal = ({ style, children }) => {
  return (
    <div
      className={`flex flex-col bg-black font-consolas text-bash-white mt-6 mb-6 border border-custom-white rounded-lg ${style}`}
    >
      <div className="flex border-b border-custom-white  py-2 mb-2">
        <div>
          <FontAwesomeIcon
            icon={faCircle}
            className="text-red-500 text-xs mt-1 ml-5"
          />
          <FontAwesomeIcon
            icon={faCircle}
            className="text-yellow-500 text-xs mt-1 ml-2"
          />
          <FontAwesomeIcon
            icon={faCircle}
            className="text-green-500 text-xs mt-1 ml-2 mr-6"
          />
        </div>
        <p className="text-sm flex-grow ml-40 ">bash</p>
      </div>
      <div className="p-4 flex gap-4">
        {"$ "}
        {children}
      </div>
    </div>
  );
};

export default Terminal;
