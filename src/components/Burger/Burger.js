import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import "./Burger.css";

const Burger = props => {
  // Object.keys return array ['salad', 'bacon', 'cheese', 'meat']
  let transformedIngredients = Object.keys(props.ingredients)
    .map(ig => {
      return [...Array(props.ingredients[ig])].map((_, i) => {
        return <BurgerIngredient key={ig + i} type={ig} />;
      });
    })
    .reduce((arr, el) => arr.concat(el), []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please add ingredients...</p>;
  }
  return (
    <div className="Burger">
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
