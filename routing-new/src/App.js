import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import BookList from "./components/BookList";
import Book from "./components/Book";
import NewBook from "./components/NewBook";
import NotFound from "./components/NotFound";
import BookLayout from "./components/BookLayout";
import BookRoutes from "./BookRoutes";

function App(props) {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/*" element={<BookRoutes />} />
        {/* <Route path="/books" element={<BookList />} />
        <Route path="/books/:id" element={<Book />} />
        React router knows books/:anything is different than books/new cause its specific
        <Route path="/books/new" element={<NewBook />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
