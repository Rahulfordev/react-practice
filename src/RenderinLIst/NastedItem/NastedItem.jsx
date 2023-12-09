import { recipes } from "./Data";
const NastedItem = () => {
  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h2>{recipe.name}</h2>
          <ul>
            {recipe.ingredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default NastedItem;
