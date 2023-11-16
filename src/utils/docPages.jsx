import CloneProjects from "../docs/CloneProjects";
import CommandReference from "../docs/CommandReference";
import CommonProblems from "../docs/CommonProblems";
import FAQs from "../docs/FAQs";
import NewProject from "../docs/NewProject";
import Prerequisites from "../docs/Prerequisites";
import SettingUp from "../docs/SettingUp";
import Updating from "../docs/Updating";
import VerifyingSetup from "../docs/VerifyingSetup";

const DocPages = {
  Prerequisites: <Prerequisites />,
  "Setting Up the Environment": <SettingUp />,
  "Verifying Setup": <VerifyingSetup />,
  "New Project": <NewProject />,
  "Cloning Projects": <CloneProjects />,
  "Command Reference": <CommandReference />,
  "The Updating Process": <Updating />,
  "Common Problems": <CommonProblems />,
  FAQs: <FAQs />,
};

export default DocPages;
