import { useEffect, useState } from "react";

export function useGenerate() {
  
  const getInitialIngredients = () => {
    const saved = localStorage.getItem('selectedIngredients')
    return saved ? JSON.parse(saved) : [];
  }

  const [selectedIngredients, setSelectedIngredients] = useState<string[]>(getInitialIngredients());
  const [availableIngredients, setAvailableIngredients] = useState<string[]>();



  const handleClick = (ingredient: string) => {
    if (!selectedIngredients) return setSelectedIngredients([ingredient]);

    if (selectedIngredients.includes(ingredient)) return;

    const newSelectedIngredients = [...selectedIngredients, ingredient];

    setSelectedIngredients(newSelectedIngredients); //updating all of the already selected ingredients with the new ingredient
  };

  //here useEffect 
  useEffect(() => {
    localStorage.setItem('selectedIngredients', JSON.stringify(selectedIngredients))
    
  }, [selectedIngredients]
)

  useEffect(() => {
    const data = ["chicken", "flour", "beans"];
    setAvailableIngredients(data);
  }, []);

  return {
    setAvailableIngredients,
    setSelectedIngredients,
    selectedIngredients,
    availableIngredients,
    handleClick,
  };
}
