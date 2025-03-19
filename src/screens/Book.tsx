import {Outlet, Link, useParams} from "react-router-dom";
import {booksData} from "../db";

const Book = () => {
  const {book} = useParams<{book: string}>();
  const allBooks = Object.values(booksData).flat();
  const selectedBook = allBooks.find((b) => b.title === book);

  if (!selectedBook) {
    return <h2>Book not found</h2>;
  }

  const contextData = {
    chapters: selectedBook.chapters,
    characters: selectedBook.characters,
  };

  return (
    <>
      <h2>{selectedBook.title}</h2>
      <nav>
        <ul>
          <li>
            <Link to="chapters">Chapters</Link>
          </li>
          <li>
            <Link to="characters">Characters</Link>
          </li>
        </ul>
      </nav>
      <Outlet context={contextData} />
    </>
  );
};

export default Book;
