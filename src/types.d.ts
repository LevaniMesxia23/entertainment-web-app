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

interface MyContextType {
  showSignUpPage: boolean;
  setShowSignUpPage: React.Dispatch<React.SetStateAction<boolean>>;
  showHomePage: boolean;
  setShowHomePage: React.Dispatch<React.SetStateAction<boolean>>;
  bookmarks: boolean[] | null;
  setBookmarks: React.Dispatch<React.SetStateAction<boolean[]>>
  allMovies: ImageData[];
  setAllMovies: React.Dispatch<React.SetStateAction<ImageData[]>>;
  handleBookmarkClick: (image?: ImageData) => void
}
