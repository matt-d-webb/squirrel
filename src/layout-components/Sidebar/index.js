import React, { Fragment, Component } from 'react';
import clsx from 'clsx';

import { connect } from 'react-redux';

import { setSidebarToggleMobile } from '../../reducers/ThemeOptions';

import {
  SidebarHeader,
  SidebarMenu,
  SidebarFooter
} from '../../layout-components';

class Sidebar extends Component {
  toggleSidebarMobile = () => {
    let { sidebarToggleMobile, setSidebarToggleMobile } = this.props;
    setSidebarToggleMobile(!sidebarToggleMobile);
  };

  render() {
    let {
      sidebarStyle,
      sidebarShadow,
      sidebarFooter,
      sidebarToggleMobile
    } = this.props;

    return (
      <Fragment>
        <div
          className={clsx('app-sidebar', sidebarStyle, {
            'app-sidebar--shadow': sidebarShadow
          })}>
          <SidebarHeader />
          <div className="app-sidebar--content">
            <SidebarMenu />
          </div>
          {sidebarFooter && <SidebarFooter />}
        </div>
        <div
          onClick={this.toggleSidebarMobile}
          className={clsx('app-sidebar-overlay', {
            'is-active': sidebarToggleMobile
          })}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  sidebarShadow: state.ThemeOptions.sidebarShadow,
  sidebarFooter: state.ThemeOptions.sidebarFooter,
  sidebarStyle: state.ThemeOptions.sidebarStyle,
  sidebarToggleMobile: state.ThemeOptions.sidebarToggleMobile
});

const mapDispatchToProps = dispatch => ({
  setSidebarToggleMobile: enable => dispatch(setSidebarToggleMobile(enable))
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
