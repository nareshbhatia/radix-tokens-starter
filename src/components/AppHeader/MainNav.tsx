import styles from './MainNav.module.css';
import type { NavItem } from '../../config/main-nav';
import { mainNavItems } from '../../config/main-nav';
import { siteConfig } from '../../config/site';
import { clsx } from 'clsx';
import { NavLink, useLocation } from 'react-router';

function isNavItemActive(item: NavItem, pathname: string) {
  return (
    // item.href === '/' is a special case, matching only if pathname is exactly '/'
    (item.href === '/' && pathname === '/') ||
    (item.href !== '/' && pathname.startsWith(item.href))
  );
}

export function MainNav() {
  const { pathname } = useLocation();

  return (
    <div className={styles.mainNav}>
      <span className="rt-font-weight-bold">{siteConfig.name}</span>
      <nav className={styles.navLinks}>
        {mainNavItems.map((item) => (
          <NavLink
            className={clsx(
              'rt-link',
              isNavItemActive(item, pathname) ? 'active' : '',
            )}
            key={item.href}
            to={item.href}
          >
            {item.title}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
