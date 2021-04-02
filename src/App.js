import './App.css';
import React, { useState } from 'react';

// ! APP Components
import Sidebar from './components/Sidebar';
import MainChat from './components/MainChat';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Login from './components/Login';
import { useStateValue } from './StateProvider';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [{ user }] = useStateValue();

  return (
    <main>
      {!user ? (
        <Login />
      ) : (
        <div className="App">
          <Router>
            {/* Sidebar component */}
            <Sidebar darkMode={darkMode} setDM={setDarkMode} />
            <Switch>
              <Route path="/rooms/:roomId">
                {/* Chat component */}
                <MainChat />
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </main>
  );
}

export default App;
