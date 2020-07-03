import React, { Fragment } from 'react';

import {
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem,
  UncontrolledTooltip,
  Progress
} from 'reactstrap';

import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../../assets/images/avatars/avatar2.jpg';

import avatar5 from '../../../assets/images/avatars/avatar5.jpg';

import avatar7 from '../../../assets/images/avatars/avatar7.jpg';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Row>
        <Col xl="6">
          <Card className="card-box mb-5">
            <ListGroup flush>
              <ListGroupItem className="py-2">
                <div className="align-box-row mb-1">
                  <div>
                    <div className="font-weight-bold">Orders</div>
                  </div>
                  <div className="ml-auto">
                    <div className="font-size-xl font-weight-bold text-success">
                      348
                    </div>
                  </div>
                </div>
                <Progress
                  className="progress-animated-alt"
                  color="success"
                  value="34">
                  34%
                </Progress>
                <div className="align-box-row progress-bar--label mt-1 text-muted">
                  <small className="text-dark">0</small>
                  <div className="ml-auto">100%</div>
                </div>
              </ListGroupItem>
              <ListGroupItem className="py-2">
                <div className="align-box-row mb-1">
                  <div>
                    <div className="font-weight-bold">Sales</div>
                  </div>
                  <div className="ml-auto">
                    <div className="font-size-xl font-weight-bold text-danger">
                      <small>$</small>
                      2.3M
                    </div>
                  </div>
                </div>
                <Progress
                  className="progress-animated-alt"
                  color="danger"
                  value="39">
                  39%
                </Progress>
                <div className="align-box-row progress-bar--label mt-1 text-muted">
                  <small className="text-dark">0</small>
                  <div className="ml-auto">100%</div>
                </div>
              </ListGroupItem>
              <ListGroupItem className="py-2">
                <div className="align-box-row mb-1">
                  <div>
                    <div className="font-weight-bold">Users</div>
                  </div>
                  <div className="ml-auto">
                    <div className="font-size-xl font-weight-bold text-info">
                      <small>#</small>
                      87
                    </div>
                  </div>
                </div>
                <Progress
                  className="progress-animated-alt"
                  color="info"
                  value="51">
                  51%
                </Progress>
                <div className="align-box-row progress-bar--label mt-1 text-muted">
                  <small className="text-dark">0</small>
                  <div className="ml-auto">100%</div>
                </div>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
        <Col xl="6">
          <Card className="card-box mb-5">
            <ListGroup flush>
              <ListGroupItem>
                <div className="align-box-row">
                  <div className="mr-4">
                    <a
                      href="#/"
                      onClick={e => e.preventDefault()}
                      className="avatar-icon-wrapper avatar-icon-lg m-0"
                      id="ViewDetailsTooltip20">
                      <div className="dot-badge" />
                      <div className="avatar-icon">
                        <img alt="..." src={avatar7} />
                      </div>
                    </a>
                    <UncontrolledTooltip
                      target="ViewDetailsTooltip20"
                      placement="right">
                      View details
                    </UncontrolledTooltip>
                  </div>
                  <div className="flex-grow-1">
                    <Progress
                      className="progress-bar-rounded progress-animated-alt"
                      color="success"
                      value="61">
                      61%
                    </Progress>
                  </div>
                  <div className="line-height-sm text-center ml-4">
                    <small className="text-black-50 d-block text-uppercase">
                      Totals
                    </small>
                    <b className="font-size-lg text-success">
                      <small className="pr-1 text-black-50">$</small>
                      1,628
                    </b>
                  </div>
                </div>
              </ListGroupItem>
              <ListGroupItem>
                <div className="align-box-row">
                  <div className="mr-4">
                    <a
                      href="#/"
                      onClick={e => e.preventDefault()}
                      className="avatar-icon-wrapper avatar-icon-lg m-0"
                      id="ViewDetailsTooltip8">
                      <div className="dot-badge" />
                      <div className="avatar-icon">
                        <img alt="..." src={avatar5} />
                      </div>
                    </a>
                    <UncontrolledTooltip
                      target="ViewDetailsTooltip8"
                      placement="right">
                      View details
                    </UncontrolledTooltip>
                  </div>
                  <div className="flex-grow-1">
                    <Progress
                      className="progress-animated-alt progress-bar-rounded"
                      color="info"
                      value="44">
                      44%
                    </Progress>
                  </div>
                  <div className="line-height-sm text-center ml-4">
                    <small className="text-black-50 d-block text-uppercase">
                      Totals
                    </small>
                    <b className="font-size-lg text-info">
                      <small className="text-black-50 pr-1">$</small>
                      7,389
                    </b>
                  </div>
                </div>
              </ListGroupItem>
              <ListGroupItem>
                <div className="align-box-row">
                  <div className="mr-4">
                    <a
                      href="#/"
                      onClick={e => e.preventDefault()}
                      className="avatar-icon-wrapper avatar-icon-lg m-0"
                      id="ViewDetailsTooltip11">
                      <div className="dot-badge" />
                      <div className="avatar-icon">
                        <img alt="..." src={avatar1} />
                      </div>
                    </a>
                    <UncontrolledTooltip
                      target="ViewDetailsTooltip11"
                      placement="right">
                      View details
                    </UncontrolledTooltip>
                  </div>
                  <div className="flex-grow-1">
                    <Progress
                      className="progress-bar-rounded progress-animated-alt"
                      color="danger"
                      value="29">
                      29%
                    </Progress>
                  </div>
                  <div className="line-height-sm text-center ml-4">
                    <small className="text-black-50 d-block text-uppercase">
                      Totals
                    </small>
                    <b className="font-size-lg text-danger">
                      <small className="text-black-50 pr-1">$</small>
                      8,493
                    </b>
                  </div>
                </div>
              </ListGroupItem>
              <ListGroupItem>
                <div className="align-box-row">
                  <div className="mr-4">
                    <a
                      href="#/"
                      onClick={e => e.preventDefault()}
                      className="avatar-icon-wrapper avatar-icon-lg m-0"
                      id="ViewDetailsTooltip27">
                      <div className="dot-badge" />
                      <div className="avatar-icon">
                        <img alt="..." src={avatar2} />
                      </div>
                    </a>
                    <UncontrolledTooltip
                      target="ViewDetailsTooltip27"
                      placement="right">
                      View details
                    </UncontrolledTooltip>
                  </div>
                  <div className="flex-grow-1">
                    <Progress
                      className="progress-bar-rounded progress-animated-alt"
                      color="warning"
                      value="38">
                      38%
                    </Progress>
                  </div>
                  <div className="line-height-sm text-center ml-4">
                    <small className="text-black-50 d-block text-uppercase">
                      Totals
                    </small>
                    <b className="font-size-lg text-warning">
                      <small className="text-black-50 pr-1">$</small>
                      2,594
                    </b>
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
