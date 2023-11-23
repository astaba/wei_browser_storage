import useLocalStorage from "./hooks/useLocalStorage";

const App = () => {
  const [isOpen, setIsOpen] = useLocalStorage("lorem-state", false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button type="button" onClick={handleClick}>
        Toggle
      </button>
      {isOpen && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo tenetur
          rerum, non commodi aut nostrum officia quas totam eligendi nobis
          optio, voluptatibus illo, eius iure. Vel repudiandae porro atque
          consequatur.
        </p>
      )}
    </div>
  );
};

export default App;
