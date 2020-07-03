import React, { Fragment } from 'react';

import clsx from 'clsx';
import { Link } from 'react-router-dom';

import { Nav, NavItem, NavLink } from 'reactstrap';

import { connect } from 'react-redux';

const Footer = props => {
  const { footerShadow, footerBgTransparent } = props;
  return (
    <Fragment>
      <div
        className={clsx('app-footer text-black-50', {
          'app-footer--shadow': footerShadow,
          'app-footer--opacity-bg': footerBgTransparent
        })}>
        <div className="app-footer--first">
          {/* <Nav>
            <NavItem>
              <NavLink
                tag={Link}
                to="/DashboardAnalytics"
                className="rounded-sm">
                Analytics
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/FormsWizard" className="rounded-sm">
                Wizards
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                tag={Link}
                to="/DashboardCrmManager"
                className="rounded-sm">
                CRM Manager
              </NavLink>
            </NavItem>
          </Nav> */}
        </div>
        <div className="app-footer--second">
          <span>Squirrel © 2020</span> 
        </div>
      </div>
    </Fragment>
  );
};
const mapStateToProps = state => ({
  footerFixed: state.ThemeOptions.footerFixed,
  footerShadow: state.ThemeOptions.footerShadow,
  footerBgTransparent: state.ThemeOptions.footerBgTransparent
});

export default connect(mapStateToProps)(Footer);
