import Link from 'next/link';
import styles from './navbar.module.css';

export default function NavBar() {
  return (
    <ul className={styles.navbar}>
      <li>
        Главная
      </li>
      <li>
        Недавнее
      </li>
      <li>
        <Link href="login">Войти</Link>
      </li>
    </ul>
  );
}