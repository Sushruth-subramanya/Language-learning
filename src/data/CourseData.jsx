// src/data/courseData.js

const K = (kn, pr) => ({ kn, pr });

export const COURSE = [
  // paste the entire COURSE array from the snippet here
];

export const getQuestionsPerLevel = (level) => {
  if (level >= 1 && level <= 5) return 5;
  if (level >= 6 && level <= 12) return 6;
  if (level >= 13 && level <= 20) return 8;
  return 10;
};

export const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};
