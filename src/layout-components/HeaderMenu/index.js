import React, { Fragment, Component } from 'react';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Row,
  Col,
  UncontrolledPopover,
  Badge,
  Nav,
  NavItem,
  NavLink,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu
} from 'reactstrap';

import { Settings, Grid, Users, Layers } from 'react-feather';

export default class HeaderMenu extends Component {
  render() {
    return (
      <Fragment>
        <div className="app-header-menu">
          <span className="position-relative">
            <Button
              size="sm"
              color="neutral-dark"
              id="megaMenuPopover"
              className="mr-3 btn-transition-none">
              Mega menu
            </Button>
            <UncontrolledPopover
              target="megaMenuPopover"
              placement="bottom-start"
              trigger="legacy"
              container=".app-header-menu"
              popperClassName="dropdown-mega-menu-lg"
              className="popover-custom-wrapper popover-max-width">
              <Row className="no-gutters">
                <Col xl="4" md="6" className="p-2">
                  <div className="divider-v divider-v-lg" />
                  <Nav pills className="nav-neutral-first flex-column p-2">
                    <NavItem className="nav-item nav-item-header pb-2 text-capitalize text-first font-size-lg">
                      <span>Dashboards</span>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        tag={Link}
                        to="/DashboardAnalytics"
                        className="pl-3">
                        <div className="nav-link-icon w-auto mr-2">
                          <FontAwesomeIcon
                            icon={['fas', 'chevron-right']}
                            className="font-size-xs opacity-3"
                          />
                        </div>
                        <span>Analytics</span>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        tag={Link}
                        to="/DashboardReports"
                        className="pl-3">
                        <div className="nav-link-icon w-auto mr-2">
                          <FontAwesomeIcon
                            icon={['fas', 'chevron-right']}
                            className="font-size-xs opacity-3"
                          />
                        </div>
                        <span>Reports Management</span>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        tag={Link}
                        to="/DashboardRealEstate"
                        className="pl-3">
                        <div className="nav-link-icon w-auto mr-2">
                          <FontAwesomeIcon
                            icon={['fas', 'chevron-right']}
                            className="font-size-xs opacity-3"
                          />
                        </div>
                        <span>Real Estate</span>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        tag={Link}
                        to="/DashboardServerStatus"
                        className="pl-3">
                        <div className="nav-link-icon w-auto mr-2">
                          <FontAwesomeIcon
                            icon={['fas', 'chevron-right']}
                            className="font-size-xs opacity-3"
                          />
                        </div>
                        <span>Server Status</span>
                        <Badge color="first" className="ml-auto">
                          23
                        </Badge>
                      </NavLink>
                    </NavItem>
                    <li className="dropdown-divider mb-3" />
                    <NavItem className="pt-1">
                      <Button
                        tag={Link}
                        to="/DashboardDefault"
                        block={true}
                        outline={true}
                        color="first"
                        size="sm">
                        <span className="btn-wrapper--label">Learn more</span>
                      </Button>
                    </NavItem>
                  </Nav>
                </Col>
                <Col xl="4" md="6" className="p-2">
                  <div className="divider-v divider-v-lg" />
                  <Nav pills className="nav-neutral-success flex-column p-2">
                    <NavItem className="nav-item-header pb-2 text-capitalize text-success font-size-lg">
                      <span>Applications</span>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        tag={Link}
                        to="/ApplicationsCalendar"
                        className="pl-3">
                        <div className="nav-link-icon w-auto mr-2">
                          <FontAwesomeIcon
                            icon={['fas', 'chevron-right']}
                            className="font-size-xs opacity-3"
                          />
                        </div>
                        <span>Calendar</span>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        tag={Link}
                        to="/ApplicationsChat"
                        className="pl-3">
                        <div className="nav-link-icon w-auto mr-2">
                          <FontAwesomeIcon
                            icon={['fas', 'chevron-right']}
                            className="font-size-xs opacity-3"
                          />
                        </div>
                        <span>Chat</span>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        tag={Link}
                        to="/ApplicationsContacts"
                        className="pl-3">
                        <div className="nav-link-icon w-auto mr-2">
                          <FontAwesomeIcon
                            icon={['fas', 'chevron-right']}
                            className="font-size-xs opacity-3"
                          />
                        </div>
                        <span>Contacts</span>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        tag={Link}
                        to="/ApplicationsFileManager"
                        className="pl-3">
                        <div className="nav-link-icon w-auto mr-2">
                          <FontAwesomeIcon
                            icon={['fas', 'chevron-right']}
                            className="font-size-xs opacity-3"
                          />
                        </div>
                        <span>File Manager</span>
                      </NavLink>
                    </NavItem>
                    <li className="dropdown-divider mb-3" />
                    <NavItem className="pt-1">
                      <Button
                        tag={Link}
                        to="/ApplicationsMail"
                        block={true}
                        outline={true}
                        color="success"
                        size="sm">
                        <span className="btn-wrapper--label">Learn more</span>
                      </Button>
                    </NavItem>
                  </Nav>
                </Col>
                <Col xl="4" className="d-none d-xl-block p-2">
                  <Nav pills className="nav-neutral-danger flex-column p-2">
                    <NavItem className="nav-item-header pb-2 text-capitalize text-danger font-size-lg">
                      <span>Components</span>
                    </NavItem>
                    <NavItem>
                      <NavLink tag={Link} to="/Cards4" className="pl-3">
                        <div className="nav-link-icon w-auto mr-2">
                          <FontAwesomeIcon
                            icon={['fas', 'chevron-right']}
                            className="font-size-xs opacity-3"
                          />
                        </div>
                        <span>Cards examples</span>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink tag={Link} to="/RegularTables2" className="pl-3">
                        <div className="nav-link-icon w-auto mr-2">
                          <FontAwesomeIcon
                            icon={['fas', 'chevron-right']}
                            className="font-size-xs opacity-3"
                          />
                        </div>
                        <span>Tables examples</span>
                        <div className="ml-auto badge badge-pill badge-neutral-danger text-danger">
                          New
                        </div>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink tag={Link} to="/FormsWizard" className="pl-3">
                        <div className="nav-link-icon w-auto mr-2">
                          <FontAwesomeIcon
                            icon={['fas', 'chevron-right']}
                            className="font-size-xs opacity-3"
                          />
                        </div>
                        <span>Form wizards</span>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink tag={Link} to="/PricingTables" className="pl-3">
                        <div className="nav-link-icon w-auto mr-2">
                          <FontAwesomeIcon
                            icon={['fas', 'chevron-right']}
                            className="font-size-xs opacity-3"
                          />
                        </div>
                        <span>Pricing tables</span>
                      </NavLink>
                    </NavItem>
                    <li className="dropdown-divider mb-3" />
                    <NavItem className="pt-1">
                      <Button
                        tag={Link}
                        to="/NavigationMenus"
                        block={true}
                        outline={true}
                        color="danger"
                        className="  btn-sm">
                        <span className="btn-wrapper--label">Learn more</span>
                      </Button>
                    </NavItem>
                  </Nav>
                </Col>
              </Row>
            </UncontrolledPopover>
          </span>
          <UncontrolledDropdown tag="span" className="position-relative">
            <DropdownToggle
              color="neutral-dark"
              size="sm"
              className="mr-3 btn-transition-none">
              Dashboards
            </DropdownToggle>
            <DropdownMenu className="overflow-hidden border-0 bg-midnight-bloom p-3 mt-2">
              <div className="dropdown-mega-menu-md">
                <div className="text-center">
                  <div className="font-weight-bold font-size-lg mb-1 text-white">
                    Dashboards
                  </div>
                  <p className="text-white-50 mb-3">
                    There are currently <b className="text-white">12</b>{' '}
                    dashboard layouts available!
                  </p>
                </div>
                <div className="d-flex flex-wrap">
                  <div className="w-50 p-2">
                    <Link
                      to="/DashboardProjects"
                      className="btn card card-box text-left d-flex justify-content-center px-3 py-2 w-100 border-0"
                      title="">
                      <div>
                        <Grid className="h1 d-block my-2 text-success" />
                        <div className="font-weight-bold font-size-lg text-black">
                          Projects
                        </div>
                        <div className="font-size-md mb-1 text-black-50">
                          Dashboard 9
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="w-50 p-2">
                    <Link
                      to="/DashboardHelpdesk"
                      className="btn card card-box text-left d-flex justify-content-center px-3 py-2 w-100 border-0"
                      title="">
                      <div>
                        <Users className="h1 d-block my-2 text-danger" />
                        <div className="font-weight-bold font-size-lg text-black">
                          Helpdesk
                        </div>
                        <div className="font-size-md mb-1 text-black-50">
                          Dashboard 4
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="w-50 p-2">
                    <Link
                      to="/DashboardCrmManager"
                      className="btn card card-box text-left d-flex justify-content-center px-3 py-2 w-100 border-0"
                      title="">
                      <div>
                        <Settings className="h1 d-block my-2 text-warning" />
                        <div className="font-weight-bold font-size-lg text-black">
                          CRM UI
                        </div>
                        <div className="font-size-md mb-1 text-black-50">
                          Dashboard 6
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="w-50 p-2">
                    <Link
                      to="/DashboardCustomers"
                      className="btn card card-box text-left d-flex justify-content-center px-3 py-2 w-100 border-0"
                      title="">
                      <div>
                        <Layers className="h1 d-block my-2 text-first" />
                        <div className="font-weight-bold font-size-lg text-black">
                          Customers
                        </div>
                        <div className="font-size-md mb-1 text-black-50">
                          Dashboard 12
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
      </Fragment>
    );
  }
}
