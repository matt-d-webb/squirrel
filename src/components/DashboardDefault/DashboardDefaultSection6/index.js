import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Row,
  Col,
  Card,
  Badge,
  ListGroup,
  ListGroupItem,
  UncontrolledTooltip,
  Button
} from 'reactstrap';
import stock1 from '../../../assets/images/stock-photos/stock-1.jpg';
import stock2 from '../../../assets/images/stock-photos/stock-2.jpg';
import stock3 from '../../../assets/images/stock-photos/stock-3.jpg';

import people3 from '../../../assets/images/stock-photos/people-3.jpg';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Row>
        <Col xl="6">
          <Card className="card-box mb-5">
            <div className="card-header bg-white">
              <div className="card-header--title">
                <small className="d-block text-uppercase mt-1">Blogs</small>
                <b>Latest articles</b>
              </div>
              <div className="card-header--actions">
                <Button
                  tag="a"
                  href="#/"
                  onClick={e => e.preventDefault()}
                  size="sm"
                  color="primary">
                  Reports
                </Button>
              </div>
            </div>
            <div className="scroll-area-sm shadow-overflow">
              <PerfectScrollbar>
                <ListGroup flush>
                  <ListGroupItem className="py-4">
                    <div className="d-flex flex-column flex-sm-row align-items-start">
                      <div>
                        <Card className="card-transparent mb-3 mb-sm-0">
                          <a
                            href="#/"
                            onClick={e => e.preventDefault()}
                            className="card-img-wrapper rounded">
                            <div className="img-wrapper-overlay">
                              <div className="overlay-btn-wrapper">
                                <Button
                                  size="sm"
                                  outline
                                  color="secondary"
                                  className="btn-pill border-0 shadow-none pl-2 pr-2 mx-auto d-flex align-items-center">
                                  <FontAwesomeIcon
                                    icon={['fas', 'plus-circle']}
                                    className="font-size-lg"
                                  />
                                </Button>
                              </div>
                            </div>
                            <img
                              alt="..."
                              className="card-img-top rounded"
                              src={stock1}
                              style={{ width: 160 }}
                            />
                          </a>
                        </Card>
                      </div>
                      <div className="pl-0 pl-sm-4">
                        <div className="mb-1">
                          <a
                            href="#/"
                            onClick={e => e.preventDefault()}
                            className="font-size-lg">
                            Meeting minutes
                          </a>
                        </div>
                        <div>
                          <Badge color="neutral-info" className="text-info">
                            Articles
                          </Badge>
                          <Badge
                            color="neutral-danger"
                            className="text-danger ml-2">
                            Posts
                          </Badge>
                        </div>
                        <p className="mb-0 mt-2 text-black-50">
                          A wonderful serenity has taken possession of my entire
                          soul, like these sweet mornings ...
                        </p>
                      </div>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem className="py-4">
                    <div className="d-flex flex-column flex-sm-row align-items-start">
                      <div>
                        <Card className="card-transparent mb-3 mb-sm-0">
                          <a
                            href="#/"
                            onClick={e => e.preventDefault()}
                            className="card-img-wrapper rounded">
                            <div className="img-wrapper-overlay">
                              <div className="overlay-btn-wrapper">
                                <Button
                                  size="sm"
                                  outline
                                  color="secondary"
                                  className="btn-pill border-0 shadow-none pl-2 pr-2 mx-auto d-flex align-items-center">
                                  <FontAwesomeIcon
                                    icon={['fas', 'plus-circle']}
                                    className="font-size-lg"
                                  />
                                </Button>
                              </div>
                            </div>
                            <img
                              alt="..."
                              className="card-img-top rounded"
                              src={stock2}
                              style={{ width: 160 }}
                            />
                          </a>
                        </Card>
                      </div>
                      <div className="pl-0 pl-sm-4">
                        <div className="mb-1">
                          <a
                            href="#/"
                            onClick={e => e.preventDefault()}
                            className="font-size-lg">
                            Sales reports for this week
                          </a>
                        </div>
                        <div>
                          <Badge
                            href="#/"
                            onClick={e => e.preventDefault()}
                            color="neutral-success"
                            className="text-success">
                            Blog
                          </Badge>
                        </div>
                        <p className="mt-2 text-black-50">
                          Who formed us in his own image, and the breath ...
                        </p>
                      </div>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem className="py-4">
                    <div className="d-flex flex-column flex-sm-row align-items-start">
                      <div>
                        <Card className="card-transparent mb-3 mb-sm-0">
                          <a
                            href="#/"
                            onClick={e => e.preventDefault()}
                            className="card-img-wrapper rounded">
                            <div className="img-wrapper-overlay">
                              <div className="overlay-btn-wrapper">
                                <Button
                                  size="sm"
                                  outline
                                  color="secondary"
                                  className="btn-pill border-0 shadow-none pl-2 pr-2 mx-auto d-flex align-items-center">
                                  <FontAwesomeIcon
                                    icon={['fas', 'plus-circle']}
                                    className="font-size-lg"
                                  />
                                </Button>
                              </div>
                            </div>
                            <img
                              alt="..."
                              className="card-img-top rounded"
                              src={stock3}
                              style={{ width: 160 }}
                            />
                          </a>
                        </Card>
                      </div>
                      <div className="pl-0 pl-sm-4">
                        <div className="mb-1">
                          <a
                            href="#/"
                            onClick={e => e.preventDefault()}
                            className="font-size-lg">
                            Marketing strategy
                          </a>
                        </div>
                        <div>
                          <Badge
                            color="neutral-warning"
                            className="text-warning">
                            SEO Stuff
                          </Badge>
                        </div>
                        <p className="mb-0 mt-2 text-black-50">
                          If several languages coalesce, the grammar of the
                          resulting language is more simple and regular than
                          that of the individual languages.
                        </p>
                      </div>
                    </div>
                  </ListGroupItem>
                </ListGroup>
              </PerfectScrollbar>
            </div>
            <div className="bg-secondary card-footer text-center p-4">
              <Button size="sm" color="facebook" id="FacebookBtnTooltip123">
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon
                    icon={['fab', 'facebook']}
                    className="font-size-lg"
                  />
                </span>
              </Button>
              <UncontrolledTooltip target="FacebookBtnTooltip123">
                Facebook
              </UncontrolledTooltip>
              <Button
                size="sm"
                color="dribbble"
                className="mr-2 ml-2"
                id="btnDribbbleTooltip123">
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon
                    icon={['fab', 'dribbble']}
                    className="font-size-lg"
                  />
                </span>
              </Button>
              <UncontrolledTooltip target="btnDribbbleTooltip123">
                Dribbble
              </UncontrolledTooltip>
              <Button size="sm" color="twitter" id="btnTwitterTooltip123">
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon
                    icon={['fab', 'twitter']}
                    className="font-size-lg"
                  />
                </span>
              </Button>
              <UncontrolledTooltip target="btnTwitterTooltip123">
                Twitter
              </UncontrolledTooltip>
            </div>
          </Card>
        </Col>
        <Col xl="6">
          <Card className="card-box mb-5">
            <div className="card-header bg-white pr-1">
              <div className="card-header--title">
                <small className="d-block text-uppercase mt-1">Targets</small>
                <b>Monthly Stats</b>
              </div>
              <div className="card-header--actions">
                <Button
                  active
                  tag="a"
                  href="#/"
                  onClick={e => e.preventDefault()}
                  size="sm"
                  color="neutral-primary"
                  className="mr-1">
                  Today
                </Button>
                <Button
                  tag="a"
                  href="#/"
                  onClick={e => e.preventDefault()}
                  size="sm"
                  color="link"
                  className="btn-link-primary">
                  Last week
                </Button>
              </div>
            </div>
            <div className="scroll-area-sm shadow-overflow">
              <PerfectScrollbar>
                <ListGroup flush>
                  <ListGroupItem className="py-4">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <div>
                          <Card className="card-transparent mb-3 mb-sm-0">
                            <a
                              href="#/"
                              onClick={e => e.preventDefault()}
                              className="card-img-wrapper card-box-hover-rise rounded-sm">
                              <img
                                alt="..."
                                className="card-img-top rounded-sm"
                                src={stock1}
                                style={{ width: 140 }}
                              />
                            </a>
                          </Card>
                        </div>
                        <div className="pl-0 pl-sm-4">
                          <b className="font-weight-bold font-size-lg text-black">
                            Meeting minutes
                          </b>
                          <p className="text-black-50 mb-0">
                            Learn more about these example boxes.
                          </p>
                          <small className="text-black-50 pt-1 d-block">
                            Created on:{' '}
                            <b className="text-first">23 Feb 2021</b>
                          </small>
                        </div>
                      </div>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem className="py-4">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <div>
                          <Card className="card-transparent mb-3 mb-sm-0">
                            <a
                              href="#/"
                              onClick={e => e.preventDefault()}
                              className="card-img-wrapper card-box-hover-rise rounded-sm">
                              <img
                                alt="..."
                                className="card-img-top rounded-sm"
                                src={stock2}
                                style={{ width: 140 }}
                              />
                            </a>
                          </Card>
                        </div>
                        <div className="pl-0 pl-sm-4">
                          <b className="font-weight-bold font-size-lg text-black">
                            Sales reports for this week
                          </b>
                          <p className="text-black-50 mb-0">
                            The passage experienced a surge in popularity during
                            the 1960s.
                          </p>
                          <small className="text-black-50 pt-1 d-block">
                            Created on:{' '}
                            <b className="text-first">24 Feb 2021</b>
                          </small>
                        </div>
                      </div>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem className="py-4">
                    <div className="d-flex justify-content-between">
                      <div className="d-flex align-items-center">
                        <div>
                          <Card className="card-transparent mb-3 mb-sm-0">
                            <a
                              href="#/"
                              onClick={e => e.preventDefault()}
                              className="card-img-wrapper card-box-hover-rise rounded-sm">
                              <img
                                alt="..."
                                className="card-img-top rounded-sm"
                                src={people3}
                                style={{ width: 140 }}
                              />
                            </a>
                          </Card>
                        </div>
                        <div className="pl-0 pl-sm-4">
                          <b className="font-weight-bold font-size-lg text-black">
                            SEO reports meeting
                          </b>
                          <p className="text-black-50 mb-0">
                            To an English person, it will seem like simplified
                            English, as a skeptical Cambridge.
                          </p>
                          <small className="text-black-50 pt-1 d-block">
                            Created on:{' '}
                            <b className="text-first">25 Feb 2021</b>
                          </small>
                        </div>
                      </div>
                    </div>
                  </ListGroupItem>
                </ListGroup>
              </PerfectScrollbar>
            </div>
            <div className="card-footer d-flex p-4 justify-content-between">
              <Button size="sm" color="first">
                View details
              </Button>
              <Button size="sm" color="danger">
                <span>Delete</span>
              </Button>
            </div>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
}
