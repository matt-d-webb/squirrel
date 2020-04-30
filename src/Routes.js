import React, { lazy, Suspense, Fragment } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Layout Blueprints

import {
  LeftSidebar,
  MinimalLayout,
  PresentationLayout
} from './layout-blueprints';

// Example Pages

import PagesLogin from './pages/PagesLogin';
import PagesProfile from './pages/PagesProfile';
import PagesRegister from './pages/PagesRegister';

const DashboardDefault = lazy(() => import('./pages/DashboardDefault'));
const LandingPage = lazy(() => import('./pages/LandingPage'));



const Routes = () => {
  const location = useLocation();

  const pageVariants = {
    initial: {
      opacity: 0,
      scale: 0.99
    },
    in: {
      opacity: 1,
      scale: 1
    },
    out: {
      opacity: 0,
      scale: 1.01
    }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.4
  };

  const SuspenseLoading = () => {
    return (
      <Fragment>
        <div className="d-flex align-items-center flex-column vh-100 justify-content-center text-center py-3">
          <div className="d-flex align-items-center flex-column px-4">
            {/* <ClimbingBoxLoader color={'#3c44b1'} loading={true} /> */}
          </div>
          <div className="text-muted font-size-xl text-center pt-3">
            Please wait...
          </div>
        </div>
      </Fragment>
    );
  };
  return (
    <AnimatePresence>
      <Suspense fallback={<SuspenseLoading />}>
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route path={['/home']}>
            <PresentationLayout>
              <Switch location={location} key={location.pathname}>
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}>
                  <Route path="/home" component={LandingPage} />
                </motion.div>
              </Switch>
            </PresentationLayout>
          </Route>

          <Route path={['/login' ]}>
            <MinimalLayout>
              <Switch location={location} key={location.pathname}>
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}>
                  <Route path="/login" component={PagesLogin} />
                  <Route path="/PagesRegister" component={PagesRegister} />
                </motion.div>
              </Switch>
            </MinimalLayout>
          </Route>
          <Route path="/profile" component={PagesProfile} />

          <Route
            path={['/dashboard']}>
            <LeftSidebar>
              <Switch location={location} key={location.pathname}>
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}>
                  <Route
                    path="/dashboard"
                    component={DashboardDefault}
                  />
                  <Route path="/profile" component={PagesProfile} />
                </motion.div>
              </Switch>
            </LeftSidebar>
          </Route>
        </Switch>
      </Suspense>
    </AnimatePresence>
  );
};

export default Routes;
