import React, { Fragment, Component } from 'react';

import PerfectScrollbar from 'react-perfect-scrollbar';

import { connect } from 'react-redux';
import RouterLink from '../ReactMetismenuRouterLink';

import MetisMenu from 'react-metismenu';

import { SidebarUserbox } from '../../layout-components';

const sidebarMenuContent = [
  {
    label: 'Dashboards',
    icon: 'pe-7s-safe',
    content: [
      {
        label: 'Default',
        description:
          'This is a dashboard page example built using this template.',
        to: '/DashboardDefault'
      },
      {
        label: 'Saving',
        description:
          'This is an example dashboard created using build-in elements and components.',
        to: '/DashboardAnalytics'
      }
    ]
  }
];

class SidebarMenu extends Component {
  render() {
    let { sidebarUserbox } = this.props;
    return (
      <Fragment>
        <PerfectScrollbar>
          {sidebarUserbox && <SidebarUserbox />}
          <div className="sidebar-navigation">
            <div className="sidebar-header">
              <span>Navigation menu</span>
            </div>
            <MetisMenu
              content={sidebarMenuContent}
              LinkComponent={RouterLink}
              activeLinkFromLocation
              iconNamePrefix=""
              noBuiltInClassNames={true}
              classNameItemActive="active"
              classNameIcon="sidebar-icon"
              iconNameStateVisible="sidebar-icon-indicator"
              iconNameStateHidden="sidebar-icon-indicator"
              classNameItemHasVisibleChild="submenu-open"
              classNameItemHasActiveChild="active"
              classNameStateIcon="pe-7s-angle-down"
            />
          </div>
        </PerfectScrollbar>
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  sidebarUserbox: state.ThemeOptions.sidebarUserbox
});

export default connect(mapStateToProps)(SidebarMenu);
