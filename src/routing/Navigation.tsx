import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { useUserContext } from '../context';
import LoginOutlet from './LoginOutlet';
import PrivateOutlet from './PrivateOutlet';
import LoaderFallback from './LoaderFallback';

import PageLayout from 'components/Layouts/PageLayout';
import GreyLayout from 'components/Layouts/GreyLayout';
import ScrollToTop from 'components/ScrollToTop';
import NotFound from 'components/templates/NotFound';
import ProfileInfo from 'components/templates/Registration/ProfileInfo';
import PublicLayout from 'components/Layouts/PublicLayout';

import OauthRedirect from 'pages/OauthRedirect';
import Authentication from 'pages/Authentication';
import HomePage from 'pages/Home';

import { ROUTES } from 'constants/routes';

const Navigation = () => {
  const { isLoggedIn } = useUserContext();

  return (
    <Suspense fallback={<LoaderFallback />}>
      <ScrollToTop>
        <Routes>
          <Route element={<GreyLayout />}>
            <Route
              path="profile"
              element={<PageLayout variant="sidebarLeft" />}
            >
              <Route element={<PrivateOutlet />}>
                <Route element={<ProfileInfo />} path={ROUTES.PROFILE} />
              </Route>
            </Route>
          </Route>
          <Route path={ROUTES.OAUTH_REDIRECT} element={<OauthRedirect />} />

          <Route element={<PageLayout />}>
            <Route element={<LoginOutlet />}>
              <Route element={<Authentication />} path={ROUTES.LOGIN} />
            </Route>
          </Route>

          <Route element={isLoggedIn ? <PageLayout /> : <PublicLayout />}>
            <Route path={ROUTES.HOME} element={<HomePage />} />
          </Route>
          <Route element={<GreyLayout />}>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </ScrollToTop>
    </Suspense>
  );
};
export default Navigation;
