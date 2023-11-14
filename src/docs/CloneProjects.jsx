import CodeSnippet from "../component/DocComponent/CodeSnippet";
import MainHeading from "../component/DocComponent/MainHeading";
import Terminal from "../layout/Terminal";

const CloneProjects = () => {
  return (
    <div className="mb-4 mr-8">
      <MainHeading>2. Cloning Projects</MainHeading>
      <p>
        CJX lets you collaborate or work on existing JavaFX projects by letting
        you clone them from a Git repository.
      </p>
      <p>
        You can use the <CodeSnippet>cjx clone project-url</CodeSnippet> to
        fetch the project, set it up locally for offline development, and
        configure the necessary settings for Visual Studio Code, streamlining
        your development process.
      </p>
      <Terminal>
        <p>cjx clone project-url</p>
      </Terminal>
    </div>
  );
};

export default CloneProjects;
