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

import svgImage3 from '../../../assets/images/illustrations/404.svg';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <div className="app-wrapper bg-white">
        <div className="app-main">
          <Button
            tag={Link}
            to="/DashboardDefault"
            size="lg"
            color="success"
            className="btn-go-back">
            <span className="btn-wrapper--icon">
              <FontAwesomeIcon icon={['fas', 'arrow-left']} />
            </span>
            <span className="btn-wrapper--label">Back to dashboard</span>
          </Button>
          <div className="app-content p-0">
            <div className="app-inner-content-layout--main">
              <div className="flex-grow-1 w-100 d-flex align-items-center">
                <div className="bg-composed-wrapper--content">
                  <div className="hero-wrapper bg-composed-wrapper min-vh-100">
                    <div className="flex-grow-1 w-100 d-flex align-items-center">
                      <Col
                        lg="6"
                        md="9"
                        className="px-4 px-lg-0 mx-auto text-center text-black">
                        <img
                          src={svgImage3}
                          className="w-50 mx-auto d-block my-5 img-fluid"
                          alt="..."
                        />

                        <h3 className="font-size-xxl line-height-sm font-weight-light d-block px-3 mb-3 text-black-50">
                          The page you were looking for doesn't exist.
                        </h3>
                        <p>
                          You may have mistyped the address or the page may have
                          moved. Try searching below.
                        </p>
                        <Row className="no-gutters">
                          <Col sm="12" md="8" className="mt-4 mt-lg-3 px-2">
                            <input
                              type="text"
                              className="form-control form-control-lg"
                              placeholder="Search terms here..."
                            />
                          </Col>
                          <Col sm="12" md="4" className="mt-4 mt-lg-3 px-2">
                            <Button
                              className="d-block w-100"
                              color="first"
                              size="lg">
                              <span className="btn-wrapper--label">Search</span>
                            </Button>
                          </Col>
                        </Row>
                      </Col>
                    </div>
                    <div className="hero-footer py-4">
                      <Nav className="nav-neutral-first">
                        <NavItem>
                          <NavLink
                            className="font-size-lg rounded-sm text-black-50"
                            href="#/"
                            onClick={e => e.preventDefault()}
                            id="FacebookNavTooltip1">
                            <FontAwesomeIcon icon={['fab', 'facebook']} />
                          </NavLink>
                          <UncontrolledTooltip target="FacebookNavTooltip1">
                            Facebook
                          </UncontrolledTooltip>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className="font-size-lg rounded-sm text-black-50"
                            href="#/"
                            onClick={e => e.preventDefault()}
                            id="btnTwitterTooltip">
                            <FontAwesomeIcon icon={['fab', 'twitter']} />
                          </NavLink>
                          <UncontrolledTooltip target="btnTwitterTooltip">
                            Twitter
                          </UncontrolledTooltip>
                          <UncontrolledTooltip target="btnTwitterTooltip">
                            Twitter
                          </UncontrolledTooltip>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className="font-size-lg rounded-sm text-black-50"
                            href="#/"
                            onClick={e => e.preventDefault()}
                            id="btnGoogleTooltip">
                            <FontAwesomeIcon icon={['fab', 'google']} />
                          </NavLink>
                          <UncontrolledTooltip target="btnGoogleTooltip">
                            Google
                          </UncontrolledTooltip>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className="font-size-lg rounded-sm text-black-50"
                            href="#/"
                            onClick={e => e.preventDefault()}
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
