import React, { useState }  from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import HighScores from './components/HighScores';
import HowToPlay from './components/HowToPlay';
import NotFound from './components/NotFound';
import Login from './components/Login';
import Register from './components/Register';
import SignUp from './components/SignUp';
import SignOut from './components/SignOut';
import SavedTerms from './components/SavedTerms';
import PracticeTest from './components/PracticeTest';
import Test from './components/Test';
import Rules from './components/Rules';
import Flashcards from './components/Flashcards';
import Profile from './components/Profile';

function App() {

  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleShowLoginModal = () => setShowLoginModal(true);
  const handleCloseLoginModal = () => setShowLoginModal(false);
  return (
    <Router>
      <div style={{ paddingTop: '56px' }}>
        <NavBar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/howtoplay" element={<HowToPlay />} />
          <Route path="/highscores" element={<HighScores />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>}/>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signout" element={<SignOut />} />
          <Route path="/savedterms" element={<SavedTerms />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/savedquestions" element={<SavedTerms />} />
          <Route path="/practicetest" element={<PracticeTest />} />
          <Route path="/test" element={<Test />} />
          <Route path="/flashcards" element={<Flashcards />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
