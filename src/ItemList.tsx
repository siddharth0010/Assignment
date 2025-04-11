import React from "react";

type ItemListProps = {
  items: string[];
};

const ItemList: React.FC<ItemListProps> = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index} style={{ marginBottom: "8px" }}>
          ✅ {item}
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
