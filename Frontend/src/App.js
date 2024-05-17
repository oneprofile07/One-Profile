import { Route, Routes } from 'react-router-dom'
import UserProfile from './UserProfile/UserProfile.js';
import UserProfile2 from './UserProfile/UserProfile2.js';
import './App.css'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<UserProfile />} />
        <Route path="/profile2" element={<UserProfile2 />} />
      </Routes>
    </>
  );
}

export default App;
