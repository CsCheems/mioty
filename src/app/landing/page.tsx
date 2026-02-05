import Link from 'next/link';
import styles from "./landing.module.css";

export default function Landing() {
  return (
    <div className={styles.main_container}>
        <h1 className={styles.title}>MIOTY</h1>
        <p className={styles.subtitle}>subtitle</p>
        <Link className={styles.button} href={'../login'}>Iniciar</Link>
    </div>
  );
}
