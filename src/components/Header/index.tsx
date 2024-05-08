import Logo from './components/Logo';
import Menu from './components/Menu';
import styles from './header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.navbar}`}>
        <Logo />
        <Menu />
      </div>
    </header>
  );
}