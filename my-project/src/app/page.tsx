import styles from "./page.module.css";
import ButtonRouting from "./components/routingButton/ButtonRouting";

export default function Home() {
  return (
    <div className={styles.main}>
      <ButtonRouting title="ONLINE SHOP" link={"./shopProject"}/>
      <ButtonRouting title="TODO LIST" link={"./todoList"}/>
    </div>
  );
}
