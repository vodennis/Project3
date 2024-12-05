import { useNavigate } from "react-router-dom";
import { useGenerate } from "../../hooks/useGenerate";

type MapAvailableIngredients = {
  availableIngredients: string[] | undefined,
  handleClick: (ingredient:string) => void
}


const MapAvailableIngredients = ({availableIngredients, handleClick}: MapAvailableIngredients) => (
  <>
    {availableIngredients?.map((ingredient) => (
    <button
      onClick={() => {
        console.log(ingredient);
        handleClick(ingredient);
      }}
    >
      {ingredient}
    </button>
  ))}
  </>
)

export function Input() {
  const { resetClick, selectedIngredients, availableIngredients, handleClick } = useGenerate();

  const navigate = useNavigate();

  return (
    <>
      <h2>Ingredients</h2>
      <MapAvailableIngredients availableIngredients={availableIngredients} handleClick={handleClick}/>

      {selectedIngredients.length > 0  && selectedIngredients.map((ingredients) => <p>{ingredients}</p>)}

      <button
        onClick={() => {
          navigate("/search");
        }}
      >
        NEW BUTTON
      </button>

      <button onClick={resetClick}>
        Reset
      </button>
    </>
  );
}
