import { prerequisiteLinks } from "../utils/data";
import Check from "../component/Check";
import { Link } from "react-router-dom";
import MainHeading from "../component/DocComponent/MainHeading";
import SecondaryHeading from "../component/DocComponent/SecondaryHeading";

const Prerequisites = () => {
  const linkName = Object.keys(prerequisiteLinks);

  return (
    <div>
      <MainHeading>1. Prerequisites</MainHeading>
      <SecondaryHeading>1. Other Programs</SecondaryHeading>
      <p className="mb-3">
        Before starting to work with this CLI tool. ensure that you have the
        following programs ready:
      </p>
      <div className="flex flex-col gap-4 pl-4 mb-3">
        {linkName.map((item, idx) => (
          <a
            href={prerequisiteLinks[item]}
            target="_blank"
            className="text-[#aab6dd]"
            key={item}
          >
            {idx + 1}. {item}
          </a>
        ))}
      </div>
      <p className="mb-4">
        After downloading all the above you can proceed to the installation of
        CJX CLI.
      </p>
      <SecondaryHeading>2. Downloading CJX CLI</SecondaryHeading>
      <p className="mb-3">To download the CLI:</p>
      <div className="pl-4 flex flex-col gap-3">
        <div className="flex gap-2 items-center">
          <Check />
          <p>
            You can go to the{" "}
            <Link to="/" className="text-[#aab6dd]">
              {" "}
              Home{" "}
            </Link>{" "}
            page of this documentation website and click download.
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <Check />
          <p>
            You can go to the official{" "}
            <a
              href="https://github.com/dagimg-dot/cjx-cli-tool/releases"
              target="_blank"
              className="text-[#aab6dd]"
            >
              Github
            </a>{" "}
            repository of the project and download it there.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Prerequisites;
