const readMDFile = async (filePath) => {
  try {
    const response = await fetch(filePath);
    const mdText = await response.text();
    return mdText;
  } catch (error) {
    console.error("Error reading MD file:", error);
    return null;
  }
};

export default readMDFile;
