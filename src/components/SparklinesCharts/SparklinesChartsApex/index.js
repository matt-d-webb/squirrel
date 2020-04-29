import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Row,
  Col,
  CardBody,
  Card,
  Badge,
  ListGroup,
  ListGroupItem,
  Nav,
  NavItem,
  NavLink,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu
} from 'reactstrap';

import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../../assets/images/avatars/avatar2.jpg';
import avatar3 from '../../../assets/images/avatars/avatar3.jpg';
import avatar4 from '../../../assets/images/avatars/avatar4.jpg';
import avatar5 from '../../../assets/images/avatars/avatar5.jpg';

import CountUp from 'react-countup';
import Chart from 'react-apexcharts';
import Trend from 'react-trend';
import { Line } from 'react-chartjs-2';

const data3Danger = {
  labels: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August'
  ],
  datasets: [
    {
      backgroundColor: 'rgba(248, 50, 69, 0.1)',
      borderCapStyle: 'round',
      borderDash: [],
      borderWidth: 2,
      borderColor: '#f83245',
      borderDashOffset: 0.0,
      borderJoinStyle: 'round',
      pointBorderColor: '#f83245',
      pointBackgroundColor: '#ffffff',
      pointBorderWidth: 0,
      pointHoverRadius: 0,
      pointHoverBackgroundColor: '#ffffff',
      pointHoverBorderColor: '#f83245',
      pointHoverBorderWidth: 0,
      pointRadius: 0,
      pointHitRadius: 0,
      data: [80, 81, 55, 65, 38, 53, 59, 77, 48],
      datalabels: {
        display: false
      }
    }
  ]
};
const data3DangerOptions = {
  layout: {
    padding: {
      left: -10,
      right: 0,
      top: 0,
      bottom: -10
    }
  },
  scales: {
    yAxes: [
      {
        ticks: {
          display: false,
          beginAtZero: true
        },
        gridLines: {
          display: false,
          drawBorder: false
        }
      }
    ],
    xAxes: [
      {
        ticks: {
          display: false,
          beginAtZero: true
        },
        gridLines: {
          display: false,
          drawBorder: false
        }
      }
    ]
  },
  legend: {
    display: false
  },
  responsive: true,
  maintainAspectRatio: false
};

const data3Success = {
  labels: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August'
  ],
  datasets: [
    {
      backgroundColor: 'rgba(27, 201, 67, 0.1)',
      borderCapStyle: 'round',
      borderDash: [],
      borderWidth: 2,
      borderColor: '#1bc943',
      borderDashOffset: 0.0,
      borderJoinStyle: 'round',
      pointBorderColor: '#1bc943',
      pointBackgroundColor: '#ffffff',
      pointBorderWidth: 0,
      pointHoverRadius: 0,
      pointHoverBackgroundColor: '#ffffff',
      pointHoverBorderColor: '#1bc943',
      pointHoverBorderWidth: 0,
      pointRadius: 0,
      pointHitRadius: 0,
      data: [65, 59, 80, 81, 55, 38, 59, 80, 46],
      datalabels: {
        display: false
      }
    }
  ]
};
const data3SuccessOptions = {
  layout: {
    padding: {
      left: -10,
      right: 0,
      top: 0,
      bottom: -10
    }
  },
  scales: {
    yAxes: [
      {
        ticks: {
          display: false,
          beginAtZero: true
        },
        gridLines: {
          display: false,
          drawBorder: false
        }
      }
    ],
    xAxes: [
      {
        ticks: {
          display: false,
          beginAtZero: true
        },
        gridLines: {
          display: false,
          drawBorder: false
        }
      }
    ]
  },
  legend: {
    display: false
  },
  responsive: true,
  maintainAspectRatio: false
};

const data3Warning = {
  labels: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August'
  ],
  datasets: [
    {
      backgroundColor: 'rgba(244, 119, 46, 0.1)',
      borderCapStyle: 'round',
      borderDash: [],
      borderWidth: 2,
      borderColor: '#f4772e',
      borderDashOffset: 0.0,
      borderJoinStyle: 'round',
      pointBorderColor: '#f4772e',
      pointBackgroundColor: '#ffffff',
      pointBorderWidth: 0,
      pointHoverRadius: 0,
      pointHoverBackgroundColor: '#ffffff',
      pointHoverBorderColor: '#f4772e',
      pointHoverBorderWidth: 0,
      pointRadius: 0,
      pointHitRadius: 0,
      data: [80, 81, 55, 65, 38, 53, 59, 77, 48],
      datalabels: {
        display: false
      }
    }
  ]
};
const data3WarningOptions = {
  layout: {
    padding: {
      left: -10,
      right: 0,
      top: 0,
      bottom: -10
    }
  },
  scales: {
    yAxes: [
      {
        ticks: {
          display: false,
          beginAtZero: true
        },
        gridLines: {
          display: false,
          drawBorder: false
        }
      }
    ],
    xAxes: [
      {
        ticks: {
          display: false,
          beginAtZero: true
        },
        gridLines: {
          display: false,
          drawBorder: false
        }
      }
    ]
  },
  legend: {
    display: false
  },
  responsive: true,
  maintainAspectRatio: false
};

