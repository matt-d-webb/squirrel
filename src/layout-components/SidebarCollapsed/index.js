import React, { Fragment, Component } from 'react';

import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { UncontrolledTooltip, Button } from 'reactstrap';

import { connect } from 'react-redux';
import { setSidebarToggleMobile } from '../../reducers/ThemeOptions';

import { NavLink as RouterLink } from 'react-router-dom';

import projectLogo from '../../assets/images/squirrel.png';
import {
  Settings,
  CloudDrizzle,
  Search,
  Grid,
  Users,
  LifeBuoy,
  Coffee,
  Bell
} from 'react-feather';

class SidebarCollapsed extends Component {
  toggleSidebarMobile = () => {
    let { sidebarToggleMobile, setSidebarToggleMobile } = this.props;
    setSidebarToggleMobile(!sidebarToggleMobile);
  };

  render() {
    let { sidebarShadow, sidebarStyle, sidebarToggleMobile } = this.props;

    return (
      <Fragment>
        <div
          className={clsx(
            'app-sidebar app-sidebar--collapsed app-sidebar--mini',
            sidebarStyle,
            { 'app-sidebar--shadow': sidebarShadow }
          )}>
          <div className="app-sidebar--header">
            <div className="nav-logo">
              <RouterLink
                to="/dashboard"
                activeClassName="active"
                title="Squirrel">
                <i>
                  <img
                    alt="Squirrel"
                    src={projectLogo}
                  />
                </i>
                <span>Bamburgh</span>
              </RouterLink>
            </div>
          </div>

          <div className="app-sidebar--content">
            <PerfectScrollbar>
              <ul className="sidebar-menu-collapsed">
                <li>
                  <RouterLink
                    activeClassName="active"
                    to="/dashboard"
                    id="DashboardTooltip1">
                    <span>
                      <Settings className="line-height-1" />
                    </span>
                  </RouterLink>
                  <UncontrolledTooltip
                    popperClassName="tooltip-secondary"
                    placement="right"
                    target="DashboardTooltip1"
                    container="body"
                    boundariesElement="window">
                    Dashboard
                  </UncontrolledTooltip>
                </li>
                <li>
                  <RouterLink
                    activeClassName="active"
                    to="/ApplicationsCalendar"
                    id="EventsCalendarTooltip1">
                    <span>
                      <CloudDrizzle className="line-height-1" />
                    </span>
                  </RouterLink>
                  <UncontrolledTooltip
                    popperClassName="tooltip-secondary"
                    placement="right"
                    target="EventsCalendarTooltip1"
                    container="body"
                    boundariesElement="window">
                    Events calendar
                  </UncontrolledTooltip>
                </li>
                <li>
                  <RouterLink
                    activeClassName="active"
                    to="/ApplicationsChat"
                    id="ChatTooltip1">
                    <span>
                      <Search className="line-height-1" />
                    </span>
                  </RouterLink>
                  <UncontrolledTooltip
                    popperClassName="tooltip-secondary"
                    placement="right"
                    target="ChatTooltip1"
                    container="body"
                    boundariesElement="window">
                    Chat
                  </UncontrolledTooltip>
                </li>
                <li>
                  <RouterLink
                    activeClassName="active"
                    to="/ApplicationsContacts"
                    id="ContactsTooltip1">
                    <span>
                      <Grid className="line-height-1" />
                    </span>
                  </RouterLink>
                  <UncontrolledTooltip
                    popperClassName="tooltip-secondary"
                    placement="right"
                    target="ContactsTooltip1"
                    container="body"
                    boundariesElement="window">
                    Contacts
                  </UncontrolledTooltip>
                </li>
                <li>
                  <RouterLink
                    activeClassName="active"
                    to="/ApplicationsFileManager"
                    id="FileManagerTooltip1">
                    <span>
                      <Users className="line-height-1" />
                    </span>
                  </RouterLink>
                  <UncontrolledTooltip
                    popperClassName="tooltip-secondary"
                    placement="right"
                    target="FileManagerTooltip1"
                    container="body"
                    boundariesElement="window">
                    File manager
                  </UncontrolledTooltip>
                </li>
                <li>
                  <RouterLink
                    activeClassName="active"
                    to="/ApplicationsMail"
                    id="MailTooltip1">
                    <span>
                      <LifeBuoy className="line-height-1" />
                    </span>
                  </RouterLink>
                  <UncontrolledTooltip
                    popperClassName="tooltip-secondary"
                    placement="right"
                    target="MailTooltip1"
                    container="body"
                    boundariesElement="window">
                    Mail
                  </UncontrolledTooltip>
                </li>
                <li>
                  <RouterLink
                    activeClassName="active"
                    to="/ApplicationsProjects"
                    id="ProjectsTooltip1">
                    <span>
                      <Coffee className="line-height-1" />
                    </span>
                  </RouterLink>
                  <UncontrolledTooltip
                    popperClassName="tooltip-secondary"
                    placement="right"
                    target="ProjectsTooltip1"
                    container="body"
                    boundariesElement="window">
                    Projects
                  </UncontrolledTooltip>
                </li>
                <li>
                  <RouterLink
                    activeClassName="active"
                    to="/ApplicationsWidgets"
                    id="AppWidgetsTooltip1">
                    <span>
                      <Bell className="line-height-1" />
                    </span>
                  </RouterLink>
                  <UncontrolledTooltip
                    popperClassName="tooltip-secondary"
                    placement="right"
                    target="AppWidgetsTooltip1"
                    container="body"
                    boundariesElement="window">
                    App widgets
                  </UncontrolledTooltip>
                </li>
              </ul>
              <div className="text-center mb-2">
                <Button
                  tag={Link}
                  color="warning"
                  className="m-1 p-0 d-inline-block shadow-none text-center font-size-lg d-40 rounded"
                  to="/dashboard"
                  id="BacktoPreviousPageTooltip1">
                  <FontAwesomeIcon icon={['fas', 'arrow-left']} />
                </Button>
                <UncontrolledTooltip
                  popperClassName="tooltip-secondary"
                  placement="right"
                  target="BacktoPreviousPageTooltip1"
                  container="body"
                  boundariesElement="window">
                  Back to dashboard
                </UncontrolledTooltip>
              </div>
            </PerfectScrollbar>
          </div>
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
  sidebarStyle: state.ThemeOptions.sidebarStyle,
  sidebarToggleMobile: state.ThemeOptions.sidebarToggleMobile
});

const mapDispatchToProps = dispatch => ({
  setSidebarToggleMobile: enable => dispatch(setSidebarToggleMobile(enable))
});

export default connect(mapStateToProps, mapDispatchToProps)(SidebarCollapsed);
