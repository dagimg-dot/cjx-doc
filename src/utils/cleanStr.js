const cleanStr = (str) => {
  if (str.split("").includes("-")) {
    return str.replace(/-/g, " ");
  }
  return str;
};

export default cleanStr;
