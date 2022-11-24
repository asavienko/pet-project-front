import React, { Suspense } from 'react';

import { Outlet } from 'react-router-dom';
import { Divider } from '@mui/material';
import Footer from '../../Footer';
import LoaderFallback from '../../../routing/LoaderFallback';
import Header from './PublicHeader';
import styles from './PublicLayout.module.scss';

type TProps = {
  variant?: 'sidebarLeft';
};

const PageLayout: React.FC<TProps> = () => (
  <>
    <Header />
    <main className={styles.content}>
      <Suspense fallback={<LoaderFallback />}>
        <Outlet />
      </Suspense>
    </main>
    <div style={{ marginTop: 'auto' }}></div>
    <Divider />
    <Footer disableTopMargin className={styles.footer} />
  </>
);

export default PageLayout;
