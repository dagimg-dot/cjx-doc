import MainHeading from "../component/DocComponent/MainHeading";
import SecondaryHeading from "../component/DocComponent/SecondaryHeading";

const FAQs = () => {
  return (
    <div className="mb-4 mr-8">
      <MainHeading>FAQs</MainHeading>
      <SecondaryHeading>
        1. When will be CJX available in other platforms ?
      </SecondaryHeading>
      <p className="pl-4 mb-6">
        CJX CLI will be available to other platforms very soon.
      </p>
      <SecondaryHeading>
        2. What is the main benefit of using this tool ?
      </SecondaryHeading>
      <p className="pl-4 mb-6">
        This tool is built considering the popularity of VS Code and the amount
        of people not wanting to leave it because of JavaFX development. So, it
        gives you the best of both worlds.
      </p>
      <SecondaryHeading>3. Who is the creator of this tool ?</SecondaryHeading>
      <p className="pl-4 mb-6">
        The creator of this tool is{" "}
        <a
          href="http://github.com/dagimg-dot"
          target="_blank"
          className="text-[#aab6dd]"
        >
          Dagim G. Astatkie
        </a>
      </p>
    </div>
  );
};

export default FAQs;
