import { useState, createContext } from "react";
import { Navigate, Route, Routes, BrowserRouter as Router } from "react-router-dom";
import FormPage from "./components/LoginFormPage";
import SignUpFormPage from "./components/Register";
import HomePage from "./components/HomePage";
import Movies from "./components/Movies";
import TvSeries from "./components/TvSeries";
import "./index.css";
import data from "../public/starter-code/data.json";
import { MyContextType, ImageData } from "./types";
import Bookmarked from "./components/Bookmarked";
export const MyContext = createContext<MyContextType | null>(null);

export interface FormData {
  email: string;
  password: string;
  repeatPassword?: string;
}

function App() {
  const [showSignUpPage, setShowSignUpPage] = useState<boolean>(true);
  const [showHomePage, setShowHomePage] = useState<boolean>(false);
  const [bookmarks, setBookmarks] = useState<boolean[]>(data.map((item: ImageData) => item.isBookmarked));
  const [allMovies, setAllMovies] = useState<ImageData[]>(data);
  const [search, setSearch] = useState<string>('')


  const handleBookmarkClick = (image?: ImageData) => {
    let mapped = allMovies.map((item: ImageData) => {
      if(item.title == image?.title){
        return {
          ...item, isBookmarked:!item.isBookmarked
        }
      }else{
        return item
      }
    })
    setAllMovies(mapped);
  };

  return (
    <MyContext.Provider 
      value={{
        showSignUpPage,
        setShowSignUpPage,
        showHomePage,
        setShowHomePage,
        bookmarks,
        setBookmarks,
        allMovies,
        setAllMovies,
        handleBookmarkClick,
        search,
        setSearch
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
          <Route path="/bookmarks" element={<Bookmarked />} />
        </Routes>
      </Router>
    </MyContext.Provider>
  );
}

export default App;
