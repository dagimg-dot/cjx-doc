import CodeSnippet from "../component/DocComponent/CodeSnippet";
import MainHeading from "../component/DocComponent/MainHeading";
import SecondaryHeading from "../component/DocComponent/SecondaryHeading";
import Terminal from "../layout/Terminal";

const Updating = () => {
  return (
    <div className="mb-4 mr-8">
      <MainHeading>The Updating Process</MainHeading>
      <p>
        Step 1: First of all you need to navigate to the extracted folder of CJX
        that you downloaded at the start.
      </p>
      <p>Step 2: Go to the cjxupdate folder</p>
      <p>Step 3: Open you terminal here.</p>
      <p>Step 4: Now you can run the following commands.</p>
      <SecondaryHeading>1. Checking for Updates</SecondaryHeading>
      <p>
        Maintain your CJX CLI with the latest features and improvements. Use{" "}
        <CodeSnippet>cjxupdate -c</CodeSnippet> to check for updates.
      </p>
      <p>
        If a new version is available, the CLI will notify you, ensuring you're
        always up to date.
      </p>
      <Terminal>
        <p>cjxupdate -c</p>
      </Terminal>
      <SecondaryHeading>2. Updating CJX</SecondaryHeading>
      <p>
        Keep your CJX CLI current by running{" "}
        <CodeSnippet>cjxupdate -u</CodeSnippet> to apply available updates. Wait
        some time for the update to complete, and enjoy the enhanced features.
      </p>
      <Terminal>
        <p>cjxupdate -u</p>
      </Terminal>
      <SecondaryHeading>3. Verifying CLI Version</SecondaryHeading>
      <p>
        As mentioned in the Getting Started Section you can check the version of
        the CLI using the <CodeSnippet>cjx -v</CodeSnippet> or{" "}
        <CodeSnippet>cjx --version</CodeSnippet>
      </p>
    </div>
  );
};

export default Updating;
