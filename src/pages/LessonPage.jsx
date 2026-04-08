// src/pages/LessonPage.jsx
import { useParams } from "react-router-dom";
import GameEngine from "../components/lesson/GameEngine";

function LessonPage() {
  const { level } = useParams();
  return <GameEngine startLevel={parseInt(level) || 1} />;
}

export default LessonPage;
