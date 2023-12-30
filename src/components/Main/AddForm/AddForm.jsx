import styles from "./styles.module.css";
import { useReducer } from "react";
function reducer(state, action) {
  switch (action.action) {
    case "updateItemName":
      return { ...state, itemName: action.payload };
    case "updateItemCount":
      return { ...state, itemCount: action.payload };
    case "reset":
      return { itemName: "", itemCount: 1 };
    default:
      throw new Error("Unknown Action");
  }
}
export default function AddForm({ addItem }) {
  const [state, dispatch] = useReducer(reducer, { itemName: "", itemCount: 1 });
  return (
    <form
      className={styles.addForm}
      onSubmit={(e) => {
        e.preventDefault();
        addItem({ ...state, checked: false });
        dispatch({ action: "reset" });
      }}
    >
      <h3>What do you need for your 😍 trip?</h3>

      <select
        value={state.itemCount}
        onChange={(e) => {
          dispatch({ action: "updateItemCount", payload: e.target.value });
        }}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((i) => (
          <option key={i} value={i}>
            {i}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Item..."
        value={state.itemName}
        onChange={(e) => {
          dispatch({ action: "updateItemName", payload: e.target.value });
        }}
        required
      />
      <button type="submit">Add</button>
    </form>
  );
}
