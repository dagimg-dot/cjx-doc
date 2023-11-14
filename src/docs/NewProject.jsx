import React from "react";
import CodeSnippet from "../component/DocComponent/CodeSnippet";
import MainHeading from "../component/DocComponent/MainHeading";
import SecondaryHeading from "../component/DocComponent/SecondaryHeading";
import Terminal from "../layout/Terminal";

const NewProject = () => {
  return (
    <div className="mb-4 mr-8">
      <MainHeading>1. New Project</MainHeading>
      <SecondaryHeading>1. Simple JavaFX Project</SecondaryHeading>
      <p>
        The word 'Simple' refers a straightforward JavaFX project. This means
        the project only contains <code>.java</code> files and you are about to
        hard code all the views using java only 😁.
      </p>
      <p>
        To create simple project, you can use the{" "}
        <CodeSnippet>cjx create simple project-name</CodeSnippet>
      </p>
      <Terminal>
        <p>cjx create simple project-name</p>
      </Terminal>
      <SecondaryHeading>2. Advanced FXML Project</SecondaryHeading>
      <p>
        This kind of project is a more advanced one and it contains{" "}
        <code>.fxml</code>
        files which are essentially for creating the view of JavaFX projects.
      </p>
      <p>
        To create simple project, you can use the{" "}
        <CodeSnippet>cjx create jfxml project-name</CodeSnippet>
      </p>
      <Terminal>
        <p>cjx create jfxml project-name</p>
      </Terminal>
    </div>
  );
};

export default NewProject;
