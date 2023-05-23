import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './components/Home/Home';
import PasswordReset from './components/PasswordReset/PasswordReset';
import SignUp from './components/SignUp/SignUp';
import PersonalHome from './components/PersonalHome/PersonalHome';

import Links from './links/links';


import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={Links.Home} Component={Home} />
        <Route path={Links.PasswordReset} Component={PasswordReset} />
        <Route path={Links.SignUp} Component={SignUp} />
        <Route path={Links.PersonalHome} Component={PersonalHome} />
      </Routes>
    </Router>
  );
}

export default App;
