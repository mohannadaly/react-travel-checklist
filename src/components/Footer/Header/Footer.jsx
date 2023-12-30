import styles from "./styles.module.css";
export default function Footer({ checkedItems, itemCount }) {
  const checkedPercentage = (checkedItems / itemCount) * 100;
  return (
    <div className={styles.stats}>
      {itemCount === 0
        ? `Start adding items to your list!`
        : checkedItems < itemCount
        ? `        💼 You have ${itemCount} items on your list, and you already packed
        ${checkedItems} (${checkedPercentage.toFixed(1)}%)`
        : `You got everything! Ready to go ✈️`}
    </div>
  );
}
