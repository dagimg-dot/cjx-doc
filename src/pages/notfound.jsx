import Button from "../component/Button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="h-[100dvh] w-screen bg-bodyGradient flex flex-col gap-6 items-center text-bash-white">
      <div className="text-9xl font-bold pt-20">404</div>
      <div className="text-3xl">Page not found</div>
      <Link to="/">
        <Button>Home</Button>
      </Link>
    </div>
  );
};

export default NotFound;
