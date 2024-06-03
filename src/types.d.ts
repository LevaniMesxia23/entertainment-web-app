export interface Thumbnail {
  small: string;
  large?: string;
}

export interface ImageData {
  title: string;
  thumbnail: {
    trending?: Thumbnail;
    regular: Thumbnail;
  };
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
}


export interface MyContextType {
  showSignUpPage: boolean;
  setShowSignUpPage: (show: boolean) => void;
  showHomePage: boolean;
  setShowHomePage: (show: boolean) => void;
  bookmarks: boolean[];
  setBookmarks: (bookmarks: boolean[]) => void;
  allMovies: ImageData[];
  setAllMovies: (movies: ImageData[]) => void;
  handleBookmarkClick: (image?: ImageData) => void;
  search: string;
  setSearch: (search: string) => void;
}
