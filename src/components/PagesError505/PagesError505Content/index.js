import React, { Fragment } from 'react';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Col,
  UncontrolledTooltip,
  Nav,
  NavItem,
  NavLink,
  Button
} from 'reactstrap';

import svgImage8 from '../../../assets/images/illustrations/505.svg';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <div className="app-wrapper bg-secondary">
        <div className="app-main">
          <div className="app-content p-0">
            <div className="app-inner-content-layout--main">
              <div className="flex-grow-1 w-100 d-flex align-items-center">
                <div className="bg-composed-wrapper--content">
                  <div className="hero-wrapper bg-composed-wrapper min-vh-100">
                    <div className="flex-grow-1 w-100 d-flex align-items-center">
                      <Col
                        lg="6"
                        md="9"
                        className="px-4 mx-auto text-center text-black">
                        <img
                          src={svgImage8}
                          className="w-50 mx-auto d-block my-5 img-fluid"
                          alt="..."
                        />

                        <h1 className="display-1 mb-3 px-4 font-weight-bold">
                          505 Forbidden
                        </h1>
                        <h3 className="font-size-xxl line-height-sm font-weight-light d-block px-3 mb-3 text-black-50">
                          Something is broken.
                        </h3>
                        <p>
                          We've been automatically alerted of the issue and will
                          work to fix it as soon as possible.
                        </p>
                        <Button
                          tag={Link}
                          to="/dashboard"
                          color="first"
                          size="lg"
                          className="px-5 mt-4 mb-3">
                          <span className="btn-wrapper--icon">
                            <FontAwesomeIcon icon={['fas', 'arrow-left']} />
                          </span>
                          <span className="btn-wrapper--label">
                            Back to dashboard
                          </span>
                        </Button>
                      </Col>
                    </div>
                    <div className="hero-footer py-4">
                      <Nav pills className="nav-neutral-first">
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
