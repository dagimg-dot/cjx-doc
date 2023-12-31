import DocPages from "./docPages";

const features = [
  "initialize a JavaFx project easily",
  "faster development",
  "git integration out of the box",
  "easy installaion",
  "and many more . . . ",
];

const prerequisiteLinks = {
  "Java 11 or higher":
    "https://www.oracle.com/java/technologies/javase-jdk11-downloads.html",
  "VS Code": "https://code.visualstudio.com/download",
  "VS Code Java Extension Pack":
    "https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack",
  "JavaFX SDK": "https://gluonhq.com/products/javafx/",
  Git: "https://git-scm.com/downloads",
  "Scene Builder Extenstion for VS Code":
    "https://marketplace.visualstudio.com/items?itemName=bilalekrem.scenebuilderextension",
};

const onThisPageTopics = {
  Prerequisites: ["Other Programs", "Downloading CJX CLI"],
  "Setting Up The Environment": [
    "Initializing CJX",
    "Specifying JavaFX SDK Path",
    "Adding CJX CLI to Path",
  ],
  "Verifying Setup": [],
  "New Project": ["Simple JavaFX Project", "Advanced FXML Project"],
  "Cloning Projects": [],
  "Command Reference": [
    "cjx init",
    "cjx setup",
    "cjx create",
    "cjx clone",
    "cjx doctor",
  ],
  "The Updating Process": [
    "Checking for updates",
    "Updating CJX",
    "Verifying CLI Version",
  ],
  "Common Problems": [
    "cjx is not recognised",
    "cjx sdk path is not set",
    "For other errors",
  ],
  FAQs: [],
};

const docPagesList = Object.keys(onThisPageTopics)

export { features, prerequisiteLinks, onThisPageTopics, docPagesList };
