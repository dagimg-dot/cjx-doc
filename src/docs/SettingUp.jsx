import CodeSnippet from "../component/DocComponent/CodeSnippet";
import MainHeading from "../component/DocComponent/MainHeading";
import SecondaryHeading from "../component/DocComponent/SecondaryHeading";
import Terminal from "../layout/Terminal";

const SettingUp = () => {
  return (
    <div className="mb-4">
      <MainHeading>2. Setting Up the Environment</MainHeading>
      <SecondaryHeading>1. Initializing CJX</SecondaryHeading>
      <div className="flex flex-col gap-2 mr-8">
        <p>
          Step 1: After downloading the zip file of the CLI. Put it in a folder
          of your choice.
        </p>
        <p>
          Step 2: Open the terminal and navigate to the extracted folder of CJX
          CLI.
        </p>
        <p>
          Step 3: type <CodeSnippet>cjx init</CodeSnippet> and hit enter.
        </p>
        <Terminal style={""}>
          <p>cjx init</p>
        </Terminal>
        <SecondaryHeading>2. Specifying JavaFX SDK Path</SecondaryHeading>
        <p>
          While you are inside the CJX folder you can use the{" "}
          <CodeSnippet>cjx setup /path/to/sdk/dir/</CodeSnippet> command to
          define the path to the directory of the downloaded JavaFX SDK.
        </p>
        <Terminal style={""}>
          <p>cjx setup /path/to/sdk/dir/</p>
        </Terminal>
        <SecondaryHeading>
          3. Adding it to Environment Variables
        </SecondaryHeading>
        <p>
          In the older versions of the CLI tool you had to manually add it to
          the environment variables to use it everywhere in your machine.
        </p>
        <p>
          However, starting from v3.1 <CodeSnippet>cjx init</CodeSnippet> will
          do all the heavy manual work and let's you use the amazing features of
          CJX out of the box.
        </p>
      </div>
    </div>
  );
};

export default SettingUp;
