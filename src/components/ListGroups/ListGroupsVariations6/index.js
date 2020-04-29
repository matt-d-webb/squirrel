import React, { Fragment } from 'react';

import {
  Row,
  Col,
  Card,
  Badge,
  ListGroup,
  ListGroupItem,
  Button,
  Progress
} from 'reactstrap';

import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../../assets/images/avatars/avatar2.jpg';
import avatar3 from '../../../assets/images/avatars/avatar3.jpg';
import avatar4 from '../../../assets/images/avatars/avatar4.jpg';
import avatar5 from '../../../assets/images/avatars/avatar5.jpg';
import avatar6 from '../../../assets/images/avatars/avatar6.jpg';

import CountUp from 'react-countup';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Row>
        <Col xl="6">
          <Card className="card-box mb-5">
            <ListGroup flush>
              <div className="list-group-item">
                <div className="d-flex align-items-center mb-3">
                  <div className="avatar-icon-wrapper rounded-circle mr-3">
                    <div className="d-block p-0 avatar-icon-wrapper m-0 d-70">
                      <div className="rounded-circle overflow-hidden">
                        <img alt="..." className="img-fluid" src={avatar6} />
                      </div>
                    </div>
                  </div>
                  <div className="w-100">
                    <a
                      href="#/"
                      onClick={e => e.preventDefault()}
                      className="font-weight-bold font-size-lg"
                      title="...">
                      Kate Winchester
                    </a>
                    <span className="text-black-50 d-block">
                      Freelance Designer, Mutual Inc.
                    </span>
                    <div className="d-flex align-items-center pt-1">
                      <Progress
                        className="progress-xs progress-bar-rounded flex-grow-1 progress-animated-alt"
                        color="danger"
                        value="56"
                      />
                      <div className="font-weight-bold text-black-50 pl-2">
                        56%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="list-group-item">
                <div className="d-flex align-items-center mb-3">
                  <div
                    className="avatar-icon-wrapper rounded-circle mr-3"
                    title="Online">
                    <Badge
                      color="success"
                      className="badge-position badge-position--bottom-center badge-circle">
                      Online
                    </Badge>
                    <div className="rounded-circle overflow-hidden d-70 bg-neutral-danger font-size-lg text-center font-weight-bold text-danger d-flex justify-content-center flex-column">
                      <span>KA</span>
                    </div>
                  </div>
                  <div className="w-100">
                    <a
                      href="#/"
                      onClick={e => e.preventDefault()}
                      className="font-weight-bold font-size-lg"
                      title="...">
                      Kris Alexander
                    </a>
                    <span className="text-black-50 d-block">
                      Project Manager, Apple Inc.
                    </span>
                    <div className="d-flex align-items-center pt-1">
                      <Progress
                        animated
                        className="progress-xs flex-grow-1 progress-bar-rounded"
                        color="warning"
                        value="42"
                      />
                      <div className="font-weight-bold text-black-50 pl-2">
                        42%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="list-group-item">
                <div className="d-flex align-items-center mb-3">
                  <div className="avatar-icon-wrapper rounded-circle mr-3">
                    <div className="d-block p-0 avatar-icon-wrapper m-0 d-70">
                      <div className="rounded-circle overflow-hidden">
                        <img alt="..." className="img-fluid" src={avatar2} />
                      </div>
                    </div>
                  </div>
                  <div className="w-100">
                    <a
                      href="#/"
                      onClick={e => e.preventDefault()}
                      className="font-weight-bold font-size-lg"
                      title="...">
                      Matteo Mcphee
                    </a>
                    <span className="text-black-50 d-block">
                      Frontend Developer, Stripe Inc.
                    </span>
                    <div className="d-flex align-items-center pt-1">
                      <Progress
                        animated
                        className="progress-xs flex-grow-1 progress-bar-rounded"
                        color="first"
                        value="31"
                      />
                      <div className="font-weight-bold text-black-50 pl-2">
                        31%
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ListGroup>
          </Card>
        </Col>
        <Col xl="6">
          <Card className="card-box mb-5">
            <ListGroup flush>
              <ListGroupItem className="py-3">
                <Row className="no-gutters">
                  <Col xl="6" md="12" className="d-flex align-items-center">
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
                          Shanelle Wynn
                        </a>
                        <span className="text-black-50 d-block">
                          UI Engineer, Apple Inc.
                        </span>
                      </div>
                    </div>
                  </Col>
                  <Col
                    xl="6"
                    md="12"
                    className="pt-1 pt-xl-0 d-flex align-items-center">
                    <div className="align-box-row flex-grow-1">
                      <div className="d-flex flex-column flex-grow-1">
                        <div className="d-flex justify-content-between text-dark">
                          <div className="ml-auto">
                            <div className="font-weight-bold">
                              <CountUp
                                start={0}
                                end={583}
                                duration={4}
                                separator=""
                                decimals={0}
                                decimal=","
                                prefix=""
                                suffix=""
                              />
                            </div>
                          </div>
                        </div>
                        <Progress
                          animated
                          className="progress-sm progress-bar-rounded"
                          color="primary"
                          value="52"
                        />
                      </div>
                      <Button
                        size="sm"
                        color="neutral-primary"
                        className="ml-4">
                        View
                      </Button>
                    </div>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem className="py-3">
                <Row className="no-gutters">
                  <Col xl="6" md="12" className="d-flex align-items-center">
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
                          Akeem Griffith
                        </a>
                        <span className="text-black-50 d-block">
                          Manager, Google Inc.
                        </span>
                      </div>
                    </div>
                  </Col>
                  <Col
                    xl="6"
                    md="12"
                    className="pt-1 pt-xl-0 d-flex align-items-center">
                    <div className="align-box-row flex-grow-1">
                      <div className="d-flex flex-column flex-grow-1">
                        <div className="d-flex justify-content-between text-dark">
                          <div className="ml-auto">
                            <div className="font-weight-bold">
                              <CountUp
                                start={0}
                                end={340}
                                duration={4}
                                separator=""
                                decimals={0}
                                decimal=","
                                prefix=""
                                suffix=""
                              />
                            </div>
                          </div>
                        </div>
                        <Progress
                          animated
                          className="progress-bar-rounded progress-sm"
                          color="danger"
                          value="38"
                        />
                      </div>
                      <Button size="sm" color="neutral-danger" className="ml-4">
                        View
                      </Button>
                    </div>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem className="py-3">
                <Row className="no-gutters">
                  <Col xl="6" md="12" className="d-flex align-items-center">
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
                          Abigayle Hicks
                        </a>
                        <span className="text-black-50 d-block">
                          Project Manager, Spotify
                        </span>
                      </div>
                    </div>
                  </Col>
                  <Col
                    xl="6"
                    md="12"
                    className="pt-1 pt-xl-0 d-flex align-items-center">
                    <div className="align-box-row flex-grow-1">
                      <div className="d-flex flex-column flex-grow-1">
                        <div className="d-flex justify-content-between text-dark">
                          <div className="ml-auto">
                            <div className="font-weight-bold">
                              <CountUp
                                start={0}
                                end={473}
                                duration={4}
                                separator=""
                                decimals={0}
                                decimal=","
                                prefix=""
                                suffix=""
                              />
                            </div>
                          </div>
                        </div>
                        <Progress
                          animated
                          className="progress-bar-rounded progress-sm"
                          color="warning"
                          value="34"
                        />
                      </div>
                      <Button
                        size="sm"
                        color="neutral-warning"
                        className="ml-4">
                        View
                      </Button>
                    </div>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem className="py-3">
                <Row className="no-gutters">
                  <Col xl="6" md="12" className="d-flex align-items-center">
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
                          Freya Nieves
                        </a>
                        <span className="text-black-50 d-block">
                          Superviser, Walmart
                        </span>
                      </div>
                    </div>
                  </Col>
                  <Col
                    xl="6"
                    md="12"
                    className="pt-1 pt-xl-0 d-flex align-items-center">
                    <div className="align-box-row flex-grow-1">
                      <div className="d-flex flex-column flex-grow-1">
                        <div className="d-flex justify-content-between text-dark">
                          <div className="ml-auto">
                            <div className="font-weight-bold">
                              <CountUp
                                start={0}
                                end={239}
                                duration={6}
                                deplay={2}
                                separator=""
                                decimals={0}
                                decimal=","
                              />
                            </div>
                          </div>
                        </div>
                        <Progress
                          animated
                          className="progress-bar-rounded progress-sm"
                          color="success"
                          value="51"
                        />
                      </div>
                      <Button
                        size="sm"
                        color="neutral-success"
                        className="ml-4">
                        View
                      </Button>
                    </div>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem className="py-3">
                <Row className="no-gutters">
                  <Col xl="6" md="12" className="d-flex align-items-center">
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
                          Elina Gould
                        </a>
                        <span className="text-black-50 d-block">
                          Java Developer, Netflix
                        </span>
                      </div>
                    </div>
                  </Col>
                  <Col
                    xl="6"
                    md="12"
                    className="pt-1 pt-xl-0 d-flex align-items-center">
                    <div className="align-box-row flex-grow-1">
                      <div className="d-flex flex-column flex-grow-1">
                        <div className="d-flex justify-content-between text-dark">
                          <div className="ml-auto">
                            <span className="font-weight-bold">
                              <CountUp
                                start={0}
                                end={345}
                                duration={6}
                                deplay={2}
                                separator=""
                                decimals={0}
                                decimal=","
                              />
                            </span>
                          </div>
                        </div>
                        <Progress
                          animated
                          className="progress-bar-rounded progress-sm"
                          color="first"
                          value="63"
                        />
                      </div>
                      <Button size="sm" color="neutral-first" className="ml-4">
                        View
                      </Button>
                    </div>
                  </Col>
                </Row>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
}
