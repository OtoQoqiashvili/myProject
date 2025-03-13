import Image from "next/image";
import styles from "./page.module.css";
import ButtonRouting from "./components/routingButton/ButtonRouting";

export default function Home() {
  return (
    <div className={styles.main}>
      <ButtonRouting link={"./shopProject"}/>
    </div>
  );
}
