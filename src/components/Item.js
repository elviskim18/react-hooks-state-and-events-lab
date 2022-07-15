import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, setinCart] = useState(false);

  const itemClass = inCart? "in-cart" : "";

  const addRemove = inCart? "add" : "remove";

  function handleCart(){
    setinCart((inCart) => !inCart)
  }


  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={addRemove} onClick={handleCart}>{inCart? "Add to Cart": "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
