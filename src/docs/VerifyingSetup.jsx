import CodeSnippet from "../component/DocComponent/CodeSnippet";
import MainHeading from "../component/DocComponent/MainHeading";
import SecondaryHeading from "../component/DocComponent/SecondaryHeading";
import Terminal from "../layout/Terminal";

const VerifyingSetup = () => {
  return (
    <div className="mb-4 mr-8">
      <MainHeading>3. Verifying Setup</MainHeading>
      <p>
        After successful installation, it is recommended to run the{" "}
        <CodeSnippet>cjx -v</CodeSnippet> or{" "}
        <CodeSnippet>cjx --vesion</CodeSnippet> command to check if the process
        was smooth and you can see the wonders of CJX right away.
      </p>
      <Terminal>
        <p>cjx -v</p>
      </Terminal>
      <p className="mb-4">
        If there is any error. You should use the{" "}
        <CodeSnippet>cjx doctor</CodeSnippet> command to further investigate
        what went wrong.
      </p>
      <Terminal>
        <p>cjx doctor</p>
      </Terminal>
      <div className="border-l-4 border-red-500 p-5 text-[#b4a4a4]">
        <SecondaryHeading className="mb-4">⚠️ Caution</SecondaryHeading>
        <p>
          CJX CLI is currently built for Windows users only. Users of other
          platforms should wait until their corresponding operating systems are
          supported.
        </p>
      </div>
    </div>
  );
};

export default VerifyingSetup;
