// SplashPage.jsx
import { useNavigate } from "react-router-dom";

function LessonPage() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Splash</h1>
      <button onClick={() => navigate("/login")}>Go to Login</button>
    </div>
  );
}

export default LessonPage;
