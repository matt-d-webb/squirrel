import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Row,
  Col,
  CardBody,
  Card,
  UncontrolledTooltip,
  Button
} from 'reactstrap';

import Chart from 'react-apexcharts';

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
    stroke: {
      color: '#f4772e',
      curve: 'smooth',
      width: 2
    },
    colors: ['#f4772e'],
    fill: {
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

  const chart31Options = {
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
    colors: ['#f4772e'],
    stroke: {
      color: '#4191ff',
      curve: 'smooth',
      width: 3
    },
    xaxis: {
      crosshairs: {
        width: 1
      }
    },
    yaxis: {
      min: 0
    },
    legend: {
      show: false
    }
  };
  const chart31Data = [
    {
      name: 'Sales',
      data: [47, 38, 56, 24, 45, 54, 38, 47, 38, 56, 24, 56, 24, 65]
    }
  ];

  const chart36Options = {
    chart: {
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      }
    },

    stroke: {
      color: '#1bc943',
      curve: 'smooth',
      width: 4
    },
    colors: ['#1bc943'],
    fill: {
      color: '1bc943',
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
    xaxis: {
      crosshairs: {
        width: 1
      }
    },
    yaxis: {
      min: 0
    }
  };
  const chart36Data = [
    {
      name: 'Monthly Analytics',
      data: [47, 38, 56, 24, 45, 54, 38, 56, 24, 65]
    }
  ];

  const chart30Options = {
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
    colors: ['#3c44b1'],
    stroke: {
      color: '#4191ff',
      curve: 'smooth',
      width: 4
    },
    xaxis: {
      crosshairs: {
        width: 1
      }
    },
    yaxis: {
      min: 0
    },
    legend: {
      show: false
    }
  };
  const chart30Data = [
    {
      name: 'Customers',
      data: [47, 38, 56, 24, 45, 54, 38, 47, 38, 56, 24, 56, 24, 65]
    }
  ];
  return (
    <Fragment>
      <Row>
        <Col xl="6">
          <Card className="card-box mb-5">
            <div className="card-header bg-light">
              <div className="card-header--title">
                <small>Statistics</small>
                <b>Last quarter report</b>
              </div>
              <div className="card-header--actions">
                <a
                  href="#/"
                  onClick={e => e.preventDefault()}
                  size="sm"
                  color="first"
                  id="ViewDetailsTooltip9">
                  <FontAwesomeIcon icon={['fas', 'plus']} />
                </a>
                <UncontrolledTooltip target="ViewDetailsTooltip9">
                  View details
                </UncontrolledTooltip>
              </div>
            </div>
            <div className="pt-3">
              <Row className="mt-3 mb-2">
                <Col>
                  <div className="text-center">
                    <div>
                      <FontAwesomeIcon
                        icon={['far', 'user']}
                        className="font-size-xxl text-success"
                      />
                    </div>
                    <div className="mt-2 line-height-sm">
                      <b className="font-size-lg">2,345</b>
                      <span className="text-black-50 d-block">users</span>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="text-center">
                    <div>
                      <FontAwesomeIcon
                        icon={['far', 'keyboard']}
                        className="font-size-xxl text-danger"
                      />
                    </div>
                    <div className="mt-2 line-height-sm">
                      <b className="font-size-lg">3,568</b>
                      <span className="text-black-50 d-block">clicks</span>
                    </div>
                  </div>
                </Col>
              </Row>
              <div>
                <Chart
                  options={chart17Options}
                  series={chart17Data}
                  type="area"
                  height={150}
                />
              </div>
            </div>
            <div className="p-4 text-center">
              <Button outline color="primary" className="mb-1">
                <span className="btn-wrapper--label">View complete report</span>
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={['fas', 'angle-right']} />
                </span>
              </Button>
            </div>
          </Card>
        </Col>
        <Col xl="6">
          <Card className="card-box mb-5">
            <div className="card-header bg-light">
              <div className="card-header--title">
                <small>Statistics</small>
                <b>Users overview</b>
              </div>
              <div className="card-header--actions">
                <Button
                  tag="a"
                  href="#/"
                  onClick={e => e.preventDefault()}
                  color="link"
                  className="btn-link-primary p-0 font-size-xl text-primary"
                  id="ViewOptionsTooltip1">
                  <FontAwesomeIcon icon={['fas', 'ellipsis-h']} />
                </Button>
                <UncontrolledTooltip target="ViewOptionsTooltip1">
                  View options
                </UncontrolledTooltip>
              </div>
            </div>
            <CardBody className="pb-0">
              <div className="align-box-row">
                <div className="font-weight-bold">
                  <small className="text-black-50 d-block mt-2 mb-2 text-uppercase">
                    New Accounts
                  </small>
                  <span className="font-size-xxl ">586,356</span>
                </div>
                <div className="ml-auto">
                  <div className="bg-first text-center text-white font-size-xl d-50 rounded-circle">
                    <FontAwesomeIcon icon={['far', 'building']} />
                  </div>
                </div>
              </div>
              <div className="mt-1">
                <FontAwesomeIcon
                  icon={['fas', 'arrow-up']}
                  className="text-danger"
                />
                <span className="text-success px-1">15.4%</span>
                <span className="text-black-50">increase this month</span>
              </div>
              <div className="mt-4">
                <Button outline color="primary" className="btn-pill mb-3">
                  <span className="btn-wrapper--label">
                    View complete report
                  </span>
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['fas', 'angle-right']} />
                  </span>
                </Button>
              </div>
            </CardBody>
            <Chart
              options={chart36Options}
              series={chart36Data}
              type="area"
              height={172}
            />
          </Card>
        </Col>
      </Row>

      <Row>
        <Col xl="6">
          <Card className="card-box mb-5">
            <CardBody className="p-0">
              <Row className="mt-4">
                <Col>
                  <div className="text-center">
                    <div>
                      <FontAwesomeIcon
                        icon={['far', 'user']}
                        className="font-size-xxl text-success"
                      />
                    </div>
                    <div className="mt-3 line-height-sm">
                      <b className="font-size-lg">2,345</b>
                      <span className="text-black-50 d-block">users</span>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="text-center">
                    <div>
                      <FontAwesomeIcon
                        icon={['far', 'keyboard']}
                        className="font-size-xxl text-danger"
                      />
                    </div>
                    <div className="mt-3 line-height-sm">
                      <b className="font-size-lg">3,568</b>
                      <span className="text-black-50 d-block">clicks</span>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="text-center">
                    <div>
                      <FontAwesomeIcon
                        icon={['far', 'chart-bar']}
                        className="font-size-xxl text-info"
                      />
                    </div>
                    <div className="mt-3 line-height-sm">
                      <b className="font-size-lg">$9,693</b>
                      <span className="text-black-50 d-block">revenue</span>
                    </div>
                  </div>
                </Col>
              </Row>
              <div className="divider mt-4" />
              <div className="text-center py-4">
                <Button size="sm" color="primary">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['far', 'eye']} />
                  </span>
                  <span className="btn-wrapper--label">Generate reports</span>
                </Button>
              </div>
            </CardBody>
            <div className="card-footer bg-light text-center">
              <div className="pt-4 pr-4 pl-4">
                <Chart
                  options={chart30Options}
                  series={chart30Data}
                  type="line"
                  height={100}
                />
              </div>
            </div>
          </Card>
        </Col>
        <Col xl="6">
          <Card className="card-box mb-5">
            <div className="card-body pb-1">
              <Row>
                <Col>
                  <div className="text-center">
                    <div>
                      <FontAwesomeIcon
                        icon={['far', 'user']}
                        className="font-size-xxl text-success"
                      />
                    </div>
                    <div className="mt-3 line-height-sm">
                      <b className="font-size-lg">2,345</b>
                      <span className="text-black-50 d-block">users</span>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="text-center">
                    <div>
                      <FontAwesomeIcon
                        icon={['far', 'keyboard']}
                        className="font-size-xxl text-danger"
                      />
                    </div>
                    <div className="mt-3 line-height-sm">
                      <b className="font-size-lg">3,568</b>
                      <span className="text-black-50 d-block">clicks</span>
                    </div>
                  </div>
                </Col>
                <Col>
                  <div className="text-center">
                    <div>
                      <FontAwesomeIcon
                        icon={['far', 'chart-bar']}
                        className="font-size-xxl text-info"
                      />
                    </div>
                    <div className="mt-3 line-height-sm">
                      <b className="font-size-lg">$9,693</b>
                      <span className="text-black-50 d-block">revenue</span>
                    </div>
                  </div>
                </Col>
              </Row>
              <div className="pt-4 pr-4 pl-4">
                <Chart
                  options={chart31Options}
                  series={chart31Data}
                  type="line"
                  height={100}
                />
              </div>
            </div>
            <div className="divider" />
            <div className="my-2 text-center">
              <FontAwesomeIcon
                icon={['fas', 'arrow-up']}
                className="text-danger"
              />
              <span className="text-danger px-1">15.4%</span>
              <span className="text-black-50">new sales today</span>
            </div>
            <div className="card-footer bg-light p-4 text-center">
              <Button color="first">
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon icon={['far', 'eye']} />
                </span>
                <span className="btn-wrapper--label">View latest sales</span>
              </Button>
            </div>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
}
