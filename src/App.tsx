import React, { useState, createContext } from "react";
import { Navigate, Route, Routes, BrowserRouter as Router } from "react-router-dom";
import FormPage from "./components/LoginFormPage";
import SignUpFormPage from "./components/Register";
import HomePage from "./components/HomePage";
import Movies from "./components/Movies";
import TvSeries from "./components/TvSeries";
import "./index.css";
import data from "../public/starter-code/data.json"

export interface FormData {
  email: string;
  password: string;
  repeatPassword: string;
}

interface MyContextType {
  showSignUpPage: boolean;
  setShowSignUpPage: React.Dispatch<React.SetStateAction<boolean>>;
  showHomePage: boolean;
  setShowHomePage: React.Dispatch<React.SetStateAction<boolean>>;
  bookmarks: boolean[];
  setBookmarks: React.Dispatch<React.SetStateAction<boolean[]>>
}

export const MyContext = createContext<MyContextType | null>(null);

function App() {
  const [showSignUpPage, setShowSignUpPage] = useState<boolean>(true);
  const [showHomePage, setShowHomePage] = useState<boolean>(false);
  const [bookmarks, setBookmarks] = useState(data.map(item => item.isBookmarked));

  return (
    <MyContext.Provider 
      value={{
        showSignUpPage,
        setShowSignUpPage,
        showHomePage,
        setShowHomePage,
        bookmarks,
        setBookmarks,
      }}
    >
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<FormPage />} />
          <Route path="/register" element={<SignUpFormPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tv-series" element={<TvSeries />} />
        </Routes>
      </Router>
    </MyContext.Provider>
  );
}

export default App;
