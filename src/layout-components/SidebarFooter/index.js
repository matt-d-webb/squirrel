import React, { Fragment, Component } from 'react';

import { Link } from 'react-router-dom';

import { UncontrolledTooltip } from 'reactstrap';

import { Bell, Activity, Calendar } from 'react-feather';

export default class SidebarFooter extends Component {
  render() {
    return (
      <Fragment>
        <div className="app-sidebar--footer">
          {/* <ul>
            <li>
              <Link
                to="/ApplicationsProjects"
                className="btn btn-sm btn-transition-none px-2 mx-2"
                id="ProjectsApplicationTooltip">
                <Activity />
              </Link>
              <UncontrolledTooltip
                target="ProjectsApplicationTooltip"
                container=".app-sidebar--footer">
                Projects Application
              </UncontrolledTooltip>
            </li>
            <li>
              <Link
                to="/DashboardHelpdesk"
                className="btn btn-sm btn-transition-none px-2 mx-2"
                id="HelpdeskDashboardTooltip">
                <Bell />
              </Link>
              <UncontrolledTooltip
                target="HelpdeskDashboardTooltip"
                container=".app-sidebar--footer">
                Helpdesk Dashboard
              </UncontrolledTooltip>
            </li>
            <li>
              <Link
                to="/ApplicationsCalendar"
                className="btn btn-sm btn-transition-none px-2 mx-2"
                id="CalendarApplicationTooltip">
                <Calendar />
              </Link>
              <UncontrolledTooltip
                target="CalendarApplicationTooltip"
                container=".app-sidebar--footer">
                Calendar Application
              </UncontrolledTooltip>
            </li>
          </ul> */}
        </div>
      </Fragment>
    );
  }
}
