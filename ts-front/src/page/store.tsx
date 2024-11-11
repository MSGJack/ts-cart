import { StoreItem } from "../components/items";
import storeProducts from "../data/data.json";
import { useState } from "react";

export function Store() {
  const [categories, setCategories] = useState<string>("all");
  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    //setCategories(event.target.value);
    const value = event.target.value as string;
    setCategories(value);
  };

  const categoryList = [
    "all",
    ...new Set(storeProducts.map((product) => product.category)),
  ];

  const filteredProducts =
    categories === "all"
      ? storeProducts
      : storeProducts.filter((product) => product.category === categories);

  return (
    <>
      <h2>Store</h2>
      <div className="select-cont">
        <label>Filter by Category:</label>
        <div className="select">
          <select onChange={handleCategoryChange} value={categories}>
            {categoryList.map((category, index) => (
              <option
                key={category}
                value={category}
                style={{
                  backgroundColor: index % 2 === 0 ? "royalblue" : "dodgerblue",
                }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="store-lo">
        {filteredProducts.map((p) => (
          <div key={p.id}>
            <StoreItem {...p} />
          </div>
        ))}
      </div>
    </>
  );
}
