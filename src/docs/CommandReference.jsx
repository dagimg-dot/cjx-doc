import CodeSnippet from "../component/DocComponent/CodeSnippet";
import MainHeading from "../component/DocComponent/MainHeading";
import SecondaryHeading from "../component/DocComponent/SecondaryHeading";

const CommandReference = () => {
  return (
    <div className="mb-4 mr-8">
      <MainHeading>Command Reference</MainHeading>
      <SecondaryHeading>
        <code>{"> "}cjx init</code>
      </SecondaryHeading>
      <p className="mb-6">
        The <CodeSnippet>cjx init</CodeSnippet> command initializes the CJX CLI
        and is to be run only once inside the cjx folder.
      </p>
      <SecondaryHeading>
        <code>{"> "}cjx setup</code>
      </SecondaryHeading>
      <p className="mb-6">
        The <CodeSnippet>cjx setup /path/to/sdk/dir/</CodeSnippet> command
        initializes the CJX CLI and is to be run only once inside the cjx
        folder.
      </p>
      <SecondaryHeading>
        <code>{"> "}cjx create</code>
      </SecondaryHeading>
      <p className="mb-6">
        The <CodeSnippet>cjx create</CodeSnippet> command allows you to create
        new JavaFX projects, including simple and FXML project structures.
      </p>
      <SecondaryHeading>
        <code>{"> "}cjx clone</code>
      </SecondaryHeading>
      <p className="mb-6">
        Utilize the <CodeSnippet>cjx clone</CodeSnippet> command to clone JavaFX
        projects from Git repositories and configure them for offline
        development.
      </p>
      <SecondaryHeading>
        <code>{"> "}cjx doctor</code>
      </SecondaryHeading>
      <p className="mb-6">
        the <CodeSnippet>cjx doctor</CodeSnippet> command performs a system
        check to ensure everything is set up correctly for JavaFX development.
      </p>
    </div>
  );
};

export default CommandReference;
