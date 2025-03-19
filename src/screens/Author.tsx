import {Link, Outlet, useParams} from "react-router-dom";
import {booksData} from "../db";

const Author = () => {
  const authorName = useParams<{authorName: string}>()?.authorName || "";
  const authorBooks = booksData?.[authorName] || [];

  return (
    <div>
      <h1>{authorName}</h1>
      <ul>
        {authorBooks &&
          authorBooks.map((book, index: number) => (
            <li key={index}>
              <Link to={book.title}>{book.title}</Link>
            </li>
          ))}
      </ul>
      <Outlet />
    </div>
  );
};

export default Author;
