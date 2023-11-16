import { useState, useEffect } from "react";

const useAnimation = (displayList) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);
  const [displayedCommand, setDisplayedCommand] = useState("");

  useEffect(() => {
    const command = displayList[currentIndex];
    let typingTimer;

    const startTyping = () => {
      typingTimer = setInterval(() => {
        if (currentCharacterIndex < command.length) {
          setDisplayedCommand(
            (prevCommand) => prevCommand + command[currentCharacterIndex]
          );
          setCurrentCharacterIndex((prevIndex) => prevIndex + 1);
        } else {
          clearInterval(typingTimer);
          setTimeout(() => {
            setDisplayedCommand("");
            setCurrentIndex(
              (prevIndex) => (prevIndex + 1) % displayList.length
            );
            setCurrentCharacterIndex(0);
          }, 2000);
        }
      }, 100);
    };

    startTyping();

    return () => {
      clearInterval(typingTimer);
    };
  }, [displayList, currentIndex]);

  return displayedCommand;
};

export default useAnimation;
