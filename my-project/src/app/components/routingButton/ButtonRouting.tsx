import styles from "./ButtonRouting.module.css";
import Link from "next/link";

interface props {
  link: string;
  title: string;
}

export default function ButtonRouting({ link, title }: props) {
  return (
    <div className={styles.buttonContainer}>
      <Link href={link}>
        <p>{title}</p>
      </Link>
    </div>
  );
}