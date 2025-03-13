import ProductsCard from "../components/productsCard/ProductsCard";
import styles from "./page.module.css";

export default function ShopProject() {
  return (
    <div className={styles.main}>
        <div className={styles.mainBanner}></div>
        <div className={styles.productsWrapper}>
            <div className={styles.searchWrapper}></div>
            <div className={styles.cardsWrapper}>
                <ProductsCard/>
            </div>
        </div>
    </div>
  );
}
