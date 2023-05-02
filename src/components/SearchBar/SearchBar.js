import React from "react";
import { useState } from "react";
import DataToSearch from "./components/SearchBar/DataToSearch";

const getFilteredItems = (items, query) => {
  if (!query) {
    return items;
  }
  return items.filter((item) => item.name.includes(query));
};

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const { tracks } = DataToSearch;
  const { items } = tracks;
  const filteredItems = getFilteredItems(items, query);

  return (
    <>
      <input type="text" onChange={(e) => setQuery(e.target.value)} />
      <ul>
        {filteredItems.map((value) => (
          <h1 key={value.name}>{value.name}</h1>
        ))}
      </ul>
    </>
  );
}
