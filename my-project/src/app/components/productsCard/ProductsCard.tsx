import styles from "./ProductsCard.module.css";
import Image from "next/image";

export default function ProductsCard() {
  return (
    <div className={styles.cardContainer}>
        <div className={styles.productImageWrapper}></div>
        <div className={styles.productInfoWrapper}>
            <p className={styles.productTitle}>Product name</p>
            <button>Add to cart</button>
        </div>
    </div>
  );
}
