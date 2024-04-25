import React, { useState } from "react";

function Item({ name, category }) {
 
  const [isInCart, setIsInCart] = useState(false);

  
  const toggleCartStatus = () => {
    setIsInCart(!isInCart); 
  };

  
  const liClass = isInCart ? "in-cart" : "";

  
  const buttonText = isInCart ? "Remove From Cart" : "Add to Cart";

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      
      <button className="add" onClick={toggleCartStatus}>{buttonText}</button>
    </li>
  );
}

export default Item;
