import styles from './MainNav.module.css';
import { mainNavItems } from '../../config/main-nav';
import { siteConfig } from '../../config/site';
import { NavLink } from 'react-router';

export function MainNav() {
  return (
    <div className={styles.mainNav}>
      <span className="rt-font-weight-bold">{siteConfig.name}</span>
      <nav className={styles.navLinks}>
        {mainNavItems.map((item) => (
          <NavLink className="rt-link" key={item.href} to={item.href}>
            {item.title}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
