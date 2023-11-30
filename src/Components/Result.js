import React from "react";
import Card from "./Card";
function Result({ productData }) {
  return (
    
   

      <div className="result-body">
      
        {productData.map((product) => (
          <Card
            key={product.id + product.title}
            product={product}
          />
        ))}
      </div>
  );
}
export default Result;
