import {Link} from "react-router-dom";
import {booksData} from "../db";

const Home = () => {
  const authors = Object.keys(booksData);
  return (
    <div>
      <h1>Best Seller Authors</h1>
      <ul>
        {authors.map((author, i) => (
          <li key={i}>
            <Link to={`author/${author}`}>{author}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
