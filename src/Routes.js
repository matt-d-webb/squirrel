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
const HeaderSections = lazy(() => import('./pages/HeaderSections'));

const LoadingIndicators = lazy(() =>
  import('./pages/LoadingIndicators')
);



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
          <Redirect exact from="/" to="/LandingPage" />
          <Route path={['/LandingPage']}>
            <PresentationLayout>
              <Switch location={location} key={location.pathname}>
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}>
                  <Route path="/LandingPage" component={LandingPage} />
                </motion.div>
              </Switch>
            </PresentationLayout>
          </Route>
          <Route
            path={[
              '/PagesLogin',
            ]}>
            <MinimalLayout>
              <Switch location={location} key={location.pathname}>
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}>
                  <Route path="/PagesLogin" component={PagesLogin} />
                  <Route path="/PagesRegister" component={PagesRegister} />
                </motion.div>
              </Switch>
            </MinimalLayout>
          </Route>
          <Route
            path={['/DashboardDefault']}>
            <LeftSidebar>
              <Switch location={location} key={location.pathname}>
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}>
                  <Route
                    path="/DashboardDefault"
                    component={DashboardDefault}
                  />

                  <Route path="/PagesProfile" component={PagesProfile} />
                  <Route path="/HeaderSections" component={HeaderSections} />
                  <Route path="/LoadingIndicators" component={LoadingIndicators}/>
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
