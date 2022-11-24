import React, { Suspense } from 'react';
import cx from 'classnames';

import { Outlet } from 'react-router-dom';
import Footer from '../../Footer';
import Header from '../../Header';
import PublicHeader from '../PublicLayout/PublicHeader';
import LoaderFallback from '../../../routing/LoaderFallback';
import Sidebar from './Sidebar';
import BottomBar from './BottomBar';
import styles from './PageLayout.module.scss';
import { useIsBottomBarActive } from 'hooks/mediaHooks';

type TProps = {
  variant?: 'sidebarLeft';
  headerVariant?: 'public' | 'auth';
};

const PageLayout: React.FC<TProps> = ({ variant, headerVariant = 'auth' }) => {
  const hasSidebar = variant === 'sidebarLeft';
  const isBottomBarActive = useIsBottomBarActive();

  return (
    <>
      {headerVariant === 'auth' ? <Header /> : <PublicHeader />}
      <div className={cx(styles.container, hasSidebar && styles.sidebarLayout)}>
        {hasSidebar && (
          <>
            {isBottomBarActive ? <BottomBar /> : <Sidebar />}
            <main className={styles.content}>
              <Outlet />
            </main>
          </>
        )}

        {!hasSidebar && (
          <main className={styles.content}>
            <Suspense fallback={<LoaderFallback />}>
              <Outlet />
            </Suspense>
          </main>
        )}
      </div>
      <Footer fullWidth />
    </>
  );
};

export default PageLayout;