export default function LivePreviewExample() {
  const chart23Options = {
    chart: {
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    fill: {
      color: '#4191ff',
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 0.7,
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 0,
        stops: [0, 100]
      }
    },
    colors: ['#4191ff'],
    stroke: {
      color: '#4191ff',
      curve: 'smooth',
      width: 2
    },
    markers: {
      size: 0
    },
    xaxis: {
      crosshairs: {
        width: 1
      }
    },
    yaxis: {
      min: 0
    }
  };
  const chart23Data = [
    {
      name: 'Weekly sales',
      data: [47, 38, 56, 24, 45, 54, 38, 56, 24, 65]
    }
  ];
  return (
    <Fragment>
      <Row>
        <Col xl="5">
          <Card className="mb-5">
            <UncontrolledDropdown className="card-tr-actions">
              <DropdownToggle
                color="link"
                className="btn-link-first p-0 font-size-xl text-first no-caret">
                <FontAwesomeIcon
                  icon={['fas', 'ellipsis-h']}
                  className="font-size-lg"
                />
              </DropdownToggle>
              <DropdownMenu
                right
                className="dropdown-menu-xxl overflow-hidden p-0">
                <div className="grid-menu grid-menu-2col">
                  <Row className="no-gutters">
                    <Col sm="6">
                      <Button
                        outline
                        color="secondary"
                        className="border-0 w-100 btn-transition-none rounded-0 shadow-none py-4 px-1">
                        <FontAwesomeIcon
                          icon={['far', 'bell']}
                          className="h2 d-block mx-auto mb-2 mt-1 text-first"
                        />
                        <div className="font-weight-bold text-black">
                          Reports
                        </div>
                        <div className="font-size-md mb-1 text-black-50">
                          Monthly Stats
                        </div>
                      </Button>
                    </Col>
                    <Col sm="6">
                      <Button
                        outline
                        color="secondary"
                        className="border-0 w-100 btn-transition-none rounded-0 shadow-none py-4 px-1">
                        <FontAwesomeIcon
                          icon={['far', 'file-excel']}
                          className="h2 d-block mx-auto mb-2 mt-1 text-first"
                        />
                        <div className="font-weight-bold text-black">
                          Statistics
                        </div>
                        <div className="font-size-md mb-1 text-black-50">
                          Customers stats
                        </div>
                      </Button>
                    </Col>
                    <Col sm="6">
                      <Button
                        outline
                        color="secondary"
                        className="border-0 w-100 btn-transition-none rounded-0 shadow-none py-4 px-1">
                        <FontAwesomeIcon
                          icon={['far', 'eye']}
                          className="h2 d-block mx-auto mb-2 mt-1 text-first"
                        />
                        <div className="font-weight-bold text-black">
                          Projects
                        </div>
                        <div className="font-size-md mb-1 text-black-50">
                          Manage servers
                        </div>
                      </Button>
                    </Col>
                    <Col sm="6">
                      <Button
                        outline
                        color="secondary"
                        className="border-0 w-100 btn-transition-none rounded-0 shadow-none py-4 px-1">
                        <FontAwesomeIcon
                          icon={['far', 'chart-bar']}
                          className="h2 d-block mx-auto mb-2 mt-1 text-first"
                        />
                        <div className="font-weight-bold text-black">Tasks</div>
                        <div className="font-size-md mb-1 text-black-50">
                          Pending items
                        </div>
                      </Button>
                    </Col>
                  </Row>
                </div>
              </DropdownMenu>
            </UncontrolledDropdown>
            <div className="card-header-alt px-4 pt-4 pb-0">
              <h6 className="font-weight-bold font-size-lg mb-1 text-black">
                Weekly Sales
              </h6>
              <p className="text-black-50 mb-0">
                Reports for what we sold this week.
              </p>
            </div>
            <div>
              <Chart
                options={chart23Options}
                series={chart23Data}
                type="area"
                height={125}
              />
            </div>
            <div className="scroll-area-sm shadow-overflow">
              <PerfectScrollbar>
                <ListGroup flush>
                  <ListGroupItem className="d-flex justify-content-between align-items-center py-3">
                    <div className="d-flex align-items-center">
                      <div className="avatar-icon-wrapper mr-2">
                        <div className="avatar-icon">
                          <img alt="..." src={avatar2} />
                        </div>
                      </div>
                      <div>
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Shanelle Wynn
                        </a>
                        <span className="text-black-50 d-block">
                          UI Engineer, Apple Inc.
                        </span>
                      </div>
                    </div>
                    <Button size="sm" color="neutral-dark" className="ml-4">
                      View
                    </Button>
                  </ListGroupItem>
                  <ListGroupItem className="d-flex justify-content-between align-items-center py-3">
                    <div className="d-flex align-items-center">
                      <div className="avatar-icon-wrapper mr-2">
                        <div className="avatar-icon">
                          <img alt="..." src={avatar3} />
                        </div>
                      </div>
                      <div>
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Akeem Griffith
                        </a>
                        <span className="text-black-50 d-block">
                          Manager, Google Inc.
                        </span>
                      </div>
                    </div>
                    <Button size="sm" color="neutral-dark" className="ml-4">
                      View
                    </Button>
                  </ListGroupItem>
                  <ListGroupItem className="d-flex justify-content-between align-items-center py-3">
                    <div className="d-flex align-items-center">
                      <div className="avatar-icon-wrapper mr-2">
                        <div className="avatar-icon">
                          <img alt="..." src={avatar4} />
                        </div>
                      </div>
                      <div>
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Abigayle Hicks
                        </a>
                        <span className="text-black-50 d-block">
                          Project Manager, Spotify
                        </span>
                      </div>
                    </div>
                    <Button size="sm" color="neutral-dark" className="ml-4">
                      View
                    </Button>
                  </ListGroupItem>
                  <ListGroupItem className="d-flex justify-content-between align-items-center py-3">
                    <div className="d-flex align-items-center">
                      <div className="avatar-icon-wrapper mr-2">
                        <div className="avatar-icon">
                          <img alt="..." src={avatar1} />
                        </div>
                      </div>
                      <div>
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Reece Corbett
                        </a>
                        <span className="text-black-50 d-block">
                          Senior Designer, Amazon Inc.
                        </span>
                      </div>
                    </div>
                    <div>
                      <Button size="sm" color="neutral-dark" className="ml-4">
                        View
                      </Button>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem className="d-flex justify-content-between align-items-center py-3">
                    <div className="d-flex align-items-center">
                      <div className="avatar-icon-wrapper mr-2">
                        <div className="avatar-icon">
                          <img alt="..." src={avatar5} />
                        </div>
                      </div>
                      <div>
                        <a
                          href="#/"
                          onClick={e => e.preventDefault()}
                          className="font-weight-bold text-black"
                          title="...">
                          Reece Corbett
                        </a>
                        <span className="text-black-50 d-block">
                          Senior Designer, Amazon Inc.
                        </span>
                      </div>
                    </div>
                    <Button size="sm" color="neutral-dark" className="ml-4">
                      View
                    </Button>
                  </ListGroupItem>
                </ListGroup>
              </PerfectScrollbar>
            </div>
            <div className="card-footer p-3 text-center">
              <Button size="sm" color="primary">
                <span className="btn-wrapper--label">View all employees</span>
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                </span>
              </Button>
            </div>
          </Card>
        </Col>
        <Col xl="7">
          <Row>
            <Col md="6">
              <Card className="card-box mb-5">
                <div className="card-header-alt px-4 pt-4 pb-0 d-flex align-items-start justify-content-between">
                  <div>
                    <h3 className="font-weight-bold display-4 mb-0 text-black">
                      <CountUp
                        start={0}
                        end={895}
                        duration={6}
                        deplay={2}
                        separator=""
                        decimals={0}
                        decimal=","
                      />
                    </h3>
                    <p className="font-size-lg text-black-50 mb-0">
                      Total Orders
                    </p>
                  </div>
                  <Button
                    size="sm"
                    color="primary"
                    outline
                    className="text-uppercase font-size-xs">
                    <small className="font-weight-bold">Details</small>
                  </Button>
                </div>
                <div className="pr-5 pb-3">
                  <Trend
                    data={[5, 10, 5, 13, 5.6, 8, 5, 5.6, 11]}
                    autoDraw
                    autoDrawDuration={3000}
                    autoDrawEasing="ease-in"
                    height={110}
                    radius={15}
                    smooth
                    stroke="var(--primary)"
                    strokeLinecap="round"
                    strokeWidth={4}
                  />
                </div>
              </Card>
              <Card className="card-box bg-midnight-bloom mb-5">
                <div className="card-header-alt px-4 pt-4 pb-0">
                  <h3 className="font-weight-bold display-4 mb-0 text-white">
                    <CountUp
                      start={0}
                      end={586}
                      duration={6}
                      deplay={2}
                      separator=""
                      decimals={0}
                      decimal=","
                    />
                  </h3>
                  <p className="font-size-lg text-white-50 mb-0">
                    Total Visitors
                  </p>
                </div>
                <div className="pr-5 pb-3">
                  <Trend
                    data={[6, 8, 5, 5, 5.6, 13, 5.6, 12, 10]}
                    autoDraw
                    autoDrawDuration={3000}
                    autoDrawEasing="ease-in"
                    height={110}
                    radius={15}
                    smooth
                    stroke="var(--white)"
                    strokeLinecap="round"
                    strokeWidth={4}
                  />
                </div>
              </Card>
            </Col>
            <Col md="6">
              <Card className="card-box bg-danger mb-5">
                <div className="card-header-alt px-4 pt-4 pb-0">
                  <h3 className="font-weight-bold display-4 mb-0 text-white">
                    <CountUp
                      start={0}
                      end={183.954}
                      duration={6}
                      deplay={2}
                      separator=""
                      decimals={3}
                      decimal=","
                    />
                  </h3>
                  <p className="font-size-lg text-white-50 mb-0">
                    Total Deliveries
                  </p>
                </div>
                <div className="pr-5 pb-3">
                  <Trend
                    data={[5, 8, 5.6, 13, 5.6, 8, 6, 12, 10]}
                    autoDraw
                    autoDrawDuration={3000}
                    autoDrawEasing="ease-in"
                    height={110}
                    radius={15}
                    smooth
                    stroke="var(--white)"
                    strokeLinecap="round"
                    strokeWidth={4}
                  />
                </div>
              </Card>
              <Card className="card-box bg-night-sky mb-5">
                <div className="card-header-alt px-4 pt-4 pb-0">
                  <h3 className="font-weight-bold display-4 mb-0 text-white">
                    <CountUp
                      start={0}
                      end={13.253}
                      duration={6}
                      deplay={2}
                      separator=""
                      decimals={3}
                      decimal=","
                    />
                  </h3>
                  <p className="font-size-lg text-white-50 mb-0">
                    Total Budget
                  </p>
                </div>
                <div className="pr-5 pb-3">
                  <Trend
                    data={[5, 5.6, 13, 5.6, 8, 6, 8, 12, 10]}
                    autoDraw
                    autoDrawDuration={3000}
                    autoDrawEasing="ease-in"
                    height={110}
                    radius={15}
                    smooth
                    stroke="var(--white)"
                    strokeLinecap="round"
                    strokeWidth={4}
                  />
                </div>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row>
        <Col xl="4">
          <Card className="card-box mb-5">
            <CardBody>
              <div className="d-flex align-items-center justify-content-between">
                <div className="font-weight-bold font-size-md m-0">
                  Bandwidth allocation
                </div>
                <UncontrolledDropdown>
                  <DropdownToggle
                    size="sm"
                    color="neutral-dark"
                    className="no-caret">
                    Export
                    <FontAwesomeIcon
                      icon={['fas', 'chevron-down']}
                      className="opacity-8 font-size-xs ml-1"
                    />
                  </DropdownToggle>
                  <DropdownMenu right className="dropdown-menu-xl">
                    <Nav pills className="nav-neutral-dark flex-column px-3">
                      <NavItem className="nav-item--header px-0">
                        <span className="text-capitalize text-black font-size-md font-weight-bold">
                          Export menu
                        </span>
                      </NavItem>
                      <li className="dropdown-divider" />
                      <NavItem>
                        <NavLink href="#/" onClick={e => e.preventDefault()}>
                          <span>View all reports</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          href="#/"
                          onClick={e => e.preventDefault()}
                          active>
                          <span>View active items</span>
                          <Badge className="ml-auto" color="success">
                            23
                          </Badge>
                        </NavLink>
                      </NavItem>
                      <NavItem className="pt-4 nav-item--header">
                        <span className="text-black font-weight-bold">
                          Options
                        </span>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#/" onClick={e => e.preventDefault()}>
                          <div className="nav-link-icon">
                            <FontAwesomeIcon icon={['fas', 'download']} />
                          </div>
                          <span>Download</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#/" onClick={e => e.preventDefault()}>
                          <div className="nav-link-icon">
                            <FontAwesomeIcon icon={['far', 'file-excel']} />
                          </div>
                          <span>Export to CSV</span>
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
              <div className="mt-5">
                <span className="display-3 text-primary font-weight-bold d-block">
                  12,56k
                </span>
                <span className="text-black-50">
                  Successful production deployments
                </span>
              </div>
            </CardBody>
            <div className="sparkline-full-wrapper sparkline-full-wrapper--sm">
              <Line data={data3Success} options={data3SuccessOptions} />
            </div>
          </Card>
        </Col>
        <Col xl="4">
          <Card className="card-box mb-5">
            <CardBody>
              <div className="d-flex align-items-center justify-content-between">
                <div className="font-weight-bold font-size-md m-0">
                  Production servers
                </div>
                <UncontrolledDropdown>
                  <DropdownToggle
                    size="sm"
                    color="neutral-danger"
                    className="no-caret">
                    Export
                    <FontAwesomeIcon
                      icon={['fas', 'chevron-down']}
                      className="opacity-8 font-size-xs ml-1"
                    />
                  </DropdownToggle>
                  <DropdownMenu right className="dropdown-menu-xl">
                    <Nav pills className="nav-neutral-danger flex-column px-3">
                      <NavItem className="nav-item--header px-0">
                        <span className="text-capitalize text-black font-size-md font-weight-bold">
                          Export menu
                        </span>
                      </NavItem>
                      <li className="dropdown-divider" />
                      <NavItem>
                        <NavLink href="#/" onClick={e => e.preventDefault()}>
                          <span>View all reports</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          href="#/"
                          onClick={e => e.preventDefault()}
                          active>
                          <span>View active items</span>
                          <Badge className="ml-auto" color="success">
                            23
                          </Badge>
                        </NavLink>
                      </NavItem>
                      <NavItem className="pt-4 nav-item--header">
                        <span className="text-black font-weight-bold">
                          Options
                        </span>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#/" onClick={e => e.preventDefault()}>
                          <div className="nav-link-icon">
                            <FontAwesomeIcon icon={['fas', 'download']} />
                          </div>
                          <span>Download</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="#/" onClick={e => e.preventDefault()}>
                          <div className="nav-link-icon">
                            <FontAwesomeIcon icon={['far', 'file-excel']} />
                          </div>
                          <span>Export to CSV</span>
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
              <div className="mt-5">
                <span className="display-3 text-danger font-weight-bold d-block">
                  <CountUp
                    start={0}
                    end={35}
                    duration={6}
                    deplay={2}
                    separator=""
                    prefix="+"
                    suffix="%"
                    decimals={0}
                    decimal=","
                  />
                </span>
                <span className="text-black-50">Returning clients reports</span>
              </div>
            </CardBody>
            <div className="sparkline-full-wrapper">
              <Line data={data3Danger} options={data3DangerOptions} />
            </div>
          </Card>
        </Col>
        <Col xl="4">
          <Card className="card-box mb-5">
            <CardBody>
              <div className="d-flex align-items-center justify-content-between">
                <div className="font-weight-bold font-size-md m-0">
                  Returning customers
                </div>
                <Button
                  size="sm"
                  color="first"
                  className="text-uppercase font-weight-bold font-size-xs">
                  <FontAwesomeIcon
                    icon={['far', 'chart-bar']}
                    className="opacity-8 mr-1"
                  />
                  Generate
                </Button>
              </div>
              <div className="mt-5">
                <span className="display-3 text-warning font-weight-bold d-block">
                  <CountUp
                    start={0}
                    end={1253}
                    duration={6}
                    deplay={2}
                    separator=""
                    prefix="+"
                    suffix="%"
                    decimals={0}
                    decimal=","
                  />
                </span>
                <span className="text-warning opacity-7">
                  Pending services integrations
                </span>
              </div>
            </CardBody>
            <div className="sparkline-full-wrapper sparkline-full-wrapper--lg">
              <Line data={data3Warning} options={data3WarningOptions} />
            </div>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
}
