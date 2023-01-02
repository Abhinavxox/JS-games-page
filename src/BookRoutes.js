import BookList from "./components/BookList";
import Book from "./components/Book";
import NewBook from "./components/NewBook";
import BookLayout from "./components/BookLayout";

import { Route, Routes } from "react-router-dom";

const BookRoutes = () => {
  return (
    <>
      <BookLayout />
      <Routes>
        <Route index element={<BookList />} />
        <Route path=":id" element={<Book />} />
        <Route path="new" element={<NewBook />} />
      </Routes>
    </>
  );
};

export default BookRoutes;
