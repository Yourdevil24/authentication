import { BrowserRouter, Routes, Route } from "react-router";

import HomePage from './pages/HomePage';
import StudentsPage from './pages/StudentsPage';
import TeachersPage from './pages/TeachersPage';
import EventsPage from './pages/EventsPage';
import AchievementsPage from './pages/AchievementsPage';
import ShiftsPage from './pages/ShiftsPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
const App = () => {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/students" element={<StudentsPage />} />
        <Route path="/teachers" element={<TeachersPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/achievements" element={<AchievementsPage />} />
        <Route path="/shifts" element={<ShiftsPage />} />
        <Route path="/register" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
  );
};

export default App;
