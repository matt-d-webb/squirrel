import React, { Fragment, useState } from 'react';

import clsx from 'clsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Row,
  Col,
  CardBody,
  Card,
  FormGroup,
  Input,
  Badge,
  UncontrolledTooltip,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Button,
  Modal,
  Progress
} from 'reactstrap';
import stock1 from '../../../assets/images/stock-photos/stock-1.jpg';

import avatar1 from '../../../assets/images/avatars/avatar1.jpg';
import avatar2 from '../../../assets/images/avatars/avatar2.jpg';
import avatar3 from '../../../assets/images/avatars/avatar3.jpg';

import avatar5 from '../../../assets/images/avatars/avatar5.jpg';
import avatar6 from '../../../assets/images/avatars/avatar6.jpg';
import avatar7 from '../../../assets/images/avatars/avatar7.jpg';

import people2 from '../../../assets/images/stock-photos/people-2.jpg';
import people3 from '../../../assets/images/stock-photos/people-3.jpg';
import svgImage1 from '../../../assets/images/illustrations/business_plan.svg';

import hero1 from '../../../assets/images/hero-bg/hero-1.jpg';

import hero3 from '../../../assets/images/hero-bg/hero-3.jpg';

import { Settings, Grid, Users, Layers } from 'react-feather';

const LivePreviewExample = () => {
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [modal4, setModal4] = useState(false);
  const [modal5, setModal5] = useState(false);

  const toggle1 = () => setModal1(!modal1);
  const toggle2 = () => setModal2(!modal2);
  const toggle3 = () => setModal3(!modal3);
  const toggle4 = () => setModal4(!modal4);
  const toggle5 = () => setModal5(!modal5);

  const [activeTab, setActiveTab] = useState('1');

  const toggleTab = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <Fragment>
      <Button onClick={toggle1} color="primary" className="m-2">
        Open example I
      </Button>
      <Modal
        zIndex={2000}
        centered
        size="xl"
        isOpen={modal1}
        toggle={toggle1}
        contentClassName="modal-example-1 border-0 bg-transparent">
        <Row className="no-gutters">
          <Col lg="5">
            <div className="hero-wrapper bg-composed-wrapper bg-plum-plate h-100 rounded-left">
              <div className="flex-grow-1 w-100 d-flex align-items-center">
                <div
                  className="bg-composed-wrapper--image rounded-left"
                  style={{ backgroundImage: 'url(' + hero1 + ')' }}
                />
                <div className="bg-composed-wrapper--bg bg-second opacity-5 rounded-left" />
                <div className="bg-composed-wrapper--content p-5">
                  <div className="d-flex align-items-center">
                    <Badge pill color="second" className="px-4 h-auto py-1">
                      New release
                    </Badge>
                    <span
                      className="text-white-50 pl-3"
                      id="PlaceholderTooltip4">
                      <FontAwesomeIcon icon={['far', 'question-circle']} />
                    </span>
                    <UncontrolledTooltip
                      container=".modal-example-1"
                      placement="right"
                      target="PlaceholderTooltip4">
                      More info placeholder!
                    </UncontrolledTooltip>
                  </div>
                  <div className="text-white mt-3">
                    <h1 className="display-4 my-3 font-weight-bold">
                      Wonderful serenity has possession
                    </h1>
                    <p className="font-size-md mb-0 text-white-50">
                      A free hour, when our power of choice is untrammelled and
                      when nothing prevents.
                    </p>
                    <div className="divider border-2 my-5 border-light opacity-2 rounded w-25" />
                    <div>
                      <Button
                        tag="a"
                        href="#/"
                        onClick={e => e.preventDefault()}
                        color="warning">
                        <span className="btn-wrapper--label">
                          Browse gallery
                        </span>
                        <span className="btn-wrapper--icon">
                          <FontAwesomeIcon icon={['fas', 'arrow-right']} />
                        </span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero-footer pb-4">
                <Nav className="nav-transparent">
                  <NavItem>
                    <NavLink
                      href="#/"
                      onClick={e => e.preventDefault()}
                      color="link"
                      className="px-2 py-1 font-size-xl text-white-50"
                      id="FacebookNavTooltip155">
                      <FontAwesomeIcon icon={['fab', 'facebook']} />
                    </NavLink>
                    <UncontrolledTooltip
                      container=".modal-example-1"
                      target="FacebookNavTooltip155">
                      Facebook
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="#/"
                      onClick={e => e.preventDefault()}
                      color="link"
                      className="px-2 py-1 font-size-xl text-white-50"
                      id="btnTwitterTooltip874">
                      <FontAwesomeIcon icon={['fab', 'twitter']} />
                    </NavLink>
                    <UncontrolledTooltip
                      container=".modal-example-1"
                      target="btnTwitterTooltip874">
                      Twitter
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="#/"
                      onClick={e => e.preventDefault()}
                      color="link"
                      className="px-2 py-1 font-size-xl text-white-50"
                      id="btnGoogleTooltip874">
                      <FontAwesomeIcon icon={['fab', 'google']} />
                    </NavLink>
                    <UncontrolledTooltip
                      container=".modal-example-1"
                      target="btnGoogleTooltip874">
                      Google
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="#/"
                      onClick={e => e.preventDefault()}
                      color="link"
                      className="px-2 py-1 font-size-xl text-white-50"
                      id="btnInstagramTooltip874">
                      <FontAwesomeIcon icon={['fab', 'instagram']} />
                    </NavLink>
                    <UncontrolledTooltip
                      container=".modal-example-1"
                      target="btnInstagramTooltip874">
                      Instagram
                    </UncontrolledTooltip>
                  </NavItem>
                </Nav>
              </div>
            </div>
          </Col>
          <Col lg="7">
            <div className="bg-white rounded-right">
              <div className="tabs-animated tabs-animated-line mb-4 pt-4 px-4">
                <Nav tabs>
                  <NavItem>
                    <NavLink
                      className={clsx({ active: activeTab === '1' })}
                      onClick={() => {
                        toggleTab('1');
                      }}>
                      <span>Overview</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={clsx({ active: activeTab === '2' })}
                      onClick={() => {
                        toggleTab('2');
                      }}>
                      <span>Sign in</span>
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={clsx({ active: activeTab === '3' })}
                      onClick={() => {
                        toggleTab('3');
                      }}>
                      <span>Recent activity</span>
                    </NavLink>
                  </NavItem>
                </Nav>
              </div>
              <TabContent className="px-4 pb-4" activeTab={activeTab}>
                <TabPane className="pt-3" tabId="1">
                  <Row>
                    <Col md="6" lg="4">
                      <Card className="card-box text-black-50 mb-4 p-3">
                        <div className="display-3 text-black font-weight-bold">
                          31
                        </div>
                        <div className="divider mt-2 mb-3 border-2 w-25 bg-first rounded border-first" />
                        <div className="font-weight-bold font-size-sm text-uppercase">
                          Implemented
                          <br />
                          bugfixes
                        </div>
                      </Card>
                    </Col>
                    <Col md="6" lg="4">
                      <Card className="card-box text-black-50 mb-4 p-3">
                        <div className="display-3 text-black font-weight-bold">
                          68
                        </div>
                        <div className="divider mt-2 mb-3 border-2 w-25 bg-success rounded border-success" />
                        <div className="font-weight-bold font-size-sm text-uppercase">
                          Unresolved
                          <br />
                          tickets
                        </div>
                      </Card>
                    </Col>
                    <Col md="6" lg="4">
                      <Card className="card-box text-black-50 mb-4 p-3">
                        <div className="display-3 text-black font-weight-bold">
                          57
                        </div>
                        <div className="divider mt-2 mb-3 border-2 w-25 bg-warning rounded border-warning" />
                        <div className="font-weight-bold font-size-sm text-uppercase">
                          Support
                          <br />
                          requests
                        </div>
                      </Card>
                    </Col>
                  </Row>
                  <Card className="card-box mb-4">
                    <CardBody>
                      <div className="text-left mb-3">
                        <div className="mt-1">
                          <FontAwesomeIcon
                            icon={['fas', 'lemon']}
                            className="font-size-xxl text-danger"
                          />
                        </div>
                        <div className="mt-3 line-height-sm">
                          <b className="font-size-lg text-black">3,568</b>
                          <span className="text-black-50 pl-1">clicks</span>
                        </div>
                      </div>
                      <Progress multi>
                        <Progress bar value="5" max={55}>
                          5
                        </Progress>
                        <Progress bar color="success" value="15" max={55}>
                          15
                        </Progress>
                        <Progress bar color="warning" value="10" max={55}>
                          10
                        </Progress>
                        <Progress bar color="danger" value="10" max={55}>
                          10
                        </Progress>
                      </Progress>
                    </CardBody>
                  </Card>
                  <Button outline color="primary">
                    Create new report
                  </Button>
                </TabPane>
                <TabPane className="pt-3" tabId="2">
                  <Card className="shadow-none border-0">
                    <div className="card-header d-block p-3 pt-0 rounded bg-light">
                      <div className="text-muted text-center mb-3">
                        <small>Sign in with</small>
                      </div>
                      <div className="text-center">
                        <Button color="facebook" className="mr-2">
                          <span className="btn-wrapper--icon">
                            <FontAwesomeIcon icon={['fab', 'facebook']} />
                          </span>
                          <span className="btn-wrapper--label">Facebook</span>
                        </Button>
                        <Button color="twitter" className="ml-2">
                          <span className="btn-wrapper--icon">
                            <FontAwesomeIcon icon={['fab', 'twitter']} />
                          </span>
                          <span className="btn-wrapper--label">Twitter</span>
                        </Button>
                      </div>
                    </div>
                    <CardBody>
                      <div className="text-center text-muted mb-3">
                        <small>Or sign in with credentials</small>
                      </div>
                      <form>
                        <div className="form-group mb-3">
                          <div className="input-group input-group-alternative">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                <FontAwesomeIcon icon={['far', 'envelope']} />
                              </span>
                            </div>
                            <Input placeholder="Email" type="email" />
                          </div>
                        </div>
                        <FormGroup>
                          <div className="input-group input-group-alternative">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                <FontAwesomeIcon icon={['fas', 'unlock-alt']} />
                              </span>
                            </div>
                            <Input placeholder="Password" type="password" />
                          </div>
                        </FormGroup>
                        <div className="custom-control custom-control-alternative custom-checkbox">
                          <input
                            className="custom-control-input"
                            id=" customCheckLogin"
                            type="checkbox"
                          />
                          <label
                            className="custom-control-label"
                            htmlFor=" customCheckLogin">
                            <span>Remember me</span>
                          </label>
                        </div>
                        <div className="text-center">
                          <Button color="second" className="my-2">
                            Sign in
                          </Button>
                        </div>
                      </form>
                    </CardBody>
                  </Card>
                </TabPane>
                <TabPane className="pt-3" tabId="3">
                  <Row>
                    <Col lg="6">
                      <Card className="card-box mb-4">
                        <div className="card-indicator bg-first" />
                        <CardBody className="px-4 py-3">
                          <div className="pb-3 d-flex justify-content-between">
                            <a href="#/" onClick={e => e.preventDefault()}>
                              Presentation site design
                            </a>
                          </div>
                          <div className="d-flex align-items-center justify-content-start">
                            <Badge color="first" className="px-3">
                              On hold
                            </Badge>
                            <div className="font-size-sm text-danger px-2">
                              <FontAwesomeIcon
                                icon={['far', 'clock']}
                                className="mr-1"
                              />
                              14:22
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="6">
                      <Card className="card-box mb-4">
                        <div className="card-indicator bg-success" />
                        <CardBody className="px-4 py-3">
                          <div className="pb-3 d-flex justify-content-between">
                            <a href="#/" onClick={e => e.preventDefault()}>
                              Create UI mockups
                            </a>
                          </div>
                          <div className="d-flex align-items-center justify-content-start">
                            <Badge color="success" className="px-3">
                              Fixed
                            </Badge>
                            <div className="font-size-sm text-dark px-2">
                              <FontAwesomeIcon
                                icon={['far', 'clock']}
                                className="mr-1"
                              />
                              09:41
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                  <div className="timeline-list">
                    <div className="timeline-item timeline-item-icon">
                      <div className="timeline-item--content">
                        <div className="timeline-item--icon-wrapper bg-danger text-white">
                          <FontAwesomeIcon icon={['far', 'gem']} />
                        </div>
                        <h4 className="timeline-item--label mb-2 font-weight-bold">
                          1998
                        </h4>
                        <p>
                          Bill Clinton's presidential scandal makes it online.
                        </p>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-item--content">
                        <div className="timeline-item--icon" />
                        <h4 className="timeline-item--label mb-2 font-weight-bold">
                          Java exam day
                        </h4>
                        <p>
                          Bill Clinton's presidential scandal makes it online.
                        </p>
                        <div className="avatar-wrapper-overlap mt-2 mb-1">
                          <div className="avatar-icon-wrapper avatar-icon-sm">
                            <div className="avatar-icon">
                              <img alt="..." src={avatar1} />
                            </div>
                          </div>
                          <div className="avatar-icon-wrapper avatar-icon-sm">
                            <div className="avatar-icon">
                              <img alt="..." src={avatar7} />
                            </div>
                          </div>
                          <div className="avatar-icon-wrapper avatar-icon-sm">
                            <div className="avatar-icon">
                              <img alt="..." src={avatar1} />
                            </div>
                          </div>
                          <div className="avatar-icon-wrapper avatar-icon-sm">
                            <div className="avatar-icon">
                              <img alt="..." src={avatar2} />
                            </div>
                          </div>
                          <div className="avatar-icon-wrapper avatar-icon-sm">
                            <div className="avatar-icon">
                              <img alt="..." src={avatar6} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="timeline-item">
                      <div className="timeline-item--content">
                        <div className="timeline-item--icon" />
                        <h4 className="timeline-item--label mb-2 font-weight-bold">
                          Business investor meeting
                          <Badge
                            color="neutral-info"
                            className="text-info ml-2">
                            New
                          </Badge>
                        </h4>
                        <p>
                          Mosaic, the first graphical browser, is introduced to
                          the average consumer.
                        </p>
                        <div className="mt-2">
                          <Button size="sm" color="primary">
                            Submit Report
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPane>
              </TabContent>
            </div>
          </Col>
        </Row>
      </Modal>

      <Button onClick={toggle2} color="primary" className="m-2">
        Open example II
      </Button>
      <Modal
        zIndex={2000}
        centered
        size="xl"
        isOpen={modal2}
        toggle={toggle2}
        contentClassName="modal-example-2 border-0 bg-transparent">
        <Row className="no-gutters">
          <Col lg="6">
            <div className="hero-wrapper bg-composed-wrapper bg-grow-early h-100 rounded-left">
              <div className="flex-grow-1 w-100 d-flex align-items-center">
                <div
                  className="bg-composed-wrapper--image rounded-left"
                  style={{ backgroundImage: 'url(' + hero3 + ')' }}
                />
                <div className="bg-composed-wrapper--bg bg-second opacity-5 rounded-left" />
                <div className="bg-composed-wrapper--content text-center p-5">
                  <div className="text-white">
                    <h1 className="display-3 my-3 font-weight-bold">
                      Wonderful serenity has possession
                    </h1>
                    <p className="font-size-lg mb-0 text-white-50">
                      A free hour, when our power of choice is untrammelled and
                      when nothing prevents.
                    </p>
                  </div>
                </div>
              </div>
              <div className="hero-footer pb-4">
                <Button
                  tag="a"
                  href="#/"
                  onClick={e => e.preventDefault()}
                  color="second"
                  className="px-4">
                  <span className="btn-wrapper--label">Continue reading</span>
                </Button>
              </div>
            </div>
          </Col>
          <Col lg="6">
            <div className="bg-white rounded-right">
              <div className="card-tr-actions">
                <Button
                  size="sm"
                  color="neutral-dark"
                  id="SendMessageTooltip247">
                  <span className="btn-wrapper--icon">
                    <FontAwesomeIcon icon={['far', 'envelope']} />
                  </span>
                </Button>
                <UncontrolledTooltip
                  container=".modal-example-2"
                  target="SendMessageTooltip247">
                  Send Message
                </UncontrolledTooltip>
              </div>
              <div className="text-center pt-4">
                <div className="avatar-icon-wrapper rounded-circle m-0">
                  <div className="d-block p-0 avatar-icon-wrapper m-0 d-90">
                    <div className="rounded-circle overflow-hidden">
                      <img alt="..." className="img-fluid" src={avatar7} />
                    </div>
                  </div>
                </div>
                <div>
                  <Badge
                    color="neutral-success"
                    className="my-2 text-success font-size-md px-4 py-1 h-auto">
                    Online
                  </Badge>
                </div>
                <h3 className="font-weight-bold mt-3">Lacie-Mae Mckay</h3>
                <p className="mb-0 text-black-50">
                  Senior Frontend Developer at <b>Google Inc.</b>
                </p>
                <div className="pt-3">
                  <Button
                    color="github"
                    className="d-50 m-2 p-0"
                    id="btnGithubTooltip285">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon
                        icon={['fab', 'github']}
                        className="font-size-lg"
                      />
                    </span>
                  </Button>
                  <UncontrolledTooltip
                    container=".modal-example-2"
                    target="btnGithubTooltip285">
                    Github
                  </UncontrolledTooltip>
                  <Button
                    color="instagram"
                    className="d-50 m-2 p-0"
                    id="btnInstagramTooltip">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon
                        icon={['fab', 'instagram']}
                        className="font-size-lg"
                      />
                    </span>
                  </Button>
                  <Button
                    color="google"
                    className="d-50 m-2 p-0"
                    id="btnGoogleTooltip">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon
                        icon={['fab', 'google']}
                        className="font-size-lg"
                      />
                    </span>
                  </Button>
                </div>
                <div className="d-flex p-4 bg-secondary card-footer mt-4 flex-wrap">
                  <div className="w-50 p-2">
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
                  <div className="w-50 p-2">
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
                  <div className="w-50 p-2">
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
                  <div className="w-50 p-2">
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
              </div>
            </div>
          </Col>
        </Row>
      </Modal>

      <Button onClick={toggle3} color="primary" className="m-2">
        Open example III
      </Button>
      <Modal
        zIndex={2000}
        centered
        size="xl"
        isOpen={modal3}
        toggle={toggle3}
        contentClassName="modal-example-3 border-0 bg-transparent">
        <Row className="no-gutters">
          <Col lg="5">
            <div className="bg-white rounded-left">
              <div className="p-4 text-center">
                <div className="avatar-icon-wrapper rounded-circle mx-auto">
                  <div className="d-block p-0 avatar-icon-wrapper rounded-circle m-0 border-3 border-first">
                    <div className="rounded-circle border-3 border-white overflow-hidden">
                      <img alt="..." className="img-fluid" src={avatar5} />
                    </div>
                  </div>
                </div>
                <h4 className="font-size-lg font-weight-bold my-2">
                  Marion Devine
                </h4>
                <div className="text-center my-4">
                  <Badge pill color="neutral-first" className="text-first mx-1">
                    Web developer
                  </Badge>
                  <Badge
                    pill
                    color="neutral-warning"
                    className="text-warning mx-1">
                    Javascript
                  </Badge>
                  <Badge
                    pill
                    color="neutral-danger"
                    className="text-danger mx-1">
                    Angular
                  </Badge>
                </div>

                <p className="text-muted mb-4">
                  I should be incapable of drawing a single stroke at the
                  present moment; and yet I feel that I never was a greater
                  artist than now.
                </p>

                <div className="divider my-4" />
                <Row>
                  <Col lg="6">
                    <span className="opacity-6 pb-2">Current month</span>
                    <div className="d-flex align-items-center justify-content-center">
                      <span className="font-weight-bold font-size-lg">
                        <small className="opacity-6 pr-1">$</small>
                        46,362
                      </span>
                      <Badge
                        color="neutral-danger"
                        className="ml-2 text-danger">
                        -8%
                      </Badge>
                    </div>
                  </Col>
                  <Col lg="6">
                    <span className="opacity-6 pb-2">Last year</span>
                    <div className="d-flex align-items-center justify-content-center">
                      <span className="font-weight-bold font-size-lg">
                        <small className="opacity-6 pr-1">$</small>
                        34,546
                      </span>
                      <Badge
                        color="neutral-success"
                        className="text-success ml-2">
                        +13%
                      </Badge>
                    </div>
                  </Col>
                </Row>
                <div className="divider my-4" />
                <div className="font-weight-bold text-uppercase text-black-50 text-center mb-3">
                  Team members
                </div>
                <div className="avatar-wrapper-overlap d-flex justify-content-center mb-3">
                  <div className="avatar-icon-wrapper" id="DelaneyTooltip1567">
                    <div className="avatar-icon">
                      <img alt="..." src={avatar1} />
                    </div>
                  </div>
                  <UncontrolledTooltip
                    container=".modal-example-3"
                    target="DelaneyTooltip1567"
                    popperClassName="tooltip-danger">
                    Chelsey Delaney
                  </UncontrolledTooltip>

                  <div className="avatar-icon-wrapper" id="SantosTooltip1567">
                    <div className="avatar-icon">
                      <img alt="..." src={avatar7} />
                    </div>
                  </div>
                  <UncontrolledTooltip
                    container=".modal-example-3"
                    target="SantosTooltip1567"
                    popperClassName="tooltip-first">
                    Laibah Santos
                  </UncontrolledTooltip>

                  <div className="avatar-icon-wrapper" id="WeberTooltip1567">
                    <div className="avatar-icon">
                      <img alt="..." src={avatar1} />
                    </div>
                  </div>
                  <UncontrolledTooltip
                    container=".modal-example-3"
                    target="WeberTooltip1567"
                    popperClassName="tooltip-second">
                    Ksawery Weber
                  </UncontrolledTooltip>

                  <div className="avatar-icon-wrapper" id="MaganaTooltip1567">
                    <div className="avatar-icon">
                      <img alt="..." src={avatar2} />
                    </div>
                  </div>
                  <UncontrolledTooltip
                    container=".modal-example-3"
                    target="MaganaTooltip1567"
                    popperClassName="tooltip-info">
                    Killian Magana
                  </UncontrolledTooltip>

                  <div className="avatar-icon-wrapper" id="BanksTooltip1567">
                    <div className="avatar-icon">
                      <img alt="..." src={avatar6} />
                    </div>
                  </div>
                  <UncontrolledTooltip
                    container=".modal-example-3"
                    target="BanksTooltip1567"
                    popperClassName="tooltip-success">
                    Kean Banks
                  </UncontrolledTooltip>
                </div>
                <div className="divider my-4" />
                <Button outline color="first" className="mt-2">
                  View complete profile
                </Button>
              </div>
            </div>
          </Col>
          <Col lg="7">
            <div className="hero-wrapper bg-composed-wrapper h-100 rounded-right">
              <div className="flex-grow-1 w-100 d-flex align-items-end">
                <div
                  className="bg-composed-wrapper--image rounded-right opacity-9 bg-composed-filter-rm"
                  style={{ backgroundImage: 'url(' + people3 + ')' }}
                />
                <div className="bg-composed-wrapper--content text-center p-5">
                  <div className="text-white mt-3">
                    <h1 className="display-3 my-3 font-weight-bold">
                      Wonderful serenity has possession
                    </h1>
                    <p className="font-size-lg mb-0 text-white-50">
                      A free hour, when our power of choice is untrammelled and
                      when nothing prevents.
                    </p>
                    <div className="divider border-1 mx-auto my-4 border-light opacity-2 rounded w-25" />
                    <div>
                      <Button
                        tag="a"
                        href="#/"
                        onClick={e => e.preventDefault()}
                        color="success"
                        size="lg"
                        className="btn-pill">
                        <span className="btn-wrapper--icon">
                          <FontAwesomeIcon icon={['far', 'envelope']} />
                        </span>
                        <span className="btn-wrapper--label">Get in touch</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Modal>

      <Button onClick={toggle4} color="primary" className="m-2">
        Open example IV
      </Button>
      <Modal
        zIndex={2000}
        centered
        size="lg"
        isOpen={modal4}
        toggle={toggle4}
        contentClassName="border-0 bg-transparent">
        <Row className="no-gutters">
          <Col lg="5">
            <img
              alt="..."
              className="rounded-left img-fit-container"
              src={stock1}
            />
          </Col>
          <Col lg="7">
            <div className="bg-white rounded-right">
              <div className="p-5">
                <img
                  alt="..."
                  className="w-25 d-block img-fluid"
                  src={svgImage1}
                />
                <h1 className="display-4 my-3 font-weight-bold">
                  Wonderful serenity has possession
                </h1>
                <p className="font-size-lg text-black">
                  A free hour, when our power of choice is untrammelled and when
                  nothing prevents.
                </p>
                <p className="font-size-sm mb-3 text-black-50">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics
                </p>
                <Button
                  tag="a"
                  href="#/"
                  onClick={e => e.preventDefault()}
                  block
                  color="primary">
                  Continue reading
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Modal>

      <Button onClick={toggle5} color="primary" className="m-2">
        Open example V
      </Button>
      <Modal
        zIndex={2000}
        centered
        size="xl"
        isOpen={modal5}
        toggle={toggle5}
        contentClassName="border-0 p-5">
        <Row>
          <Col lg="4">
            <a
              href="#/"
              onClick={e => e.preventDefault()}
              className="card-img-wrapper rounded">
              <div className="img-wrapper-overlay">
                <div className="overlay-btn-wrapper">
                  <Button color="first" className="p-0 d-50 rounded-circle">
                    <span className="btn-wrapper--icon">
                      <FontAwesomeIcon icon={['fas', 'play-circle']} />
                    </span>
                  </Button>
                </div>
              </div>
              <div className="card-badges card-badgestop">
                <Badge pill color="success">
                  New
                </Badge>
              </div>
              <img alt="..." className="card-img-top rounded" src={people2} />
            </a>
          </Col>
          <Col lg="8">
            <a
              href="#/"
              onClick={e => e.preventDefault()}
              className="font-size-xxl d-block my-4">
              New report file has been uploaded
            </a>
            <p className="text-black-50 font-size-lg mb-0">
              Lorem ipsum dolor sit amet,consectetuer edipiscing elit,sed diam
              nonummy nibh euismod tinciduntut laoreet doloremagna aliquam erat
              volutpat.
            </p>

            <div className="d-flex align-items-center mt-4">
              <div className="avatar-icon-wrapper avatar-icon-lg  mr-2">
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
                  Aaran Mitchell
                </a>
                <span className="text-black-50 d-block">
                  UI Engineer, Google
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Modal>
    </Fragment>
  );
};

export default LivePreviewExample;
