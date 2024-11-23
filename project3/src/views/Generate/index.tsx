import { useGenerate } from "../../hooks/useGenerate";
import { Input } from "./input";

export function Generate() {
  const { selectedIngredients } = useGenerate();
  return (
    <>
      <p>GENERATE PAGE</p>
      <Input></Input>
    </>
  );
}
