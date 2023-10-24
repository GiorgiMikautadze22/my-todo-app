import React from "react";

const Categories = ({ handleClick, category }) => {
  return (
    <h3 key={category} onClick={() => handleClick(category)}>
      {category}
    </h3>
  );
};

export default Categories;
