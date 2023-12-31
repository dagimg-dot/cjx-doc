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
  "Getting Started": {
    Prerequisites: <Prerequisites />,
    "Setting Up The Environment": <SettingUp />,
    "Verifying Setup": <VerifyingSetup />,
  },
  "Working with Projects": {
    "New Project": <NewProject />,
    "Cloning Projects": <CloneProjects />,
  },
  "CLI Commands": {
    "Command Reference": <CommandReference />,
  },
  "Updating CJX CLI": {
    "The Updating Process": <Updating />,
  },
  Troubleshooting: {
    "Common Problems": <CommonProblems />,
    FAQs: <FAQs />,
  },
};

export default DocPages;
