import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Row, Col, Card, Badge, Nav, NavItem, NavLink } from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Row>
        <Col xl="3" md="6">
          <div className="heading-3 text-center">First</div>
          <Card className="card-box shadow-none rounded-0 border-2 mb-3">
            <Nav className="nav-neutral-first flex-column py-2">
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
        <Col xl="3" md="6">
          <div className="heading-3 text-center">Danger</div>
          <Card className="card-box shadow-none rounded-0 border-2 mb-3">
            <Nav pills className="nav-neutral-danger flex-column p-3">
              <NavItem>
                <NavLink href="#/" onClick={e => e.preventDefault()}>
                  <span>My Account</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink active href="#/" onClick={e => e.preventDefault()}>
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
        <Col xl="3" md="6">
          <div className="heading-3 text-center">Warning</div>
          <Card className="card-box shadow-none rounded-0 border-2 mb-3">
            <Nav
              pills
              className="nav-neutral-warning nav-pills-rounded flex-column p-3">
              <NavItem>
                <NavLink href="#/" onClick={e => e.preventDefault()}>
                  <span>My Account</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink active href="#/" onClick={e => e.preventDefault()}>
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
        <Col xl="3" md="6">
          <div className="heading-3 text-center">Dark</div>
          <Card className="card-box shadow-none rounded-0 border-2 mb-3">
            <Nav className="nav-neutral-dark flex-column py-2">
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
      <div className="divider my-4" />
      <Row>
        <Col xl="3" md="6">
          <div className="heading-3 text-center">Success</div>
          <Card className="card-box shadow-none rounded-0 border-2 mb-3">
            <Nav className="nav-neutral-success flex-column py-2">
              <NavItem>
                <span className="font-weight-bold px-3 py-2 d-block text-dark">
                  Menu
                </span>
              </NavItem>
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
        <Col xl="3" md="6">
          <div className="heading-3 text-center">Info</div>
          <Card className="card-box shadow-none rounded-0 border-2 mb-3">
            <Nav
              pills
              className="nav-neutral-info nav-pills-rounded flex-column p-3">
              <NavItem>
                <span className="font-weight-bold font-size-lg px-3 py-2 d-block text-dark">
                  Dashboard
                </span>
              </NavItem>
              <NavItem>
                <NavLink href="#/" onClick={e => e.preventDefault()}>
                  <span>My Account</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink active href="#/" onClick={e => e.preventDefault()}>
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
              <NavItem>
                <span className="font-weight-bold font-size-lg px-3 py-2 d-block text-dark">
                  Reports
                </span>
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
        <Col xl="3" md="6">
          <div className="heading-3 text-center">Primary</div>
          <Card className="card-box shadow-none rounded-0 border-2 mb-3">
            <Nav pills className="nav-neutral-primary flex-column p-3">
              <NavItem>
                <span className="font-weight-bold px-3 py-2 d-block text-first">
                  Reports
                </span>
              </NavItem>
              <NavItem>
                <NavLink href="#/" onClick={e => e.preventDefault()}>
                  <span>My Account</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink active href="#/" onClick={e => e.preventDefault()}>
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
              <NavItem>
                <span className="font-weight-bold px-3 py-2 d-block text-first">
                  Reports
                </span>
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
        <Col xl="3" md="6">
          <div className="heading-3 text-center">Second</div>
          <Card className="card-box shadow-none rounded-0 border-2 mb-3">
            <Nav className="nav-neutral-second flex-column py-2">
              <NavItem>
                <span className="font-weight-bold font-size-lg px-3 py-2 d-block text-black">
                  Navigation
                </span>
              </NavItem>
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
              <NavItem>
                <span className="font-weight-bold font-size-lg px-3 py-2 d-block text-black">
                  Elements
                </span>
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
      <div className="divider my-4" />
      <Row>
        <Col xl="3" md="6">
          <div className="heading-3 text-center">First</div>
          <Card className="card-box shadow-none rounded-0 border-2 mb-3">
            <Nav className="nav-first flex-column p-3">
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
        <Col xl="3" md="6">
          <div className="heading-3 text-center">Danger</div>
          <Card className="card-box shadow-none rounded-0 border-2 mb-3">
            <Nav className="nav-danger nav-pills flex-column p-3">
              <NavItem>
                <NavLink href="#/" onClick={e => e.preventDefault()}>
                  <span>My Account</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink active href="#/" onClick={e => e.preventDefault()}>
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
        <Col xl="3" md="6">
          <div className="heading-3 text-center">Warning</div>
          <Card className="card-box shadow-none rounded-0 border-2 mb-3">
            <Nav
              pills
              className="nav-warning nav-pills-rounded flex-column p-3">
              <NavItem>
                <NavLink href="#/" onClick={e => e.preventDefault()}>
                  <span>My Account</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink active href="#/" onClick={e => e.preventDefault()}>
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
        <Col xl="3" md="6">
          <div className="heading-3 text-center">Dark</div>
          <Card className="card-box shadow-none rounded-0 border-2 mb-3">
            <Nav className="nav-dark flex-column p-3">
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
      <div className="divider my-4" />
      <Row>
        <Col xl="3" md="6">
          <div className="heading-3 text-center">Success</div>
          <Card className="card-box shadow-none rounded-0 border-2 mb-3">
            <Nav className="nav-success flex-column p-3">
              <NavItem>
                <span className="font-weight-bold px-3 py-2 d-block text-dark">
                  Menu
                </span>
              </NavItem>
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
        <Col xl="3" md="6">
          <div className="heading-3 text-center">Info</div>
          <Card className="card-box shadow-none rounded-0 border-2 mb-3">
            <Nav pills className="nav-info nav-pills-rounded flex-column p-3">
              <NavItem>
                <span className="font-weight-bold font-size-lg px-3 py-2 d-block text-dark">
                  Dashboard
                </span>
              </NavItem>
              <NavItem>
                <NavLink href="#/" onClick={e => e.preventDefault()}>
                  <span>My Account</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink active href="#/" onClick={e => e.preventDefault()}>
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
              <NavItem>
                <span className="font-weight-bold font-size-lg px-3 py-2 d-block text-dark">
                  Reports
                </span>
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
        <Col xl="3" md="6">
          <div className="heading-3 text-center">Primary</div>
          <Card className="card-box shadow-none rounded-0 border-2 mb-3">
            <Nav pills className="nav-primary flex-column p-3">
              <NavItem>
                <span className="font-weight-bold px-3 py-2 d-block text-first">
                  Reports
                </span>
              </NavItem>
              <NavItem>
                <NavLink href="#/" onClick={e => e.preventDefault()}>
                  <span>My Account</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink active href="#/" onClick={e => e.preventDefault()}>
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
              <NavItem>
                <span className="font-weight-bold px-3 py-2 d-block text-first">
                  Reports
                </span>
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
        <Col xl="3" md="6">
          <div className="heading-3 text-center">Second</div>
          <Card className="card-box shadow-none rounded-0 border-2 mb-3">
            <Nav className="nav-second flex-column p-3">
              <NavItem>
                <span className="font-weight-bold font-size-lg px-3 py-2 d-block text-black">
                  Navigation
                </span>
              </NavItem>
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
              <NavItem>
                <span className="font-weight-bold font-size-lg px-3 py-2 d-block text-black">
                  Elements
                </span>
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
