import styles from './root.module.css';
import { AppHeader } from '../components/AppHeader';
import { Outlet } from 'react-router';

export function RootLayout() {
  return (
    <div className={styles.container}>
      <AppHeader />
      <Outlet />
    </div>
  );
}
