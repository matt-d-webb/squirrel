import React, { Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Row,
  Col,
  Card,
  Badge,
  ListGroup,
  ListGroupItem,
  Nav,
  NavItem,
  NavLink,
  Button
} from 'reactstrap';

export default function LivePreviewExample() {
  return (
    <Fragment>
      <Row>
        <Col xl="4">
          <Card className="card-box mb-5">
            <div className="bg-composed-wrapper bg-dark">
              <div className="bg-composed-wrapper--image bg-composed-img-1" />
              <div className="bg-composed-wrapper--content text-light p-5">
                <h5 className="mb-1">Composed backgrounds</h5>
                <p className="mb-0 opacity-7">
                  Highly configurable & easy to integrate with other elements.
                </p>
              </div>
            </div>
            <ListGroup flush>
              <ListGroupItem
                tag="a"
                href="#/"
                onClick={e => e.preventDefault()}
                className="list-group-item-action align-box-row">
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={['far', 'file-pdf']}
                    className="text-black-50 font-size-xl mr-3"
                  />
                  Adobe_file.pdf
                  <Badge color="neutral-info" className="text-info ml-2">
                    New
                  </Badge>
                </div>
                <div className="ml-auto">
                  <FontAwesomeIcon
                    icon={['fas', 'angle-right']}
                    className="text-primary"
                  />
                </div>
              </ListGroupItem>
              <ListGroupItem
                tag="a"
                href="#/"
                onClick={e => e.preventDefault()}
                className="list-group-item-action align-box-row">
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={['far', 'file-word']}
                    className="text-black-50 font-size-xl mr-3"
                  />
                  Word_file.docx
                </div>
                <div className="ml-auto">
                  <FontAwesomeIcon
                    icon={['fas', 'angle-right']}
                    className="text-primary"
                  />
                </div>
              </ListGroupItem>
              <ListGroupItem
                tag="a"
                href="#/"
                onClick={e => e.preventDefault()}
                className="list-group-item-action align-box-row">
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={['far', 'file-excel']}
                    className="text-black-50 font-size-xl mr-3"
                  />
                  Excel_doc.csv
                  <Badge color="neutral-success" className="text-success ml-2">
                    Draft
                  </Badge>
                </div>
                <div className="ml-auto">
                  <FontAwesomeIcon
                    icon={['fas', 'angle-right']}
                    className="text-primary"
                  />
                </div>
              </ListGroupItem>
              <ListGroupItem
                tag="a"
                href="#/"
                onClick={e => e.preventDefault()}
                className="list-group-item-action align-box-row">
                <div className="d-flex align-items-center">
                  <FontAwesomeIcon
                    icon={['far', 'file-alt']}
                    className="text-black-50 font-size-xl mr-3"
                  />
                  Archive_docs.zip
                </div>
                <div className="ml-auto">
                  <FontAwesomeIcon
                    icon={['fas', 'angle-right']}
                    className="text-primary"
                  />
                </div>
              </ListGroupItem>
              <ListGroupItem
                tag="a"
                href="#/"
                onClick={e => e.preventDefault()}
                className="list-group-item-action text-center">
                <FontAwesomeIcon
                  icon={['fas', 'chevron-down']}
                  className="text-muted mr-3"
                />
                <small className="text-primary">
                  Show all files <b>(93)</b>
                </small>
                <FontAwesomeIcon
                  icon={['fas', 'chevron-down']}
                  className="text-muted ml-3"
                />
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
        <Col xl="4">
          <Card className="card-box mb-5">
            <div className="bg-composed-wrapper bg-malibu-beach">
              <div className="bg-composed-wrapper--image bg-composed-img-2" />
              <div className="bg-composed-wrapper--content text-light p-5">
                <h5 className="mb-1">Composed backgrounds</h5>
                <p className="mb-0 opacity-7">
                  Highly configurable & easy to integrate with other elements.
                </p>
              </div>
            </div>
            <ListGroup flush>
              <ListGroupItem
                tag="a"
                href="#/"
                onClick={e => e.preventDefault()}
                className="list-group-item-action align-box-row">
                <div className="align-box-row w-100">
                  <div className="mr-3">
                    <div className="bg-grow-early text-center text-white font-size-xl d-50 rounded-circle">
                      <FontAwesomeIcon icon={['far', 'bell']} />
                    </div>
                  </div>
                  <div>
                    <div className="font-weight-bold text-primary d-block">
                      Sales
                    </div>
                    <small className="text-success">
                      <FontAwesomeIcon
                        icon={['fas', 'chevron-up']}
                        className="text-success mr-1"
                      />
                      <span>15.4% increase</span>
                    </small>
                  </div>
                  <div className="ml-auto card-hover-indicator align-self-center">
                    <FontAwesomeIcon
                      icon={['fas', 'chevron-right']}
                      className="font-size-xl"
                    />
                  </div>
                </div>
              </ListGroupItem>
              <ListGroupItem
                tag="a"
                href="#/"
                onClick={e => e.preventDefault()}
                className="list-group-item-action align-box-row">
                <div className="align-box-row w-100">
                  <div className="mr-3">
                    <div className="bg-danger text-center text-white font-size-xl d-50 rounded-circle">
                      <FontAwesomeIcon icon={['far', 'object-group']} />
                    </div>
                  </div>
                  <div>
                    <div className="font-weight-bold text-primary d-block">
                      Income
                    </div>
                    <small className="text-danger">
                      <FontAwesomeIcon
                        icon={['fas', 'arrow-up']}
                        className="text-danger mr-1"
                      />
                      <span>5.2% decrease</span>
                    </small>
                  </div>
                  <div className="ml-auto card-hover-indicator align-self-center">
                    <FontAwesomeIcon
                      icon={['fas', 'chevron-right']}
                      className="font-size-xl"
                    />
                  </div>
                </div>
              </ListGroupItem>
              <ListGroupItem
                tag="a"
                href="#/"
                onClick={e => e.preventDefault()}
                className="list-group-item-action align-box-row">
                <div className="align-box-row w-100">
                  <div className="mr-3">
                    <div className="bg-warning text-center text-white font-size-xl d-50 rounded-circle">
                      <FontAwesomeIcon icon={['far', 'chart-bar']} />
                    </div>
                  </div>
                  <div>
                    <div className="font-weight-bold text-primary d-block">
                      Expenses
                    </div>
                    <small className="text-warning">
                      <FontAwesomeIcon
                        icon={['fas', 'arrow-down']}
                        className="text-warning mr-1"
                      />
                      <span>5.2% down</span>
                    </small>
                  </div>
                  <div className="ml-auto card-hover-indicator align-self-center">
                    <FontAwesomeIcon
                      icon={['fas', 'chevron-right']}
                      className="font-size-xl"
                    />
                  </div>
                </div>
              </ListGroupItem>
            </ListGroup>
            <div className="card-footer bg-light text-center">
              <Button size="sm" color="primary">
                View Details
              </Button>
            </div>
          </Card>
        </Col>
        <Col xl="4">
          <Card className="card-box mb-5">
            <div className="bg-composed-wrapper bg-danger">
              <div className="bg-composed-wrapper--image bg-composed-img-3" />
              <div className="bg-composed-wrapper--content text-light p-5">
                <h5 className="mb-1">Composed backgrounds</h5>
                <p className="mb-0 opacity-7">
                  Highly configurable & easy to integrate with other elements.
                </p>
              </div>
            </div>
            <Nav pills className="nav-primary flex-column p-3">
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
      </Row>
      <div className="divider mb-5" />
      <Row>
        <Col xl="4">
          <Card className="card-box mb-5">
            <div className="bg-composed-wrapper bg-plum-plate">
              <div className="bg-composed-wrapper--image bg-composed-img-4" />
              <div className="bg-composed-wrapper--content text-light text-center p-4">
                <h5 className="mb-1">Scrollable</h5>
                <p className="mb-0 opacity-7">
                  This menu box is scrollable (xs)
                </p>
              </div>
            </div>
            <PerfectScrollbar className="scroll-area-xs shadow-overflow">
              <Nav
                pills
                className="nav-danger nav-pills-rounded flex-column p-3">
                <NavItem>
                  <NavLink href="#/" onClick={e => e.preventDefault()}>
                    <span>My Account</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink active href="#/" onClick={e => e.preventDefault()}>
                    <span>Profile settings</span>
                    <Badge className="ml-auto" color="success">
                      New
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
            </PerfectScrollbar>
            <div className="card-footer d-flex justify-content-between">
              <Button size="sm" color="danger">
                Action
              </Button>
              <Button size="sm" color="link" className="btn-link-danger px-0">
                <span>View details</span>
              </Button>
            </div>
          </Card>
        </Col>
        <Col xl="4">
          <Card className="card-box mb-5">
            <div className="bg-composed-wrapper bg-vicious-stance">
              <div className="bg-composed-wrapper--image bg-composed-img-5" />
              <div className="bg-composed-wrapper--content text-light text-center p-4">
                <h5 className="mb-1">Scrollable</h5>
                <p className="mb-0 opacity-7">
                  This menu box is scrollable (sm)
                </p>
              </div>
            </div>
            <div className="scroll-area-sm shadow-overflow">
              <PerfectScrollbar>
                <Nav className=" flex-column py-2">
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
              </PerfectScrollbar>
            </div>
            <div className="card-footer d-flex justify-content-between">
              <Button size="sm" color="neutral-success">
                Action
              </Button>
              <Button color="link" size="sm" className="btn-link-success px-0">
                <span>View details</span>
              </Button>
            </div>
          </Card>
        </Col>
        <Col xl="4">
          <Card className="card-box mb-5">
            <div className="bg-composed-wrapper bg-midnight-bloom">
              <div className="bg-composed-wrapper--image" />
              <div className="bg-composed-wrapper--content text-light text-center p-4">
                <h5 className="mb-1">Scrollable</h5>
                <p className="mb-0 opacity-7">
                  This menu box is scrollable (lg)
                </p>
              </div>
            </div>
            <PerfectScrollbar className="scroll-area-lg shadow-overflow">
              <Nav pills className=" flex-column p-3">
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
                <NavItem className="nav-item--header text-first font-weight-bold">
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
                  <NavLink href="#/" onClick={e => e.preventDefault()}>
                    <div className="nav-link-icon">
                      <FontAwesomeIcon icon={['far', 'eye']} />
                    </div>
                    <span>Statistics</span>
                  </NavLink>
                </NavItem>
              </Nav>
            </PerfectScrollbar>
            <div className="card-footer d-flex justify-content-between">
              <Button size="sm" color="neutral-warning">
                Action
              </Button>
              <Button size="sm" color="link" className="btn-link-warning px-0">
                <span>View details</span>
              </Button>
            </div>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
}
