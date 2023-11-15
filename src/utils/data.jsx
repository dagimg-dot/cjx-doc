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

const docPagesList = Object.keys(DocPages);

export { features, prerequisiteLinks, docPagesList };
