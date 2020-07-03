import React, { Fragment, useState } from 'react';

import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Row,
  Col,
  CardBody,
  Card,
  CustomInput,
  FormGroup,
  Input,
  Badge,
  UncontrolledTooltip,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Button
} from 'reactstrap';

import hero9 from '../../../assets/images/hero-bg/hero-9.jpg';

const LivePreviewExample = () => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <Fragment>
      <div className="app-wrapper min-vh-100 bg-white">
        <div className="app-main min-vh-100">
          <div className="app-content p-0">
            <div className="app-inner-content-layout--main">
              <div className="flex-grow-1 w-100 d-flex align-items-center">
                <div className="bg-composed-wrapper--content">
                  <Row className="min-vh-100 no-gutters">
                    <Col lg="5" className="order-2 order-lg-1 d-flex">
                      <div className="hero-wrapper w-100 bg-composed-wrapper bg-plum-plate min-vh-lg-100">
                        <div className="flex-grow-1 w-100 d-flex align-items-center">
                          <div
                            className="bg-composed-wrapper--image"
                            style={{ backgroundImage: 'url(' + hero9 + ')' }}
                          />
                          <div className="bg-composed-wrapper--bg bg-premium-dark opacity-5" />
                          <div className="bg-composed-wrapper--content p-5">
                            <div className="d-flex align-items-center">
                              <Badge
                                pill
                                color="second"
                                className="px-4 h-auto py-1">
                                Register page
                              </Badge>
                              <span
                                className="text-white-50 pl-3"
                                id="DetailsTooltip1">
                                <FontAwesomeIcon
                                  icon={['far', 'question-circle']}
                                />
                              </span>
                              <UncontrolledTooltip
                                target="DetailsTooltip1"
                                placement="right"
                                container="body">
                                Create your own register or login pages using
                                the included elements.
                              </UncontrolledTooltip>
                            </div>
                            <div className="text-white mt-3">
                              <h1 className="display-4 my-3 font-weight-bold">
                                Why should you create an account?
                              </h1>
                              <p className="font-size-md mb-0 text-white-50">
                                A free hour, when our power of choice is
                                untrammelled and when nothing prevents.
                              </p>
                              <div className="divider border-2 my-5 border-light opacity-2 rounded w-25" />
                              <div>
                                <Button
                                  tag={Link}
                                  size="lg"
                                  color="warning"
                                  to="/dashboard">
                                  <span className="btn-wrapper--icon">
                                    <FontAwesomeIcon
                                      icon={['fas', 'arrow-left']}
                                    />
                                  </span>
                                  <span className="btn-wrapper--label">
                                    Back to dashboard
                                  </span>
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="hero-footer pb-4">
                          <Nav pills className="nav-neutral-secondary">
                            <NavItem>
                              <NavLink
                                href="#/"
                                onClick={e => e.preventDefault()}
                                className="font-size-lg text-white-50"
                                id="FacebookTooltipExample7">
                                <FontAwesomeIcon icon={['fab', 'facebook']} />
                              </NavLink>
                              <UncontrolledTooltip
                                target="FacebookTooltipExample7"
                                container="body">
                                Facebook
                              </UncontrolledTooltip>
                            </NavItem>
                            <NavItem>
                              <NavLink
                                href="#/"
                                onClick={e => e.preventDefault()}
                                className="font-size-lg text-white-50"
                                id="btnTwitterTooltip">
                                <FontAwesomeIcon icon={['fab', 'twitter']} />
                              </NavLink>
                              <UncontrolledTooltip target="btnTwitterTooltip">
                                Twitter
                              </UncontrolledTooltip>
                            </NavItem>
                            <NavItem>
                              <NavLink
                                href="#/"
                                onClick={e => e.preventDefault()}
                                className="font-size-lg text-white-50"
                                id="btnGoogleTooltip">
                                <FontAwesomeIcon icon={['fab', 'google']} />
                              </NavLink>
                              <UncontrolledTooltip target="btnGoogleTooltip">
                                Google
                              </UncontrolledTooltip>
                            </NavItem>
                            <NavItem>
                              <NavLink
                                href="#/"
                                onClick={e => e.preventDefault()}
                                className="font-size-lg text-white-50"
                                id="btnInstagramTooltip">
                                <FontAwesomeIcon icon={['fab', 'instagram']} />
                              </NavLink>
                              <UncontrolledTooltip target="btnInstagramTooltip">
                                Instagram
                              </UncontrolledTooltip>
                            </NavItem>
                          </Nav>
                        </div>
                      </div>
                    </Col>
                    <Col
                      xl="7"
                      lg="8"
                      className="order-1 order-lg-2 d-flex align-items-center">
                      <Col xl="7" lg="10" md="1" className="mx-auto px-xl-0">
                        <div className="py-5">
                          <Nav className="nav-line">
                            <NavItem>
                              <NavLink
                                className={clsx({ active: activeTab === '1' })}
                                onClick={() => {
                                  toggle('1');
                                }}>
                                <span>Create an account</span>
                                <div className="divider" />
                              </NavLink>
                            </NavItem>
                            <NavItem>
                              <NavLink
                                className={clsx({ active: activeTab === '2' })}
                                onClick={() => {
                                  toggle('2');
                                }}>
                                <span>Sign in</span>
                                <div className="divider" />
                              </NavLink>
                            </NavItem>
                          </Nav>
                        </div>
                        <TabContent activeTab={activeTab}>
                          <TabPane tabId="1">
                            <div className="px-3 pb-3 pt-4">
                              <h3 className="display-4 mb-2 font-weight-bold">
                                Create account
                              </h3>
                              <p className="font-size-lg mb-5 text-black-50">
                                Fill in the fields below and you'll be good to
                                go.
                              </p>
                              <FormGroup>
                                <label>Email address</label>
                                <Input
                                  placeholder="Enter your email address"
                                  type="email"
                                />
                              </FormGroup>
                              <FormGroup>
                                <div className="d-flex justify-content-between mg-b-5">
                                  <label>Password</label>
                                </div>
                                <Input
                                  placeholder="Enter your password"
                                  type="password"
                                />
                              </FormGroup>
                              <FormGroup>
                                <label>Firstname</label>
                                <Input
                                  placeholder="Enter your firstname"
                                  type="text"
                                />
                              </FormGroup>
                              <FormGroup>
                                <label>Lastname</label>
                                <Input
                                  placeholder="Enter your lastname"
                                  type="text"
                                />
                              </FormGroup>
                              <div className="form-group mb-5">
                                By clicking the <strong>Create account</strong>{' '}
                                button below you agree to our terms of service
                                and privacy statement.
                              </div>

                              <Button
                                color="primary"
                                size="lg"
                                block={true}
                                className="mb-5">
                                Create Account
                              </Button>
                            </div>
                          </TabPane>
                          <TabPane tabId="2">
                            <div className="px-3 pb-3 pt-4">
                              <Card className="m-0 shadow-none border-0">
                                <h3 className="display-4 mb-2 font-weight-bold">
                                  Existing account
                                </h3>
                                <p className="font-size-lg mb-5 text-black-50">
                                  You already have an account? Fill in the
                                  fields below to login into your existing
                                  dashboard.
                                </p>
                                <div className="card-header p-3 pt-0 rounded bg-light">
                                  <div className="text-black-50 text-center mb-3">
                                    <small>Sign in with</small>
                                  </div>
                                  <div className="text-center">
                                    <Button color="facebook" className="mr-2">
                                      <span className="btn-wrapper--icon">
                                        <FontAwesomeIcon
                                          icon={['fab', 'facebook']}
                                        />
                                      </span>
                                      <span className="btn-wrapper--label">
                                        Facebook
                                      </span>
                                    </Button>
                                    <Button color="twitter" className="ml-2">
                                      <span className="btn-wrapper--icon">
                                        <FontAwesomeIcon
                                          icon={['fab', 'twitter']}
                                        />
                                      </span>
                                      <span className="btn-wrapper--label">
                                        Twitter
                                      </span>
                                    </Button>
                                  </div>
                                </div>
                                <CardBody>
                                  <div className="text-center text-black-50 mb-3">
                                    <small>Or sign in with credentials</small>
                                  </div>
                                  <form>
                                    <div className="form-group mb-3">
                                      <div className="input-group input-group-alternative">
                                        <div className="input-group-prepend">
                                          <span className="input-group-text">
                                            <FontAwesomeIcon
                                              icon={['far', 'envelope']}
                                            />
                                          </span>
                                        </div>
                                        <Input
                                          placeholder="Email"
                                          type="email"
                                        />
                                      </div>
                                    </div>
                                    <FormGroup>
                                      <div className="input-group input-group-alternative">
                                        <div className="input-group-prepend">
                                          <span className="input-group-text">
                                            <FontAwesomeIcon
                                              icon={['fas', 'unlock-alt']}
                                            />
                                          </span>
                                        </div>
                                        <Input
                                          placeholder="Password"
                                          type="password"
                                        />
                                      </div>
                                    </FormGroup>
                                    <CustomInput
                                      type="checkbox"
                                      className="custom-control-alternative"
                                      id="exampleCustomCheckbox55"
                                      label="Remember me"
                                    />
                                    <div className="text-center mb-5">
                                      <Button color="second" className="my-2">
                                        Sign in
                                      </Button>
                                    </div>
                                  </form>
                                </CardBody>
                              </Card>
                            </div>
                          </TabPane>
                        </TabContent>
                      </Col>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LivePreviewExample;
