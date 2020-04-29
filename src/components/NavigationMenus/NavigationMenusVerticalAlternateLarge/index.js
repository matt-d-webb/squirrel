import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Row, Col, Card, Badge, Nav, NavItem, NavLink } from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Row>
        <Col lg="6">
          <div className="heading-3 text-center">First</div>
          <Card className="card-box shadow-none rounded-0 border-2 m-2">
            <Nav className="nav-first nav-lg flex-column py-2">
              <NavItem>
                <NavLink href="#/" onClick={e => e.preventDefault()}>
                  <div className="nav-link-icon">
                    <FontAwesomeIcon icon={['far', 'chart-bar']} />
                  </div>
                  <span>Services</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#/" onClick={e => e.preventDefault()} active>
                  <div className="nav-link-icon">
                    <FontAwesomeIcon icon={['far', 'question-circle']} />
                  </div>
                  <span>Layouts</span>
                  <Badge color="warning" className="ml-auto">
                    512
                  </Badge>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#/"
                  onClick={e => e.preventDefault()}
                  className="disabled">
                  <div className="nav-link-icon">
                    <FontAwesomeIcon icon={['far', 'user-circle']} />
                  </div>
                  <span>Reports</span>
                </NavLink>
              </NavItem>
              <NavItem className="nav-item--header">
                <span>Others</span>
              </NavItem>
              <NavItem>
                <NavLink href="#/" onClick={e => e.preventDefault()}>
                  <div className="nav-link-icon">
                    <FontAwesomeIcon icon={['far', 'object-group']} />
                  </div>
                  <span>Components</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#/" onClick={e => e.preventDefault()}>
                  <div className="nav-link-icon">
                    <FontAwesomeIcon icon={['far', 'chart-bar']} />
                  </div>
                  <span>Services</span>
                </NavLink>
              </NavItem>
            </Nav>
          </Card>
        </Col>
        <Col lg="6">
          <div className="heading-3 text-center">Danger</div>
          <Card className="card-box shadow-none rounded-0 border-2 m-2">
            <Nav pills className="nav-danger nav-lg flex-column py-3 pr-3">
              <NavItem>
                <NavLink href="#/" onClick={e => e.preventDefault()}>
                  <span>My Account</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#/" onClick={e => e.preventDefault()} active>
                  <span>Profile settings</span>
                  <Badge color="first" className="ml-auto">
                    23
                  </Badge>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#/" onClick={e => e.preventDefault()}>
                  <span>Active tasks</span>
                </NavLink>
              </NavItem>
              <NavItem className="nav-item--header">
                <span>Heading</span>
              </NavItem>
              <NavItem>
                <NavLink href="#/" onClick={e => e.preventDefault()}>
                  <div className="nav-link-icon">
                    <FontAwesomeIcon icon={['far', 'bell']} />
                  </div>
                  <span>Customers</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#/" onClick={e => e.preventDefault()}>
                  <div className="nav-link-icon">
                    <FontAwesomeIcon icon={['far', 'eye']} />
                  </div>
                  <span>Statistics</span>
                </NavLink>
              </NavItem>
            </Nav>
          </Card>
        </Col>
      </Row>
      <div className="divider my-4" />
      <Row>
        <Col lg="6">
          <div className="heading-3 text-center">Warning</div>
          <Card className="card-box shadow-none rounded-0 border-2 m-2">
            <Nav
              pills
              className="nav-warning nav-lg nav-pills-rounded flex-column py-3 pr-3">
              <NavItem>
                <NavLink href="#/" onClick={e => e.preventDefault()}>
                  <span>My Account</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#/" onClick={e => e.preventDefault()} active>
                  <span>Profile settings</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#/" onClick={e => e.preventDefault()}>
                  <span>Active tasks</span>
                  <Badge className="ml-auto" color="success">
                    New
                  </Badge>
                </NavLink>
              </NavItem>
              <NavItem className="nav-item--header">
                <span>Heading</span>
              </NavItem>
              <NavItem>
                <NavLink href="#/" onClick={e => e.preventDefault()}>
                  <div className="nav-link-icon">
                    <FontAwesomeIcon icon={['far', 'bell']} />
                  </div>
                  <span>Customers</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#/" onClick={e => e.preventDefault()}>
                  <div className="nav-link-icon">
                    <FontAwesomeIcon icon={['far', 'eye']} />
                  </div>
                  <span>Statistics</span>
                </NavLink>
              </NavItem>
            </Nav>
          </Card>
        </Col>
        <Col lg="6">
          <div className="heading-3 text-center">Dark</div>
          <Card className="card-box shadow-none rounded-0 border-2 m-2">
            <Nav className="nav-dark nav-lg flex-column py-2">
              <NavItem>
                <NavLink href="#/" onClick={e => e.preventDefault()}>
                  <div className="nav-link-icon">
                    <FontAwesomeIcon icon={['far', 'chart-bar']} />
                  </div>
                  <span>Services</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#/" onClick={e => e.preventDefault()} active>
                  <div className="nav-link-icon">
                    <FontAwesomeIcon icon={['far', 'question-circle']} />
                  </div>
                  <span>Layouts</span>
                  <Badge color="warning" className="ml-auto">
                    512
                  </Badge>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#/"
                  onClick={e => e.preventDefault()}
                  className="disabled">
                  <div className="nav-link-icon">
                    <FontAwesomeIcon icon={['far', 'user-circle']} />
                  </div>
                  <span>Reports</span>
                </NavLink>
              </NavItem>
              <NavItem className="nav-item--header">
                <span>Others</span>
              </NavItem>
              <NavItem>
                <NavLink href="#/" onClick={e => e.preventDefault()}>
                  <div className="nav-link-icon">
                    <FontAwesomeIcon icon={['far', 'object-group']} />
                  </div>
                  <span>Components</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#/" onClick={e => e.preventDefault()}>
                  <div className="nav-link-icon">
                    <FontAwesomeIcon icon={['far', 'chart-bar']} />
                  </div>
                  <span>Services</span>
                </NavLink>
              </NavItem>
            </Nav>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
}
