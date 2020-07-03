import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Row,
  Col,
  Card,
  Badge,
  ListGroup,
  ListGroupItem,
  Button
} from 'reactstrap';
import stock1 from '../../../assets/images/stock-photos/stock-1.jpg';
import stock2 from '../../../assets/images/stock-photos/stock-2.jpg';
import stock3 from '../../../assets/images/stock-photos/stock-3.jpg';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Row>
        <Col xl="6">
          <Card className="card-box mb-5">
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
            </ListGroup>
          </Card>
        </Col>
        <Col xl="6">
          <Card className="card-box mb-5">
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
                        Created on: <b className="text-first">23 Feb 2021</b>
                      </small>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="text-right pr-3">
                      <span className="font-weight-bold font-size-lg">583</span>
                      <span className="text-black-50 d-block">customers</span>
                    </div>
                    <div className="text-right pl-3">
                      <span className="font-weight-bold font-size-lg">
                        12,349
                      </span>
                      <span className="text-black-50 d-block">visits</span>
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
                        The passage experienced a surge in popularity during the
                        1960s.
                      </p>
                      <small className="text-black-50 pt-1 d-block">
                        Created on: <b className="text-first">24 Feb 2021</b>
                      </small>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="text-right pr-3 pl-3">
                      <span className="font-weight-bold font-size-lg text-danger">
                        345
                      </span>
                      <span className="text-black-50 d-block">reports</span>
                    </div>
                    <div className="text-right pl-3">
                      <span className="font-weight-bold font-size-lg">
                        1,456
                      </span>
                      <span className="text-black-50 d-block">customers</span>
                    </div>
                  </div>
                </div>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
}
