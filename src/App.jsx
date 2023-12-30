import Footer from "./components/Footer/Header/Footer";
import Header from "./components/Header/Header";
import AddForm from "./components/Main/AddForm/AddForm";
import ItemList from "./components/Main/ItemList/ItemList";

import { useState } from "react";

export default function App() {
  const [itemList, setItemList] = useState([]);

  const handleAddItem = (item) => {
    console.log("adding item");
    const matchingItemsCount = itemList.filter(
      (currItem) =>
        currItem.itemName.toLowerCase() === item.itemName.toLowerCase()
    ).length;
    if (!matchingItemsCount) setItemList((itemList) => [...itemList, item]);
    else window.alert(`${item.itemName} already exists.`);
  };

  const handleRemoveItem = (itemName) => {
    setItemList((itemList) =>
      itemList.filter(
        (item) => item.itemName.toLowerCase() !== itemName.toLowerCase()
      )
    );
  };

  const handleClearItems = () => {
    setItemList([]);
  };

  const handleCheckItem = (itemName) => {
    setItemList((itemList) =>
      itemList.map((item) =>
        item.itemName.toLowerCase() === itemName.toLowerCase()
          ? { ...item, checked: !item.checked }
          : item
      )
    );
  };

  const checkedItems = itemList.reduce((a, i) => (i.checked ? a + 1 : a), 0);
  return (
    <div className="app">
      <Header>🏝️ Far Away 💼</Header>
      <AddForm addItem={handleAddItem} />
      <ItemList
        removeItem={handleRemoveItem}
        checkItem={handleCheckItem}
        clearItems={handleClearItems}
        itemList={itemList}
      />
      <Footer checkedItems={checkedItems} itemCount={itemList.length} />
    </div>
  );
}
