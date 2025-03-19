import { useOutletContext } from "react-router-dom";

const Characters = () => {
  const {characters} = useOutletContext<{characters: string[]}>();
  console.log(characters);
  return (
    <>
      <h3>Characters</h3>
      <ul>
        {characters.map((character, i) => (
          <li key={i}>{character}</li>
        ))}
      </ul>
    </>
  )
}

export default Characters