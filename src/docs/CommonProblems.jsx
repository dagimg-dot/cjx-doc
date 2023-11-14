import CodeSnippet from "../component/DocComponent/CodeSnippet";
import MainHeading from "../component/DocComponent/MainHeading";
import SecondaryHeading from "../component/DocComponent/SecondaryHeading";
import Terminal from "../layout/Terminal";

const CommonProblems = () => {
  return (
    <div className="mb-4 mr-8">
      <MainHeading>1. Common Problems</MainHeading>
      <SecondaryHeading>1. cjx is not recognized</SecondaryHeading>
      <p className="mb-3">
        This is mainly due to the missing of <code>cjx</code> in the environment
        variables. This happens because cjx is still not available globally.
      </p>
      <p className="mb-3">
        To fix this issue you can add the cjx directory to the environment
        variables.
      </p>
      <p>
        This issue is unlikely to happen in the recent versions because the CLI
        tool will handle adding itself to the environment variables. So, you
        better update it.
      </p>
      <SecondaryHeading>2. cjx sdk path is not set</SecondaryHeading>
      <p>
        This issue happens because you jumped a crucial step in setting up CJX
        in your system.
      </p>
      <p>
        To resolve this issue go back and read the Getting Started section
        specifically the Setting Up Environment part.
      </p>
      <SecondaryHeading>For other errors</SecondaryHeading>
      <p>
        First run <CodeSnippet>cjx doctor</CodeSnippet> to see what is wrong
      </p>
      <Terminal>
        <p>cjx doctor</p>
      </Terminal>
    </div>
  );
};

export default CommonProblems;
