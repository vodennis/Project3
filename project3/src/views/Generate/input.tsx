import { useNavigate } from "react-router-dom";
import { useGenerate } from "../../hooks/useGenerate";

export function Input() {
  const { selectedIngredients, availableIngredients, handleClick } =
    useGenerate();

  const navigate = useNavigate();

  return (
    <>
      <h2>Ingredients</h2>
      {availableIngredients?.map((ingredient) => (
        <button
          onClick={() => {
            console.log(ingredient)
            handleClick(ingredient);
          }}
        >
          {ingredient}
        </button>
      ))}
      <button 
      onClick={() => {
          navigate("/search")
      }}
      >
        NEW BUTTON
      </button>
    </>
  );
}
