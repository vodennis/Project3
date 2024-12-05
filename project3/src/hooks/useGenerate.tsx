import { useEffect, useState } from "react";
import IngredientStore from "../store/ingredient";

export function useGenerate() {
  
  const getInitialIngredients = () => {
    const saved = localStorage.getItem('selectedIngredients')
    return saved ? JSON.parse(saved) : [];
  }


  const [selectedIngredients, setSelectedIngredients] = useState<string[]>(getInitialIngredients());
  const [availableIngredients, setAvailableIngredients] = useState<string[]>();

  const resetClick = () => {
    localStorage.setItem('selectedIngredients', JSON.stringify([]))
    setSelectedIngredients([])
  }
  
  const handleClick = (ingredient: string) => {
    if (!selectedIngredients) return setSelectedIngredients([ingredient]);

    if (selectedIngredients.includes(ingredient)) return;

    const newSelectedIngredients = [...selectedIngredients, ingredient];

    setSelectedIngredients(newSelectedIngredients); //updating all of the already selected ingredients with the new ingredient
  };

  const getIngredients = async () => {
    const data = await IngredientStore.getIngredients()
    console.log(data, "THIS IS THE OBJECT OF DATA")
    const ingredients = data.map((ingredient:any)=>{return ingredient.name})
    console.log(ingredients)
    setAvailableIngredients(ingredients);
  }

  //here useEffect 
  useEffect(() => {
    localStorage.setItem('selectedIngredients', JSON.stringify(selectedIngredients))
    
  }, [selectedIngredients]
)

  useEffect(() => {
    getIngredients()
  }, []);

  return {
    setAvailableIngredients,
    setSelectedIngredients,
    selectedIngredients,
    availableIngredients,
    handleClick,
    resetClick
  };
}
