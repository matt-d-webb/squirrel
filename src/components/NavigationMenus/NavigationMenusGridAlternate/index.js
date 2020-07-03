import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Row, Col, Card, Button } from 'reactstrap';

import { Settings, Grid, Users, Layers } from 'react-feather';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Row>
        <Col xl="6">
          <div className="heading-3 text-center">Three column grids</div>
          <Card className="card-box shadow-none rounded-0 border-2 mb-3 mx-3">
            <div className="grid-menu grid-menu-3col">
              <Row className="no-gutters">
                <Col sm="6" xl="4">
                  <Button
                    color="light"
                    outline
                    className="border-0 w-100 btn-transition-none rounded-0 shadow-none py-4 px-1">
                    <FontAwesomeIcon
                      icon={['far', 'comment-dots']}
                      className="h2 d-block mb-2 mx-auto mt-1 text-dark"
                    />
                    <div className="font-weight-bold text-first">Profiles</div>
                    <div className="font-size-md mb-1 text-dark">
                      Clients Details
                    </div>
                  </Button>
                </Col>
                <Col sm="6" xl="4">
                  <Button
                    color="light"
                    outline
                    className="border-0 w-100 btn-transition-none rounded-0 shadow-none py-4 px-1">
                    <FontAwesomeIcon
                      icon={['far', 'keyboard']}
                      className="h2 d-block mb-2 mx-auto mt-1 text-dark"
                    />
                    <div className="font-weight-bold text-first">Accounts</div>
                    <div className="font-size-md mb-1 text-black-50">
                      Statistics
                    </div>
                  </Button>
                </Col>
                <Col sm="6" xl="4">
                  <Button
                    color="light"
                    outline
                    className="border-0 w-100 btn-transition-none rounded-0 shadow-none py-4 px-1">
                    <FontAwesomeIcon
                      icon={['far', 'object-group']}
                      className="h2 d-block mb-2 mx-auto mt-1 text-dark"
                    />
                    <div className="font-weight-bold text-first">Servers</div>
                    <div className="font-size-md mb-1 text-black-50">
                      Uptime Status
                    </div>
                  </Button>
                </Col>
                <Col sm="6" xl="4">
                  <Button
                    color="light"
                    outline
                    className="border-0 w-100 btn-transition-none rounded-0 shadow-none py-4 px-1">
                    <FontAwesomeIcon
                      icon={['far', 'user-circle']}
                      className="h2 d-block mb-2 mx-auto mt-1 text-dark"
                    />
                    <div className="font-weight-bold text-first">
                      Deliveries
                    </div>
                    <div className="font-size-md mb-1 text-black-50">
                      Status Report
                    </div>
                  </Button>
                </Col>
                <Col sm="6" xl="4">
                  <Button
                    color="light"
                    outline
                    className="border-0 w-100 btn-transition-none rounded-0 shadow-none py-4 px-1">
                    <FontAwesomeIcon
                      icon={['far', 'question-circle']}
                      className="h2 d-block mb-2 mx-auto mt-1 text-dark"
                    />
                    <div className="font-weight-bold text-first">Car Fleet</div>
                    <div className="font-size-md mb-1 text-black-50">
                      View Details
                    </div>
                  </Button>
                </Col>
                <Col sm="6" xl="4">
                  <Button
                    color="light"
                    outline
                    className="border-0 w-100 btn-transition-none rounded-0 shadow-none py-4 px-1">
                    <FontAwesomeIcon
                      icon={['far', 'building']}
                      className="h2 d-block mb-2 mx-auto mt-1 text-dark"
                    />
                    <div className="font-weight-bold text-first">Income</div>
                    <div className="font-size-md mb-1 text-black-50">
                      Annual Report
                    </div>
                  </Button>
                </Col>
              </Row>
            </div>
          </Card>
        </Col>
        <Col xl="6">
          <div className="heading-3 text-center">Two column grids</div>
          <Card className="card-box shadow-none rounded-0 border-2 mb-3 mx-3">
            <div className="grid-menu grid-menu-2col">
              <Row className="no-gutters">
                <Col sm="6">
                  <Button
                    outline
                    color="secondary"
                    className="border-0 w-100 btn-transition-none rounded-0 shadow-none py-4 px-1">
                    <FontAwesomeIcon
                      icon={['far', 'bell']}
                      className="h2 d-block mb-2 mx-auto mt-1 text-warning"
                    />
                    <div className="font-weight-bold text-black">Reports</div>
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
                      className="h2 d-block mb-2 mx-auto mt-1 text-warning"
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
                      className="h2 d-block mb-2 mx-auto mt-1 text-warning"
                    />
                    <div className="font-weight-bold text-black">Projects</div>
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
                      className="h2 d-block mb-2 mx-auto mt-1 text-warning"
                    />
                    <div className="font-weight-bold text-black">Tasks</div>
                    <div className="font-size-md mb-1 text-black-50">
                      Pending items
                    </div>
                  </Button>
                </Col>
              </Row>
            </div>
          </Card>
        </Col>
      </Row>
      <div className="divider my-4" />
      <Row>
        <Col xl="6">
          <div className="d-flex flex-wrap">
            <div className="w-50 p-3">
              <Button
                color="primary"
                className="btn-gradient bg-night-sky text-left px-4 py-3 w-100 rounded-lg shadow-none">
                <div>
                  <Settings className="h1 d-block my-2 text-warning" />
                  <div className="font-weight-bold font-size-lg">Reports</div>
                  <div className="font-size-md mb-1 opacity-8">
                    Monthly Stats
                  </div>
                </div>
              </Button>
            </div>
            <div className="w-50 p-3">
              <Button
                color="primary"
                className="btn-gradient bg-midnight-bloom text-left px-4 py-3 w-100 rounded-lg shadow-none">
                <div>
                  <Grid className="h1 d-block my-2 text-success" />
                  <div className="font-weight-bold font-size-lg">
                    Statistics
                  </div>
                  <div className="font-size-md mb-1 opacity-8">
                    Customers stats
                  </div>
                </div>
              </Button>
            </div>
            <div className="w-50 p-3">
              <Button
                color="primary"
                className="btn-gradient bg-vicious-stance text-left px-4 py-3 w-100 rounded-lg shadow-none">
                <div>
                  <Users className="h1 d-block my-2 text-danger" />
                  <div className="font-weight-bold font-size-lg">Projects</div>
                  <div className="font-size-md mb-1 opacity-8">
                    Manage servers
                  </div>
                </div>
              </Button>
            </div>
            <div className="w-50 p-3">
              <Button
                color="primary"
                className="btn-gradient bg-royal text-left px-4 py-3 w-100 rounded-lg shadow-none">
                <div>
                  <Layers className="h1 d-block my-2 text-first" />
                  <div className="font-weight-bold font-size-lg">Tasks</div>
                  <div className="font-size-md mb-1 opacity-8">
                    Pending items
                  </div>
                </div>
              </Button>
            </div>
          </div>
        </Col>
        <Col xl="6">
          <div className="d-flex flex-wrap">
            <div className="w-50 p-3">
              <button className="btn card card-box text-left d-flex justify-content-center px-4 py-3 w-100">
                <div>
                  <Settings className="h1 d-block my-2 text-warning" />
                  <div className="font-weight-bold font-size-lg text-black">
                    Reports
                  </div>
                  <div className="font-size-md mb-1 text-black-50">
                    Monthly Stats
                  </div>
                </div>
              </button>
            </div>
            <div className="w-50 p-3">
              <button className="btn card card-box text-left d-flex justify-content-center px-4 py-3 w-100">
                <div>
                  <Grid className="h1 d-block my-2 text-success" />
                  <div className="font-weight-bold font-size-lg text-black">
                    Statistics
                  </div>
                  <div className="font-size-md mb-1 text-black-50">
                    Customers stats
                  </div>
                </div>
              </button>
            </div>
            <div className="w-50 p-3">
              <button className="btn card card-box text-left d-flex justify-content-center px-4 py-3 w-100">
                <div>
                  <Users className="h1 d-block my-2 text-danger" />
                  <div className="font-weight-bold font-size-lg text-black">
                    Projects
                  </div>
                  <div className="font-size-md mb-1 text-black-50">
                    Manage servers
                  </div>
                </div>
              </button>
            </div>
            <div className="w-50 p-3">
              <button className="btn card card-box text-left d-flex justify-content-center px-4 py-3 w-100">
                <div>
                  <Layers className="h1 d-block my-2 text-first" />
                  <div className="font-weight-bold font-size-lg text-black">
                    Tasks
                  </div>
                  <div className="font-size-md mb-1 text-black-50">
                    Pending items
                  </div>
                </div>
              </button>
            </div>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
}
