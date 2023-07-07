import React, { useState, useEffect } from 'react';

const TypingText = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);
  const [pauseTime, setPauseTime] = useState(1000);
  const words = ['Hello', 'World', 'Example'];

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[currentIndex];
      const isDeletingWord = isDeleting && text === currentWord;

      if (isDeletingWord) {
        setTypingSpeed(50); // Speed up deleting
      }

      // Update the text based on typing or deleting
      setText((prevText) =>
        isDeletingWord ? prevText.slice(0, -1) : prevText + currentWord[prevText.length]
      );

      // Move to the next word or repeat the process
      if (!isDeleting && text === currentWord) {
        setTypingSpeed(100); // Reset typing speed
        setPauseTime(1000); // Pause after typing
        setIsDeleting(true);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex === words.length - 1 ? 0 : prevIndex + 1));
      }
    };

    const typingTimer = setTimeout(handleTyping, typingSpeed);
    const pauseTimer = setTimeout(handleTyping, pauseTime);

    return () => {
      clearTimeout(typingTimer);
      clearTimeout(pauseTimer);
    };
  }, [text, currentIndex, isDeleting, typingSpeed, pauseTime]);

  return <h1>{text}</h1>;
};

export default TypingText;