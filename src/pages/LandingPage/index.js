import React, { Fragment, useState } from 'react';
import clsx from 'clsx';

import { Row, Col } from 'reactstrap';

import projectLogo from '../../assets/images/squirrel.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import svgImage11 from '../../assets/images/illustrations/tables.svg';

import {
  Button,
  Nav,
  NavItem,
  NavLink,
  ListGroup,
  ListGroupItem,
  UncontrolledTooltip,
  Card,
  CardBody,
  Badge,
  Collapse
} from 'reactstrap';


const LandingPage = () => {
  const [collapse, setCollapse] = useState(false);
  const toggle = () => setCollapse(!collapse);
  return (
    <Fragment>
      <div className="hero-wrapper bg-composed-wrapper bg-mean-fruit">
        <div className="header-nav-wrapper header-nav-wrapper-lg w-100">
          <div className="container">
            <div className="header-nav-logo">
              <div className="nav-logo">
                <a
                  href="/"
                  onClick={e => e.preventDefault()}
                  title="Squirrel">
                  <i>
                    <img
                      alt="Squirrel"
                      src={projectLogo}
                    />
                  </i>
                  <span>Squirrel</span>
                </a>
              </div>
            </div>
            <div className="header-nav-menu d-none d-lg-block">
              <Nav className="justify-content-center">
                <NavItem>
                  <NavLink tag={Link} to="/dashboard">
                    Dashboard
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/dashboard">
                    Spending
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/dashboard">
                    Saving
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
            <div className="header-nav-actions flex-grow-0 flex-lg-grow-1">
              <span className="d-none d-lg-block">
                <Button
                  tag={Link}
                  to="/login"
                  className="btn-pill"
                  color="second">
                  Login
                </Button>
              </span>
              <span className="d-block d-lg-none">
                <Button
                  onClick={toggle}
                  className={clsx(
                    'navbar-toggler hamburger hamburger--elastic',
                    { 'is-active': collapse }
                  )}>
                  <span className="hamburger-box">
                    <span className="hamburger-inner" />
                  </span>
                </Button>
              </span>
            </div>
            <Collapse
              isOpen={collapse}
              className="nav-collapsed-wrapper navbar-collapse">
              <div className="navbar-collapse-inner p-0">
                <ListGroup flush>
                  <ListGroupItem className="bg-secondary p-2">
                    <div className="d-flex align-items-stretch navbar-light align-content-center">
                      <div className="header-nav-logo justify-content-start">
                        <a
                          className="navbar-brand d-flex d-40"
                          href="#/"
                          onClick={e => e.preventDefault()}
                          title="Squirrel">
                          <img
                            alt="Squirrel"
                            className="d-block img-fluid"
                            src={projectLogo}
                          />
                        </a>
                      </div>
                      <button
                        onClick={toggle}
                        className={clsx(
                          'navbar-toggler hamburger hamburger--elastic',
                          { 'is-active': collapse }
                        )}>
                        <span className="hamburger-box">
                          <span className="hamburger-inner" />
                        </span>
                      </button>
                    </div>
                  </ListGroupItem>
                  <ListGroupItem className="p-2">
                    <Link
                      to="/dashboard"
                      className="d-flex px-2 align-items-center dropdown-item rounded">
                      <div className="align-box-row w-100">
                        <div className="mr-3">
                          <div className="bg-deep-blue text-center text-white d-40 rounded-circle">
                            <FontAwesomeIcon icon={['fas', 'object-group']} />
                          </div>
                        </div>
                        <div className="text-truncate max-w-70 overflow-hidden">
                          <div className="font-weight-bold text-primary d-block">
                            Dashboards
                          </div>
                          <span className="text-black-50">
                            See at a glance your spending habits
                          </span>
                        </div>
                        <div className="ml-auto card-hover-indicator align-self-center">
                          <FontAwesomeIcon
                            icon={['fas', 'chevron-right']}
                            className="font-size-lg"
                          />
                        </div>
                      </div>
                    </Link>
                    <Link
                      to="/ApplicationsChat"
                      className="d-flex px-2 align-items-center dropdown-item rounded">
                      <div className="align-box-row w-100">
                        <div className="mr-3">
                          <div className="bg-strong-bliss text-center text-white d-40 rounded-circle">
                            <FontAwesomeIcon icon={['fas', 'sitemap']} />
                          </div>
                        </div>
                        <div className="text-truncate max-w-70 overflow-hidden">
                          <div className="font-weight-bold text-primary d-block">
                            Savings
                          </div>
                          <span className="text-black-50">
                            Track your savings and investments
                          </span>
                        </div>
                        <div className="ml-auto card-hover-indicator align-self-center">
                          <FontAwesomeIcon
                            icon={['fas', 'chevron-right']}
                            className="font-size-lg"
                          />
                        </div>
                      </div>
                    </Link>
                    <Link
                      to="/RegularTables"
                      className="d-flex px-2 align-items-center dropdown-item rounded">
                      <div className="align-box-row w-100">
                        <div className="mr-3">
                          <div className="bg-happy-green text-center text-white d-40 rounded-circle">
                            <FontAwesomeIcon icon={['fas', 'table']} />
                          </div>
                        </div>
                        <div className="text-truncate max-w-70 overflow-hidden">
                          <div className="font-weight-bold text-primary d-block">
                            Expenses
                          </div>
                          <span className="text-black-50">
                            Search, Filter, Track it all!
                          </span>
                        </div>
                        <div className="ml-auto card-hover-indicator align-self-center">
                          <FontAwesomeIcon
                            icon={['fas', 'chevron-right']}
                            className="font-size-lg"
                          />
                        </div>
                      </div>
                    </Link>
                  </ListGroupItem>
                  <ListGroupItem className="list-group-item-action align-box-row p-2">
                    <Button
                      tag="a"
                      href="/dashboard"
                      className="btn-pill"
                      color="second"
                      block>
                      View
                    </Button>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Collapse>
          </div>
        </div>

        <div className="flex-grow-1 w-100 d-flex align-items-center">
          <div
            className="bg-composed-wrapper--image bg-composed-filter-rm opacity-9"
            
          />
          <div className="bg-composed-wrapper--content pt-5 pb-2 py-lg-5">
            <div className="container pb-5">
              <Row>
                <Col lg="7" xl="6" className="d-flex align-items-center">
                  <div>
                    <div className="d-flex align-items-center">
                      <Badge pill color="info" className="px-4 h-auto py-1">
                        Beta
                      </Badge>
                      <span className="text-black-50 pl-2" id="builtTooltip34">
                        <FontAwesomeIcon icon={['far', 'question-circle']} />
                      </span>
                      <UncontrolledTooltip
                        placement="right"
                        target="builtTooltip34">
                        This application is not production ready. Please do not use.
                      </UncontrolledTooltip>
                    </div>
                    <div className="text-black mt-3">
                      <h1 className="display-2 mb-3 font-weight-bold">
                        Squirrel
                      </h1>
                      <p className="font-size-lg text-black-50">
                        A simple application for managing your personal finances. Add expenses, savings and investments.
                      </p>
                      <p className="text-black">
                        Take a look around. Add some data, see how easy it is.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col
                  lg="5"
                  xl="6"
                  className="px-0 d-none d-lg-flex align-items-center">
                  <img
                    alt="..."
                    className="w-100 mx-auto d-block img-fluid"
                    src={svgImage11}
                  />
                </Col>
              </Row>
            </div>
          </div>
        </div>
        <div className="hero-footer py-3 py-lg-5">
          <div className="container">
            <Row>
              <Col lg="4">
                <Card className="card-box-hover-rise card-box-hover card-box-alt card-border-top border-success mb-5 pb-4">
                  <h3 className="font-size-lg font-weight-bold mt-5 mb-4">
                    Easy to understand
                  </h3>
                  <p className="card-text px-3 px-xl-4 mb-4">
                    Your finances at your finger tips. No more spreadsheets.
                  </p>
                </Card>
              </Col>
              <Col lg="4">
                <Card className="card-box-hover-rise card-box-hover card-box-alt card-border-top border-first mb-5 pb-4">
                  <h3 className="font-size-lg font-weight-bold mt-5 mb-4">
                    Simple to use
                  </h3>
                  <p className="card-text px-3 px-xl-4 mb-4">
                    Quickly add information, see how it all adds up and never miss a bill.
                  </p>
                </Card>
              </Col>
              <Col lg="4">
                <Card className="card-box-hover-rise card-box-hover card-box-alt card-border-top border-warning mb-5 pb-4">
                  <h3 className="font-size-lg font-weight-bold mt-5 mb-4">
                    Integrations
                  </h3>
                  <p className="card-text px-3 px-xl-4 mb-4">
                    Track your credit progress, see how quickly and easily to improve your score.
                  </p>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div className="py-5 bg-secondary">
        <div className="container pb-5">
          <div className="text-center py-5">
            <h3 className="display-3 mb-2 font-weight-bold">What's included</h3>
            <p className="font-size-lg mb-5 text-black-50">
              Completely free tracking application. Never be asked or forced to pay for "premium" features. 
            </p>
          </div>
          <Row>
            <Col md="6" lg="4">
              <Card className="p-5 mb-5">
                <div className="bg-grow-early text-center text-white font-size-xl d-50 rounded">
                  <FontAwesomeIcon icon={['fas', 'shapes']} />
                </div>
                <h3 className="font-size-lg font-weight-bold mt-4">
                  Track
                </h3>
                <p className="text-black-50 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </Card>
            </Col>
            <Col md="6" lg="4">
              <Card className="p-5 mb-5">
                <div className="bg-ripe-malin text-center text-white font-size-xl d-50 rounded">
                  <FontAwesomeIcon icon={['fas', 'align-center']} />
                </div>
                <h3 className="font-size-lg font-weight-bold mt-4">
                  Update
                </h3>
                <p className="text-black-50 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </Card>
            </Col>
            <Col md="6" lg="4">
              <Card className="p-5 mb-5">
                <div className="bg-malibu-beach text-center text-white font-size-xl d-50 rounded">
                  <FontAwesomeIcon icon={['fas', 'table']} />
                </div>
                <h3 className="font-size-lg font-weight-bold mt-4">Charts</h3>
                <p className="text-black-50 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </Card>
            </Col>
            <Col md="6" lg="4">
              <Card className="p-5 mb-5">
                <div className="bg-arielle-smile text-center text-white font-size-xl d-50 rounded">
                  <FontAwesomeIcon icon={['fas', 'map-marker-alt']} />
                </div>
                <h3 className="font-size-lg font-weight-bold mt-4">
                  Locate
                </h3>
                <p className="text-black-50 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </Card>
            </Col>
            <Col md="6" lg="4">
              <Card className="p-5 mb-5">
                <div className="bg-strong-bliss text-center text-white font-size-xl d-50 rounded">
                  <FontAwesomeIcon icon={['far', 'object-group']} />
                </div>
                <h3 className="font-size-lg font-weight-bold mt-4">
                  Present
                </h3>
                <p className="text-black-50 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </Card>
            </Col>
            <Col md="6" lg="4">
              <Card className="p-5 mb-5">
                <div className="bg-plum-plate text-center text-white font-size-xl d-50 rounded">
                  <FontAwesomeIcon icon={['fas', 'sitemap']} />
                </div>
                <h3 className="font-size-lg font-weight-bold mt-4">
                  Integrations
                </h3>
                <p className="text-black-50 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </Card>
            </Col>
          </Row>
        </div>
      </div>


      <div className="bg-first py-5">
        <div className="container pt-sm-0 pt-md-5">
          <div className="px-0 col-lg-6 col-md-8 col-sm-12 mx-auto text-center">
            <h1 className="display-3 mb-4 text-white font-weight-bold">
              Stay up to date
            </h1>
            <p className="font-size-lg text-white-50">
              Follow us on any of our social media accounts to find out when we
              release new products or updates.
            </p>
          </div>
          <div className="divider border-2 d-sm-none d-md-block rounded-circle border-white bg-white opacity-2 mx-auto mb-4 mt-5 w-50" />
          {/* <Nav className="nav-transparent justify-content-center">
            <NavItem>
              <NavLink
                className="nav-link text-white-50"
                href="https:&#x2F;&#x2F;www.facebook.com&#x2F;UiFort"
                rel="nofollow"
                target="_blank"
                id="btnFacebookTooltip3457">
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon
                    icon={['fab', 'facebook']}
                    className="font-size-xxl"
                  />
                </span>
              </NavLink>
              <UncontrolledTooltip target="btnFacebookTooltip3457">
                Facebook
              </UncontrolledTooltip>
            </NavItem>
            <NavItem>
              <NavLink
                className="nav-link text-white-50"
                href="https:&#x2F;&#x2F;twitter.com"
                rel="nofollow"
                target="_blank"
                id="btnTwitterTooltip3457">
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon
                    icon={['fab', 'twitter']}
                    className="font-size-xxl"
                  />
                </span>
              </NavLink>
              <UncontrolledTooltip target="btnTwitterTooltip3457">
                Twitter
              </UncontrolledTooltip>
            </NavItem>
            <NavItem>
              <NavLink
                className="nav-link text-white-50"
                href="https:&#x2F;&#x2F;www.instagram.com"
                rel="nofollow"
                target="_blank"
                id="btnInstagramTooltip3457">
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon
                    icon={['fab', 'instagram']}
                    className="font-size-xxl"
                  />
                </span>
              </NavLink>
              <UncontrolledTooltip target="btnInstagramTooltip3457">
                Instagram
              </UncontrolledTooltip>
            </NavItem>
            <NavItem>
              <NavLink
                className="nav-link text-white-50"
                href="https:&#x2F;&#x2F;discord.gg&#x2F;mddFBQX"
                rel="nofollow"
                target="_blank"
                id="btnDiscordTooltip3457">
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon
                    icon={['fab', 'discord']}
                    className="font-size-xxl"
                  />
                </span>
              </NavLink>
              <UncontrolledTooltip target="btnDiscordTooltip3457">
                Discord
              </UncontrolledTooltip>
            </NavItem>
            <NavItem>
              <NavLink
                className="nav-link text-white-50"
                href="https:&#x2F;&#x2F;dribbble.com&#x2F;"
                rel="nofollow"
                target="_blank"
                id="btnDribbbleTooltip3457">
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon
                    icon={['fab', 'dribbble']}
                    className="font-size-xxl"
                  />
                </span>
              </NavLink>
              <UncontrolledTooltip target="btnDribbbleTooltip3457">
                Dribbble
              </UncontrolledTooltip>
            </NavItem>
            <NavItem>
              <NavLink
                className="nav-link text-white-50"
                href="https:&#x2F;&#x2F;github.com"
                rel="nofollow"
                target="_blank"
                id="btnGithubTooltip3457">
                <span className="btn-wrapper--icon">
                  <FontAwesomeIcon
                    icon={['fab', 'github']}
                    className="font-size-xxl"
                  />
                </span>
              </NavLink>
              <UncontrolledTooltip target="btnGithubTooltip3457">
                Github
              </UncontrolledTooltip>
            </NavItem>
          </Nav> */}
          <div className="divider border-2 d-sm-none d-md-block rounded-circle border-white bg-white opacity-2 mx-auto my-4 w-50" />
          <div className="px-0 col-lg-6 col-md-8 col-sm-12 mx-auto text-center">
            <Card className="border-0 mt-5 card-box">
              <CardBody>
                <div className="text-black">
                  <h1 className="display-4 mb-3 font-weight-bold">
                    Newsletter updates
                  </h1>
                  <p className="font-size-md mb-4 text-black-50">
                    Subscribe to our newsletter to be the first to find out when
                    we offer promotions or discounts for our products.
                  </p>
                  <div id="mc_embed_signup">
                    <form
                      action=""
                      className="validate"
                      id="mc-embedded-subscribe-form"
                      method="post"
                      name="mc-embedded-subscribe-form"
                      noValidate
                      target="_blank">
                      <Row>
                        <Col md="8" className="pr-md-0">
                          <div id="mc_embed_signup_scroll">
                            <div className="mc-field-group">
                              <input
                                className="form-control required email"
                                id="mce-EMAIL"
                                name="EMAIL"
                                placeholder="Your email address..."
                                type="email"
                              />
                            </div>
                            <div className="clear" id="mce-responses">
                              <div
                                className="response"
                                id="mce-Errorresponse"
                                style={{ display: 'none' }}
                              />
                              <div
                                className="response"
                                id="mce-success-response"
                                style={{ display: 'none' }}
                              />
                            </div>
                            <div
                              aria-hidden="true"
                              style={{ position: 'absolute', left: '-5000px' }}>
                              <input
                                name="b_3ebc33a3d37f2278158d74721_a122e673aa"
                                tabIndex="-1"
                                type="text"
                              />
                            </div>
                          </div>
                        </Col>
                        <Col md="4" className="mt-3 mt-md-0">
                          <Button
                            block
                            className="w-100"
                            color="first"
                            id="mc-embedded-subscribe"
                            name="subscribe"
                            type="submit">
                            <span className="btn-wrapper--label">Sign up</span>
                          </Button>
                        </Col>
                      </Row>
                    </form>
                  </div>
                  <small className="text-black-50 d-block pt-3">
                    We promise not to spam your inbox. We also hate spam!
                  </small>
                </div>
              </CardBody>
            </Card>
          </div>
          <div className="mt-5">
            <small className="text-center d-block text-white-50">
              Copyright &copy; 2020 -{' '}
              <a
                className="text-white"
                href="https://squirrelmynuts.com"
                title="SquirrelMyNuts">
                squirrelmynuts.com
              </a>
            </small>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LandingPage;
