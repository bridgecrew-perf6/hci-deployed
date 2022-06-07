import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

//components import
import GetStarted from "./Components/GetStarted/GetStarted";
import LogIn from "./Components/LogIn/LogIn";
import Register from "./Components/Register/Register";
import Avatar from "./Components/Avatar/Avatar";
import Leaderboard from "./Components/Leaderboard.js/Leaderboard";
import Discover from "./Components/Discover/Discover";
import Personalinfo from "./Components/Personalinfo/Personalinfo";
import Blog from "./Components/Blog/Blog";
import GameOne from "./Components/Gamification/GameOne";
import GameTwo from "./Components/Gamification/GameTwo";

const App = () => {
  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GetStarted />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/avatar" element={<Avatar />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/bio" element={<Personalinfo />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/gameone" element={<GameOne />} />
          <Route path="/gametwo" element={<GameTwo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
