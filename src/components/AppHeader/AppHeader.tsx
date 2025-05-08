import styles from './AppHeader.module.css';
import { MainNav } from './MainNav';
import { RightNav } from './RightNav';

export function AppHeader() {
  return (
    <header className={styles.appHeader}>
      <div className={styles.container}>
        <MainNav />
        <RightNav />
      </div>
    </header>
  );
}
