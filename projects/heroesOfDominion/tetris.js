import styles from "../../styles/HodCard.module.scss";

function ThreeSquaresLine() {
  return (
    <div className={styles.squareContainer}>
      <div
        className={styles.square}
        style={{ backgroundColor: "#f4a802" }}
      ></div>
      <div
        className={styles.square}
        style={{ backgroundColor: "#f4a802" }}
      ></div>
      <div
        className={styles.square}
        style={{ backgroundColor: "#f4a802" }}
      ></div>
    </div>
  );
}

function PlusShape() {
  return (
    <div className={styles.plusContainer}>
      <div className={styles.square}></div>
      <div className={styles.plusRow}>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
        <div className={styles.square}></div>
      </div>
      <div className={styles.square}></div>
    </div>
  );
}

function SingleSquare() {
  return (
    <div className={styles.singleContainer}>
      <div
        className={styles.square}
        style={{ backgroundColor: "#3141ed" }}
      ></div>
    </div>
  );
}

export { ThreeSquaresLine, PlusShape, SingleSquare };
