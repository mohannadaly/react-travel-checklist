import styles from "./styles.module.css";
import { useState } from "react";
export default function ItemList({
  removeItem,
  checkItem,
  clearItems,
  itemList,
}) {
  const [sortBy, setSortBy] = useState("inputOrder");
  let sortedItemList;

  switch (sortBy) {
    case "inputOrder":
      sortedItemList = itemList;
      break;
    case "itemName":
      sortedItemList = itemList
        .slice()
        .sort((a, b) => a.itemName.localeCompare(b.itemName));
      break;
    case "checkedOrNot":
      sortedItemList = itemList
        .slice()
        .sort((a, b) => Number(a.checked) - Number(b.checked));
      break;
    default:
      throw new Error("Invalid sorting choice");
  }

  return (
    <div className={styles.list}>
      <ul>
        {sortedItemList.map((item) => (
          <li
            key={item.itemName}
            className={`${item.checked && styles.checked}`}
          >
            <input
              type="checkbox"
              value={item.checked}
              onChange={() => checkItem(item.itemName)}
            />
            <span>
              ({item.itemCount}) {item.itemName}
            </span>
            <button onClick={() => removeItem(item.itemName)}>❌</button>
          </li>
        ))}
      </ul>

      <div className={styles.actions}>
        <select onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
          <option value="inputOrder">SORT BY INPUT ORDER</option>
          <option value="itemName">SORT BY ITEM NAME</option>
          <option value="checkedOrNot">SORT BY PACKED STATUS</option>
        </select>
        <button onClick={clearItems}>Clear List</button>
      </div>
    </div>
  );
}
