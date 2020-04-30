import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem,
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

import Chart from 'react-apexcharts';
import CountUp from 'react-countup';
import Trend from 'react-trend';

export default function LivePreviewExample() {
  const chart17Options = {
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
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '65%'
      }
    },
    stroke: {
      color: '#4191ff',
      curve: 'smooth',
      width: 2
    },
    colors: ['#4191ff'],
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
    legend: {
      show: false
    },
    tooltip: {
      enabled: false
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
  const chart17Data = [
    {
      name: 'Sales',
      data: [32, 52, 45, 32, 54, 56, 28, 25, 36, 62]
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
                          Expenditure
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
               Expenditure
              </h6>
              <p className="text-black-50 mb-0">
                Tracked spending
              </p>
            </div>
            <div>
              <Chart
                options={chart17Options}
                series={chart17Data}
                type="area"
                height={150}
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
                          Tesco
                        </a>
                        <span className="text-black-50 d-block">
                          Groceries
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
                          Gucci
                        </a>
                        <span className="text-black-50 d-block">
                          Luxury Shoes
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
                          Apple, Inc
                        </a>
                        <span className="text-black-50 d-block">
                          Technology
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
                <span className="btn-wrapper--label">View all</span>
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
                      Monthly Spend
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
                    height={120}
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
                    Year Spending
                  </p>
                </div>
                <div className="pr-5 pb-3">
                  <Trend
                    data={[6, 8, 5, 5, 5.6, 13, 5.6, 12, 10]}
                    autoDraw
                    autoDrawDuration={3000}
                    autoDrawEasing="ease-in"
                    height={120}
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
                     Total Credit
                  </p>
                </div>
                <div className="pr-5 pb-3">
                  <Trend
                    data={[5, 8, 5.6, 13, 5.6, 8, 6, 12, 10]}
                    autoDraw
                    autoDrawDuration={3000}
                    autoDrawEasing="ease-in"
                    height={120}
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
                    height={120}
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
    </Fragment>
  );
}
