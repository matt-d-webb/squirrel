import React, { Fragment } from 'react';

import {
  Row,
  Col,
  Card,
  Badge,
  Nav,
  NavItem,
  NavLink,
  Button
} from 'reactstrap';

import svgImage1 from '../../../assets/images/illustrations/business_plan.svg';

import svgImage13 from '../../../assets/images/illustrations/businesswoman.svg';
import svgImage14 from '../../../assets/images/illustrations/powerful.svg';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <div className="bg-royal py-3 py-xl-5">
        <div className="container py-3 py-xl-5">
          <Card className="modal-content">
            <div className="card-header bg-light d-flex justify-content-center">
              <div className="text-center my-4">
                <h1 className="display-4 text-black mb-2 font-weight-bold">
                  Plans & pricing
                </h1>
                <p className="font-size-lg mb-1 text-black-50">
                  Indignation and dislike men who are so beguiled and
                  demoralized.
                </p>
              </div>
            </div>
            <div className="card-body p-3">
              <Nav className="my-2 nav-line nav-line-alt justify-content-center">
                <NavItem>
                  <NavLink href="#/" onClick={e => e.preventDefault()} active>
                    Monthly plans
                    <div className="divider" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#/" onClick={e => e.preventDefault()}>
                    Yearly payments
                    <div className="divider" />
                  </NavLink>
                </NavItem>
              </Nav>
              <div className="container-fluid">
                <Row>
                  <Col xl="4">
                    <div className="divider-v divider-v-lg" />
                    <div className="py-3">
                      <div className="feature-box text-center mt-2 mb-5">
                        <img
                          src={svgImage1}
                          className="w-50 mx-auto d-block img-fluid"
                          alt="..."
                        />
                        <h3 className="font-size-xxl font-weight-bold mt-4">
                          Standard
                        </h3>
                        <p className="text-black-50 mb-4">
                          But I must explain to you how all this mistaken.
                        </p>
                        <Button
                          tag="a"
                          href="#/"
                          onClick={e => e.preventDefault()}
                          outline
                          color="first"
                          title="Learn more">
                          <span>Purchase now</span>
                        </Button>
                      </div>
                      <div className="divider my-4" />
                      <ul className="list-unstyled text-left font-weight-bold font-size-sm">
                        <li className="px-4 py-2">
                          <Badge
                            color="success"
                            className="badge-circle-inner mr-2">
                            Success
                          </Badge>
                          Unlimited Tasks
                        </li>
                        <li className="px-4 py-2">
                          <Badge
                            color="success"
                            className="badge-circle-inner mr-2">
                            Success
                          </Badge>
                          Unlimited Teams
                        </li>
                        <li className="px-4 py-2">
                          <Badge
                            color="success"
                            className="badge-circle-inner mr-2">
                            Success
                          </Badge>
                          All Integrations
                        </li>
                        <li className="px-4 py-2 text-black-50">
                          <Badge
                            color="danger"
                            className="badge-circle-inner mr-2">
                            Danger
                          </Badge>
                          Premium support
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col xl="4">
                    <div className="divider-v divider-v-lg" />
                    <div className="py-3">
                      <div className="feature-box text-center mt-2 mb-5">
                        <img
                          src={svgImage13}
                          className="w-50 mx-auto d-block img-fluid"
                          alt="..."
                        />
                        <h3 className="font-size-xxl font-weight-bold mt-4">
                          Business
                        </h3>
                        <p className="text-black-50 mb-4">
                          But I must explain to you how all this mistaken.
                        </p>
                        <Button
                          href="#/"
                          onClick={e => e.preventDefault()}
                          color="first"
                          title="Learn more">
                          <span>Purchase now</span>
                        </Button>
                      </div>
                      <div className="divider my-4" />
                      <ul className="list-unstyled text-left font-weight-bold font-size-sm">
                        <li className="px-4 py-2">
                          <Badge
                            color="success"
                            className="badge-circle-inner mr-2">
                            Success
                          </Badge>
                          Unlimited Tasks
                        </li>
                        <li className="px-4 py-2">
                          <Badge
                            color="success"
                            className="badge-circle-inner mr-2">
                            Success
                          </Badge>
                          Unlimited Teams
                        </li>
                        <li className="px-4 py-2">
                          <Badge
                            color="success"
                            className="badge-circle-inner mr-2">
                            Success
                          </Badge>
                          All Integrations
                        </li>
                        <li className="px-4 py-2 text-black-50">
                          <Badge
                            color="danger"
                            className="badge-circle-inner mr-2">
                            Danger
                          </Badge>
                          Premium support
                        </li>
                      </ul>
                    </div>
                  </Col>
                  <Col xl="4">
                    <div className="py-3">
                      <div className="feature-box text-center mt-2 mb-5">
                        <img
                          src={svgImage14}
                          className="w-50 mx-auto d-block img-fluid"
                          alt="..."
                        />
                        <h3 className="font-size-xxl font-weight-bold mt-4">
                          Enterprise
                        </h3>
                        <p className="text-black-50 mb-4">
                          But I must explain to you how all this mistaken.
                        </p>
                        <Button
                          tag="a"
                          href="#/"
                          onClick={e => e.preventDefault()}
                          outline
                          color="first"
                          title="Learn more">
                          <span>Purchase now</span>
                        </Button>
                      </div>
                      <div className="divider my-4" />
                      <ul className="list-unstyled text-left font-weight-bold font-size-sm">
                        <li className="px-4 py-2">
                          <Badge
                            color="success"
                            className="badge-circle-inner mr-2">
                            Success
                          </Badge>
                          Unlimited Tasks
                        </li>
                        <li className="px-4 py-2">
                          <Badge
                            color="success"
                            className="badge-circle-inner mr-2">
                            Success
                          </Badge>
                          Unlimited Teams
                        </li>
                        <li className="px-4 py-2">
                          <Badge
                            color="success"
                            className="badge-circle-inner mr-2">
                            Success
                          </Badge>
                          All Integrations
                        </li>
                        <li className="px-4 py-2 text-black-50">
                          <Badge
                            color="danger"
                            className="badge-circle-inner mr-2">
                            Danger
                          </Badge>
                          Premium support
                        </li>
                      </ul>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Fragment>
  );
}
