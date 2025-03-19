import {useOutletContext} from "react-router-dom";

const Chapters = () => {
  const {chapters} = useOutletContext<{chapters: string[]}>();
  console.log(chapters);

  return (
    <>
      <h3>Chapters</h3>
      <ul>
        {chapters.map((chapter, i) => (
          <li key={i}>{chapter}</li>
        ))}
      </ul>
    </>
  );
};

export default Chapters;
