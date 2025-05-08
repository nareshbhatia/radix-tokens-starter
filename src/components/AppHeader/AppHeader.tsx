import styles from './AppHeader.module.css';
import { MainNav } from './MainNav';

export function AppHeader() {
  return (
    <header className={styles.appHeader}>
      <div className={styles.container}>
        <MainNav />
      </div>
    </header>
  );
}
