import React from "react";
import Card from "./Card";
function Result({ productsData }) {
  return (
    <div className="result">
      <h1 className="result-title">Results</h1>
      <div className="result-body">
        {productsData.map((product) => (
          <Card key={product.id + product.title} product={product} />
        ))}
      </div>
    </div>
  );
}
export default Result;
