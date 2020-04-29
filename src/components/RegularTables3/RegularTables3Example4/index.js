import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Row,
  Table,
  Col,
  Card,
  CardHeader,
  Badge,
  UncontrolledTooltip,
  Nav,
  NavItem,
  NavLink,
  Button,
  UncontrolledDropdown,
  Progress,
  DropdownToggle,
  DropdownMenu
} from 'reactstrap';

import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../../assets/images/avatars/avatar2.jpg';
import avatar3 from '../../../assets/images/avatars/avatar3.jpg';
import avatar4 from '../../../assets/images/avatars/avatar4.jpg';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Row>
        <Col xl="6">
          <Card className="card-box mb-5">
            <CardHeader>
              <div className="card-header--title font-weight-bold">
                Analytics
              </div>
              <div className="card-header--actions">
                <UncontrolledDropdown>
                  <DropdownToggle
                    color="neutral-success"
                    size="sm"
                    className="no-caret">
                    <span className="btn-wrapper--label">Select period</span>
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon
                        icon={['fas', 'chevron-down']}
                        className="opacity-8 font-size-xs ml-1"
                      />
                    </span>
                  </DropdownToggle>
                  <DropdownMenu right className="dropdown-menu-xl">
                    <Nav pills className="nav-neutral-success flex-column px-3">
                      <NavItem>
                        <NavLink href="#/" onClick={e => e.preventDefault()}>
                          <span>Last day</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          href="#/"
                          onClick={e => e.preventDefault()}
                          active>
                          <span>Last month</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#/" onClick={e => e.preventDefault()}>
                          <span>Last year</span>
                        </NavLink>
                      </NavItem>
                    </Nav>
                    <div className="divider mt-3" />
                    <div className="pt-3 pb-2 text-center">
                      <Button size="sm" outline color="first">
                        Custom period
                      </Button>
                    </div>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
            </CardHeader>
            <PerfectScrollbar className="scroll-area-sm mb-2">
              <div className="table-responsive-md">
                <Table hover borderless className="text-nowrap mb-0">
                  <tbody>
                    <tr>
                      <td className="text-center font-size-lg">1 August</td>
                      <td>
                        <div className="text-left font-size-lg">
                          <small className="text-black-50 d-block">
                            Returning visitors
                          </small>
                          <span className="text-warning">596</span>
                        </div>
                      </td>
                      <td>
                        <div className="text-left font-size-lg">
                          <small className="text-black-50 d-block">
                            New visits
                          </small>
                          <span className="text-success">
                            <FontAwesomeIcon
                              icon={['fas', 'angle-up']}
                              className="mr-1"
                            />
                            45%
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center font-size-lg">2 August</td>
                      <td>
                        <div className="text-left font-size-lg">
                          <small className="text-black-50 d-block">
                            Returning visitors
                          </small>
                          <span className="text-success">3,465</span>
                        </div>
                      </td>
                      <td>
                        <div className="text-left font-size-lg">
                          <small className="text-black-50 d-block">
                            New visits
                          </small>
                          <span className="text-danger">
                            <FontAwesomeIcon
                              icon={['fas', 'angle-down']}
                              className="mr-1"
                            />
                            35%
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center font-size-lg">3 August</td>
                      <td>
                        <div className="text-left font-size-lg">
                          <small className="text-black-50 d-block">
                            Returning visitors
                          </small>
                          <span className="text-success">12,364</span>
                        </div>
                      </td>
                      <td>
                        <div className="text-left font-size-lg">
                          <small className="text-black-50 d-block">
                            New visits
                          </small>
                          <span className="text-success">
                            <FontAwesomeIcon
                              icon={['fas', 'angle-up']}
                              className="mr-1"
                            />
                            45%
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center font-size-lg">4 August</td>
                      <td>
                        <div className="text-left font-size-lg">
                          <small className="text-black-50 d-block">
                            Returning visitors
                          </small>
                          <span className="text-warning">346</span>
                        </div>
                      </td>
                      <td>
                        <div className="text-left font-size-lg">
                          <small className="text-black-50 d-block">
                            New visits
                          </small>
                          <span className="text-success">
                            <FontAwesomeIcon
                              icon={['fas', 'angle-up']}
                              className="mr-1"
                            />
                            66%
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="text-center font-size-lg">5 August</td>
                      <td>
                        <div className="text-left font-size-lg">
                          <small className="text-black-50 d-block">
                            Returning visitors
                          </small>
                          <span className="text-success">765</span>
                        </div>
                      </td>
                      <td>
                        <div className="text-left font-size-lg">
                          <small className="text-black-50 d-block">
                            New visits
                          </small>
                          <span className="text-danger">
                            <FontAwesomeIcon
                              icon={['fas', 'angle-down']}
                              className="mr-1"
                            />
                            64%
                          </span>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </PerfectScrollbar>
          </Card>
        </Col>
        <Col xl="6">
          <Card className="card-box mb-5">
            <CardHeader>
              <div className="card-header--title font-weight-bold">
                Countries
              </div>
              <div className="card-header--actions">
                <Badge pill color="neutral-first">
                  Updates available
                </Badge>
              </div>
            </CardHeader>
            <PerfectScrollbar className="scroll-area-sm mb-2">
              <div className="table-responsive-md">
                <Table hover borderless className="text-nowrap mb-0">
                  <thead>
                    <tr>
                      <th style={{ width: 150 }}>Country</th>
                      <th>Visits</th>
                      <th>% Visits</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="align-box-row">
                          <flag-icon
                            className="font-size-xxl mr-2"
                            country="us"></flag-icon>
                          <span>USA</span>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center font-size-lg">
                          <FontAwesomeIcon
                            icon={['fas', 'angle-up']}
                            className="mr-2 t2xt-success"
                          />
                          <small className="text-black-50 d-block">
                            45,235
                          </small>
                        </div>
                      </td>
                      <td>
                        <div className="align-box-row">
                          <div className="flex-grow-1">
                            <Progress
                              animated
                              className="progress-xs"
                              color="first"
                              value="55"
                            />
                          </div>
                          <div className="text-dark pl-2">55%</div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="align-box-row">
                          <flag-icon
                            className="font-size-xxl mr-2"
                            country="it"></flag-icon>
                          <span>Italy</span>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center font-size-lg">
                          <FontAwesomeIcon
                            icon={['fas', 'angle-up']}
                            className="mr-2 2ext-success"
                          />
                          <small className="text-black-50 d-block">3,772</small>
                        </div>
                      </td>
                      <td>
                        <div className="align-box-row">
                          <div className="flex-grow-1">
                            <Progress
                              animated
                              className="progress-xs"
                              color="first"
                              value="65"
                            />
                          </div>
                          <div className="text-dark pl-2">65%</div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="align-box-row">
                          <flag-icon
                            className="font-size-xxl mr-2"
                            country="fr"></flag-icon>
                          <span>France</span>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center font-size-lg">
                          <FontAwesomeIcon
                            icon={['fas', 'angle-down']}
                            className="mr-2 text-danger"
                          />
                          <small className="text-black-50 d-block">
                            56,235
                          </small>
                        </div>
                      </td>
                      <td>
                        <div className="align-box-row">
                          <div className="flex-grow-1">
                            <Progress
                              animated
                              className="progress-xs"
                              color="first"
                              value="87"
                            />
                          </div>
                          <div className="text-dark pl-2">87%</div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="align-box-row">
                          <flag-icon
                            className="font-size-xxl mr-2"
                            country="ch"></flag-icon>
                          <span>Switzerland</span>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center font-size-lg">
                          <FontAwesomeIcon
                            icon={['fas', 'angle-down']}
                            className="mr-2 text-warning"
                          />
                          <small className="text-black-50 d-block">6,346</small>
                        </div>
                      </td>
                      <td>
                        <div className="align-box-row">
                          <div className="flex-grow-1">
                            <Progress
                              animated
                              className="progress-xs"
                              color="first"
                              value="29"
                            />
                          </div>
                          <div className="text-dark pl-2">29%</div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="align-box-row">
                          <flag-icon
                            className="font-size-xxl mr-2"
                            country="de"></flag-icon>
                          <span>Germany</span>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex align-items-center font-size-lg">
                          <FontAwesomeIcon
                            icon={['fas', 'angle-up']}
                            className="mr-2 t2xt-success"
                          />
                          <small className="text-black-50 d-block">
                            15,366
                          </small>
                        </div>
                      </td>
                      <td>
                        <div className="align-box-row">
                          <div className="flex-grow-1">
                            <Progress
                              animated
                              className="progress-xs"
                              color="first"
                              value="33"
                            />
                          </div>
                          <div className="text-dark pl-2">33%</div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </PerfectScrollbar>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xl="6">
          <Card className="card-box mb-5">
            <div className="font-size-lg px-3 py-4 font-weight-bold">
              Transactions history
            </div>
            <div className="table-responsive-md">
              <Table borderless className="text-nowrap mb-0">
                <thead>
                  <tr>
                    <th className="text-uppercase bg-secondary">Application</th>
                    <th className="text-uppercase bg-secondary">Date</th>
                    <th className="text-uppercase bg-secondary">Payouts</th>
                    <th className="text-uppercase bg-secondary">Status</th>
                    <th className="text-uppercase bg-secondary text-center">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>File Manager</td>
                    <td>Aug 11, 2020</td>
                    <td>$45,567</td>
                    <td>
                      <Badge color="success">Paid</Badge>
                    </td>
                    <td className="text-center">
                      <Button
                        size="sm"
                        color="dark"
                        className="btn-transition-none shadow-none py-1 px-2"
                        id="EditEntryTooltip220">
                        <FontAwesomeIcon icon={['far', 'dot-circle']} />
                      </Button>
                      <UncontrolledTooltip target="EditEntryTooltip220">
                        Edit entry
                      </UncontrolledTooltip>
                    </td>
                  </tr>
                  <tr>
                    <td>Calendar App</td>
                    <td>Nov 12, 2020</td>
                    <td>$586,567</td>
                    <td>
                      <Badge color="success">Paid</Badge>
                    </td>
                    <td className="text-center">
                      <Button
                        size="sm"
                        color="dark"
                        className="btn-transition-none shadow-none py-1 px-2"
                        id="EditEntryTooltip221">
                        <FontAwesomeIcon icon={['far', 'dot-circle']} />
                      </Button>
                      <UncontrolledTooltip target="EditEntryTooltip221">
                        Edit entry
                      </UncontrolledTooltip>
                    </td>
                  </tr>
                  <tr>
                    <td>Tasks Management</td>
                    <td>Nov 13, 2020</td>
                    <td>$657</td>
                    <td>
                      <Badge color="warning">Pending</Badge>
                    </td>
                    <td className="text-center">
                      <Button
                        size="sm"
                        color="dark"
                        className="btn-transition-none shadow-none py-1 px-2"
                        id="EditEntryTooltip222">
                        <FontAwesomeIcon icon={['far', 'dot-circle']} />
                      </Button>
                      <UncontrolledTooltip target="EditEntryTooltip222">
                        Edit entry
                      </UncontrolledTooltip>
                    </td>
                  </tr>
                  <tr>
                    <td>Tickets App</td>
                    <td>Nov 22, 2020</td>
                    <td>$12,478</td>
                    <td>
                      <Badge color="danger">Overdue</Badge>
                    </td>
                    <td className="text-center">
                      <Button
                        size="sm"
                        color="dark"
                        className="btn-transition-none shadow-none py-1 px-2"
                        id="EditEntryTooltip223">
                        <FontAwesomeIcon icon={['far', 'dot-circle']} />
                      </Button>
                      <UncontrolledTooltip target="EditEntryTooltip223">
                        Edit entry
                      </UncontrolledTooltip>
                    </td>
                  </tr>
                  <tr>
                    <td>Dashboard App</td>
                    <td>Aug 15, 2020</td>
                    <td>$45,57</td>
                    <td>
                      <Badge color="success">Paid</Badge>
                    </td>
                    <td className="text-center">
                      <Button
                        size="sm"
                        color="dark"
                        className="btn-transition-none shadow-none py-1 px-2"
                        id="EditEntryTooltip224">
                        <FontAwesomeIcon icon={['far', 'dot-circle']} />
                      </Button>
                      <UncontrolledTooltip target="EditEntryTooltip224">
                        Edit entry
                      </UncontrolledTooltip>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Card>
        </Col>
        <Col xl="6">
          <Card className="card-box mb-5">
            <div className="font-size-lg px-3 py-4 font-weight-bold">
              Exchange
            </div>
            <div className="table-responsive-md">
              <Table borderless className="text-nowrap mb-0">
                <thead>
                  <tr>
                    <th className="text-uppercase bg-secondary">Profile</th>
                    <th className="text-uppercase bg-secondary">Currency</th>
                    <th className="text-uppercase bg-secondary">Balance</th>
                    <th className="text-uppercase bg-secondary">
                      Reserved in Orders
                    </th>
                    <th className="text-uppercase bg-secondary text-center">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="avatar-icon-wrapper avatar-icon-sm mr-3">
                          <div className="avatar-icon">
                            <img alt="..." src={avatar1} />
                          </div>
                        </div>
                        <div>
                          Brody Dixon
                          <span className="text-black-50 font-size-sm d-block">
                            Member since 2016
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="font-weight-bold">BTC</td>
                    <td>0.000458 BTC</td>
                    <td>0.000073 BTC</td>
                    <td className="text-center">
                      <Button
                        color="link"
                        className="p-0 btn-animated-icon btn-animated-icon--dark d-30"
                        id="AddTooltip555">
                        <span className="btn-wrapper--icon">
                          <FontAwesomeIcon
                            icon={['fas', 'plus']}
                            className="font-size-sm"
                          />
                        </span>
                      </Button>
                      <UncontrolledTooltip target="AddTooltip555">
                        Add
                      </UncontrolledTooltip>
                      <Button
                        color="link"
                        className="p-0 btn-animated-icon btn-animated-icon--primary d-30"
                        title="Remove">
                        <span className="btn-wrapper--icon">
                          <FontAwesomeIcon
                            icon={['fas', 'times']}
                            className="font-size-sm"
                          />
                        </span>
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="avatar-icon-wrapper avatar-icon-sm mr-3">
                          <div className="avatar-icon">
                            <img alt="..." src={avatar2} />
                          </div>
                        </div>
                        <div>
                          Arvin Weston
                          <span className="text-black-50 font-size-sm d-block">
                            Member since 2017
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="font-weight-bold">ETH</td>
                    <td>3.435456 ETH</td>
                    <td>1.234555 ETH</td>
                    <td className="text-center">
                      <Button
                        color="link"
                        className="p-0 btn-animated-icon btn-animated-icon--dark d-30"
                        id="AddTooltip556">
                        <span className="btn-wrapper--icon">
                          <FontAwesomeIcon
                            icon={['fas', 'plus']}
                            className="font-size-sm"
                          />
                        </span>
                      </Button>
                      <UncontrolledTooltip target="AddTooltip556">
                        Add
                      </UncontrolledTooltip>
                      <Button
                        color="link"
                        className="p-0 btn-animated-icon btn-animated-icon--primary d-30"
                        title="Remove">
                        <span className="btn-wrapper--icon">
                          <FontAwesomeIcon
                            icon={['fas', 'times']}
                            className="font-size-sm"
                          />
                        </span>
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="avatar-icon-wrapper avatar-icon-sm mr-3">
                          <div className="avatar-icon">
                            <img alt="..." src={avatar3} />
                          </div>
                        </div>
                        <div>
                          Elin Paine
                          <span className="text-black-50 font-size-sm d-block">
                            Member since 2018
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="font-weight-bold">EUR</td>
                    <td>34 EUR</td>
                    <td>6 EUR</td>
                    <td className="text-center">
                      <Button
                        color="link"
                        className="p-0 btn-animated-icon btn-animated-icon--dark d-30"
                        id="AddTooltip557">
                        <span className="btn-wrapper--icon">
                          <FontAwesomeIcon
                            icon={['fas', 'plus']}
                            className="font-size-sm"
                          />
                        </span>
                      </Button>
                      <UncontrolledTooltip target="AddTooltip557">
                        Add
                      </UncontrolledTooltip>
                      <Button
                        color="link"
                        className="p-0 btn-animated-icon btn-animated-icon--primary d-30"
                        title="Remove">
                        <span className="btn-wrapper--icon">
                          <FontAwesomeIcon
                            icon={['fas', 'times']}
                            className="font-size-sm"
                          />
                        </span>
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="avatar-icon-wrapper avatar-icon-sm mr-3">
                          <div className="avatar-icon">
                            <img alt="..." src={avatar4} />
                          </div>
                        </div>
                        <div>
                          Sheena Hampton
                          <span className="text-black-50 font-size-sm d-block">
                            Member since 2019
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="font-weight-bold">CNY</td>
                    <td>66.20 CNY</td>
                    <td>23.40 CNY</td>
                    <td className="text-center">
                      <Button
                        color="link"
                        className="p-0 btn-animated-icon btn-animated-icon--dark d-30"
                        id="AddTooltip558">
                        <span className="btn-wrapper--icon">
                          <FontAwesomeIcon
                            icon={['fas', 'plus']}
                            className="font-size-sm"
                          />
                        </span>
                      </Button>
                      <UncontrolledTooltip target="AddTooltip558">
                        Add
                      </UncontrolledTooltip>
                      <Button
                        color="link"
                        className="p-0 btn-animated-icon btn-animated-icon--primary d-30"
                        title="Remove">
                        <span className="btn-wrapper--icon">
                          <FontAwesomeIcon
                            icon={['fas', 'times']}
                            className="font-size-sm"
                          />
                        </span>
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
}
