import styles from "./ButtonRouting.module.css";
import Link from "next/link";

interface props {
  link: string;
}

export default function ButtonRouting({ link }: props) {
  return (
    <div className={styles.buttonContainer}>
      <Link href={link}>
        <p>SHOP WEBSITE</p>
      </Link>
    </div>
  );
}