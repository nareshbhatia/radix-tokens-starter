import styles from './RightNav.module.css';
import { ThemeSelector } from './ThemeSelector';

export function RightNav() {
  return (
    <nav className={styles.rightNav}>
      <ThemeSelector />
    </nav>
  );
}
