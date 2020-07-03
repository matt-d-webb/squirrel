import React, { Fragment } from 'react';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Row,
  Col,
  UncontrolledTooltip,
  Nav,
  NavItem,
  NavLink,
  Button
} from 'reactstrap';

import hero3 from '../../../assets/images/hero-bg/hero-3.jpg';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <div className="app-wrapper bg-white">
        <div className="app-main">
          <Button
            tag={Link}
            size="lg"
            color="success"
            className="btn-go-back"
            to="/dashboard">
            <span className="btn-wrapper--icon">
              <FontAwesomeIcon icon={['fas', 'arrow-left']} />
            </span>
            <span className="btn-wrapper--label">Back to dashboard</span>
          </Button>
          <div className="app-content p-0">
            <div className="app-inner-content-layout--main">
              <div className="flex-grow-1 w-100 d-flex align-items-center">
                <div className="bg-composed-wrapper--content">
                  <div className="hero-wrapper bg-composed-wrapper bg-arielle-smile min-vh-100">
                    <div className="flex-grow-1 w-100 d-flex align-items-center">
                      <div
                        className="bg-composed-wrapper--image"
                        style={{ backgroundImage: 'url(' + hero3 + ')' }}
                      />
                      <div className="bg-composed-wrapper--bg bg-night-sky opacity-5" />
                      <div className="bg-composed-wrapper--content text-center py-5">
                        <Col
                          xl="5"
                          lg="6"
                          md="10"
                          sm="12"
                          className="mx-auto text-center text-white">
                          <h1 className="display-2 mb-3 px-4 font-weight-bold">
                            Recover Password
                          </h1>
                          <h3 className="font-size-lg line-height-sm font-weight-light d-block px-3 mb-2 text-white-50">
                            Enter your username or email address and we will
                            send you a link to reset your password.
                          </h3>
                          <Row className="no-gutters">
                            <Col sm="12" lg="8" className="mt-3 px-2">
                              <input
                                className="form-control form-control-lg"
                                placeholder="Email"
                                type="text"
                              />
                            </Col>
                            <Col sm="12" lg="4" className="mt-3 px-2">
                              <Button
                                className="d-block shadow-none w-100"
                                size="lg"
                                color="warning">
                                <span className="btn-wrapper--label">
                                  Reset
                                </span>
                              </Button>
                            </Col>
                          </Row>
                        </Col>
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
                          <UncontrolledTooltip target="FacebookTooltipExample7">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
